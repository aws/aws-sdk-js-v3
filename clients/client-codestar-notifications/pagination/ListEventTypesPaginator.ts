import { CodestarNotifications } from "../CodestarNotifications";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import {
  ListEventTypesCommand,
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
} from "../commands/ListEventTypesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodestarNotificationsClient,
  input: ListEventTypesCommandInput,
  ...args: any
): Promise<ListEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodestarNotifications,
  input: ListEventTypesCommandInput,
  ...args: any
): Promise<ListEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.listEventTypes(input, ...args);
};
export async function* listEventTypesPaginate(
  config: CodestarNotificationsPaginationConfiguration,
  input: ListEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListEventTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodestarNotifications) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodestarNotificationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodestarNotifications | CodestarNotificationsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
