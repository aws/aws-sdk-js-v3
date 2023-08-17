// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelinesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPipelines(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelinesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalyticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
