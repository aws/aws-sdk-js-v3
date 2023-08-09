// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import {
  ListEventTypesCommand,
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
} from "../commands/ListEventTypesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodestarNotificationsClient,
  input: ListEventTypesCommandInput,
  ...args: any
): Promise<ListEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventTypes(
  config: CodestarNotificationsPaginationConfiguration,
  input: ListEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListEventTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodestarNotificationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodestarNotifications | CodestarNotificationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
