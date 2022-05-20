// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBSubnetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBSubnetGroups(input, ...args);
};
export async function* paginateDescribeDBSubnetGroups(
  config: RDSPaginationConfiguration,
  input: DescribeDBSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBSubnetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBSubnetGroupsCommandOutput;
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
