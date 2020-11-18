import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedElasticsearchInstanceOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedElasticsearchInstanceOfferings(input, ...args);
};
export async function* paginateDescribeReservedElasticsearchInstanceOfferings(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedElasticsearchInstanceOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
