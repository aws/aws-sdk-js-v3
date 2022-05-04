// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRetainedMessagesCommand,
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
} from "../commands/ListRetainedMessagesCommand";
import { IoTDataPlane } from "../IoTDataPlane";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";
import { IoTDataPlanePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTDataPlaneClient,
  input: ListRetainedMessagesCommandInput,
  ...args: any
): Promise<ListRetainedMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRetainedMessagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTDataPlane,
  input: ListRetainedMessagesCommandInput,
  ...args: any
): Promise<ListRetainedMessagesCommandOutput> => {
  // @ts-ignore
  return await client.listRetainedMessages(input, ...args);
};
export async function* paginateListRetainedMessages(
  config: IoTDataPlanePaginationConfiguration,
  input: ListRetainedMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListRetainedMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRetainedMessagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTDataPlane) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTDataPlaneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTDataPlane | IoTDataPlaneClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
