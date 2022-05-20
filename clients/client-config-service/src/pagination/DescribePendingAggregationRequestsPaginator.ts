// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribePendingAggregationRequestsCommand,
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "../commands/DescribePendingAggregationRequestsCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribePendingAggregationRequestsCommandInput,
  ...args: any
): Promise<DescribePendingAggregationRequestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePendingAggregationRequestsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribePendingAggregationRequestsCommandInput,
  ...args: any
): Promise<DescribePendingAggregationRequestsCommandOutput> => {
  // @ts-ignore
  return await client.describePendingAggregationRequests(input, ...args);
};
export async function* paginateDescribePendingAggregationRequests(
  config: ConfigServicePaginationConfiguration,
  input: DescribePendingAggregationRequestsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePendingAggregationRequestsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePendingAggregationRequestsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
