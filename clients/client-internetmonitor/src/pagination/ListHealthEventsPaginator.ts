// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListHealthEventsCommand,
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput,
} from "../commands/ListHealthEventsCommand";
import { InternetMonitor } from "../InternetMonitor";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InternetMonitorClient,
  input: ListHealthEventsCommandInput,
  ...args: any
): Promise<ListHealthEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHealthEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: InternetMonitor,
  input: ListHealthEventsCommandInput,
  ...args: any
): Promise<ListHealthEventsCommandOutput> => {
  // @ts-ignore
  return await client.listHealthEvents(input, ...args);
};
export async function* paginateListHealthEvents(
  config: InternetMonitorPaginationConfiguration,
  input: ListHealthEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListHealthEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHealthEventsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof InternetMonitor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InternetMonitorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected InternetMonitor | InternetMonitorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
