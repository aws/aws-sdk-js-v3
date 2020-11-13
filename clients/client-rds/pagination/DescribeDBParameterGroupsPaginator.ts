import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBParameterGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBParameterGroups(input, ...args);
};
export async function* describeDBParameterGroupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBParameterGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
