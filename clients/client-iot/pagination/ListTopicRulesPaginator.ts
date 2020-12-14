import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListTopicRulesCommand,
  ListTopicRulesCommandInput,
  ListTopicRulesCommandOutput,
} from "../commands/ListTopicRulesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListTopicRulesCommandInput,
  ...args: any
): Promise<ListTopicRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTopicRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListTopicRulesCommandInput,
  ...args: any
): Promise<ListTopicRulesCommandOutput> => {
  // @ts-ignore
  return await client.listTopicRules(input, ...args);
};
export async function* paginateListTopicRules(
  config: IoTPaginationConfiguration,
  input: ListTopicRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListTopicRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTopicRulesCommandOutput;
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
