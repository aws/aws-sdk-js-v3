// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListQueuedMessagesCommand,
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput,
} from "../commands/ListQueuedMessagesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListQueuedMessagesCommandInput,
  ...args: any
): Promise<ListQueuedMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueuedMessagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListQueuedMessages(
  config: IoTWirelessPaginationConfiguration,
  input: ListQueuedMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListQueuedMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueuedMessagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof IoTWirelessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
