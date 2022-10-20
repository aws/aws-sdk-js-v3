// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRumMetricsDestinationsCommand,
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
} from "../commands/ListRumMetricsDestinationsCommand";
import { RUM } from "../RUM";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RUMClient,
  input: ListRumMetricsDestinationsCommandInput,
  ...args: any
): Promise<ListRumMetricsDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRumMetricsDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RUM,
  input: ListRumMetricsDestinationsCommandInput,
  ...args: any
): Promise<ListRumMetricsDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listRumMetricsDestinations(input, ...args);
};
export async function* paginateListRumMetricsDestinations(
  config: RUMPaginationConfiguration,
  input: ListRumMetricsDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRumMetricsDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRumMetricsDestinationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RUM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RUMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RUM | RUMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
