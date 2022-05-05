// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedElasticsearchInstancesCommand,
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstancesCommand";
import { ElasticsearchService } from "../ElasticsearchService";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribeReservedElasticsearchInstancesCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedElasticsearchInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribeReservedElasticsearchInstancesCommandInput,
  ...args: any
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedElasticsearchInstances(input, ...args);
};
export async function* paginateDescribeReservedElasticsearchInstances(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeReservedElasticsearchInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedElasticsearchInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedElasticsearchInstancesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
