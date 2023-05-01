// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListViolationEventsCommand,
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "../commands/ListViolationEventsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListViolationEventsCommandInput,
  ...args: any
): Promise<ListViolationEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListViolationEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListViolationEvents(
  config: IoTPaginationConfiguration,
  input: ListViolationEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListViolationEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListViolationEventsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
