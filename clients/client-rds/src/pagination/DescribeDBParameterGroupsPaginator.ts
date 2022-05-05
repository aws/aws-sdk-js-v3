// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBParameterGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBParameterGroups(input, ...args);
};
export async function* paginateDescribeDBParameterGroups(
  config: RDSPaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBParameterGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
