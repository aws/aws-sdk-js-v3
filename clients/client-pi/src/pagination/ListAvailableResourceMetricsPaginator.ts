// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAvailableResourceMetricsCommand,
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
} from "../commands/ListAvailableResourceMetricsCommand";
import { PI } from "../PI";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PIClient,
  input: ListAvailableResourceMetricsCommandInput,
  ...args: any
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAvailableResourceMetricsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PI,
  input: ListAvailableResourceMetricsCommandInput,
  ...args: any
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  // @ts-ignore
  return await client.listAvailableResourceMetrics(input, ...args);
};
export async function* paginateListAvailableResourceMetrics(
  config: PIPaginationConfiguration,
  input: ListAvailableResourceMetricsCommandInput,
  ...additionalArguments: any
): Paginator<ListAvailableResourceMetricsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAvailableResourceMetricsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PI | PIClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
