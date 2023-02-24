// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedNodesOfferingsCommand,
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedNodesOfferingsCommand";
import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MemoryDBClient,
  input: DescribeReservedNodesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedNodesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedNodesOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MemoryDB,
  input: DescribeReservedNodesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedNodesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedNodesOfferings(input, ...args);
};
export async function* paginateDescribeReservedNodesOfferings(
  config: MemoryDBPaginationConfiguration,
  input: DescribeReservedNodesOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedNodesOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedNodesOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MemoryDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MemoryDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MemoryDB | MemoryDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
