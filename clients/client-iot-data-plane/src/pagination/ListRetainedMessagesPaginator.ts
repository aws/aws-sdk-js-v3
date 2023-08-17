// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRetainedMessagesCommand,
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
} from "../commands/ListRetainedMessagesCommand";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";
import { IoTDataPlanePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof IoTDataPlaneClient) {
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
