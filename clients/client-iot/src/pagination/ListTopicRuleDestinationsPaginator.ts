import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListTopicRuleDestinationsCommand,
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "../commands/ListTopicRuleDestinationsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListTopicRuleDestinationsCommandInput,
  ...args: any
): Promise<ListTopicRuleDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTopicRuleDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListTopicRuleDestinationsCommandInput,
  ...args: any
): Promise<ListTopicRuleDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listTopicRuleDestinations(input, ...args);
};
export async function* paginateListTopicRuleDestinations(
  config: IoTPaginationConfiguration,
  input: ListTopicRuleDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTopicRuleDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTopicRuleDestinationsCommandOutput;
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
