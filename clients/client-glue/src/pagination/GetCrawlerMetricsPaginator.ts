// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "../commands/GetCrawlerMetricsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetCrawlerMetricsCommandInput,
  ...args: any
): Promise<GetCrawlerMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCrawlerMetricsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetCrawlerMetrics(
  config: GluePaginationConfiguration,
  input: GetCrawlerMetricsCommandInput,
  ...additionalArguments: any
): Paginator<GetCrawlerMetricsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCrawlerMetricsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
