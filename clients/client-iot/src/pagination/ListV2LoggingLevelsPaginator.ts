// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListV2LoggingLevelsCommand,
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "../commands/ListV2LoggingLevelsCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListV2LoggingLevelsCommandInput,
  ...args: any
): Promise<ListV2LoggingLevelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListV2LoggingLevelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListV2LoggingLevelsCommandInput,
  ...args: any
): Promise<ListV2LoggingLevelsCommandOutput> => {
  // @ts-ignore
  return await client.listV2LoggingLevels(input, ...args);
};
export async function* paginateListV2LoggingLevels(
  config: IoTPaginationConfiguration,
  input: ListV2LoggingLevelsCommandInput,
  ...additionalArguments: any
): Paginator<ListV2LoggingLevelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListV2LoggingLevelsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
