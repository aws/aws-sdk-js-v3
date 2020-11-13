import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedCacheNodesOfferingsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedCacheNodesOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedCacheNodesOfferings(input, ...args);
};
export async function* describeReservedCacheNodesOfferingsPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedCacheNodesOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedCacheNodesOfferingsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
