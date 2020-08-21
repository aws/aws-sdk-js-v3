import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "../commands/DescribeClusterParameterGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterParameterGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterParameterGroups(input, ...args);
};
export async function* describeClusterParameterGroupsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClusterParameterGroupsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
