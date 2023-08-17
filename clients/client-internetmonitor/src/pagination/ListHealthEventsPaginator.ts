// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListHealthEventsCommand,
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput,
} from "../commands/ListHealthEventsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof InternetMonitorClient) {
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
