// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDatasetContentsCommand,
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "../commands/ListDatasetContentsCommand";
import { IoTAnalytics } from "../IoTAnalytics";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListDatasetContentsCommandInput,
  ...args: any
): Promise<ListDatasetContentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetContentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTAnalytics,
  input: ListDatasetContentsCommandInput,
  ...args: any
): Promise<ListDatasetContentsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetContents(input, ...args);
};
export async function* paginateListDatasetContents(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatasetContentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetContentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetContentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalytics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTAnalyticsClient) {
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
