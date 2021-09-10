import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import {
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedInstanceOfferingsCommand";
import { OpenSearchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedInstanceOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedInstanceOfferings(input, ...args);
};
export async function* paginateDescribeReservedInstanceOfferings(
  config: OpenSearchPaginationConfiguration,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedInstanceOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedInstanceOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
