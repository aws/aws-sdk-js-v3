import { CodestarNotifications } from "../CodestarNotifications";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient";
import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodestarNotificationsClient,
  input: ListTargetsCommandInput,
  ...args: any
): Promise<ListTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodestarNotifications,
  input: ListTargetsCommandInput,
  ...args: any
): Promise<ListTargetsCommandOutput> => {
  // @ts-ignore
  return await client.listTargets(input, ...args);
};
export async function* listTargetsPaginate(
  config: CodestarNotificationsPaginationConfiguration,
  input: ListTargetsCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetsCommandOutput;
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
