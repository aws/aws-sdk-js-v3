// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "../commands/ListNotificationsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListNotificationsCommandInput,
  ...args: any
): Promise<ListNotificationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotificationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListNotificationsCommandInput,
  ...args: any
): Promise<ListNotificationsCommandOutput> => {
  // @ts-ignore
  return await client.listNotifications(input, ...args);
};
export async function* paginateListNotifications(
  config: AuditManagerPaginationConfiguration,
  input: ListNotificationsCommandInput,
  ...additionalArguments: any
): Paginator<ListNotificationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNotificationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
