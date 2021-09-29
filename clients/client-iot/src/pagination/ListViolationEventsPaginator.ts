import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListViolationEventsCommand,
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "../commands/ListViolationEventsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListViolationEventsCommandInput,
  ...args: any
): Promise<ListViolationEventsCommandOutput> => {
  // @ts-ignore
  return await client.listViolationEvents(input, ...args);
};
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
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
