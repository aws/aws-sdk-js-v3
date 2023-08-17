// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodestarNotificationsClient,
  input: ListTargetsCommandInput,
  ...args: any
): Promise<ListTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTargets(
  config: CodestarNotificationsPaginationConfiguration,
  input: ListTargetsCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetsCommandOutput;
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
