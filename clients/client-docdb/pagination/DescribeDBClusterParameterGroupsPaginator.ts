import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterParameterGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DocDB,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBClusterParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterParameterGroups(input, ...args);
};
export async function* describeDBClusterParameterGroupsPaginate(
  config: DocDBPaginationConfiguration,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterParameterGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
