// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListThingsInThingGroupCommand,
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "../commands/ListThingsInThingGroupCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingsInThingGroupCommandInput,
  ...args: any
): Promise<ListThingsInThingGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingsInThingGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListThingsInThingGroupCommandInput,
  ...args: any
): Promise<ListThingsInThingGroupCommandOutput> => {
  // @ts-ignore
  return await client.listThingsInThingGroup(input, ...args);
};
export async function* paginateListThingsInThingGroup(
  config: IoTPaginationConfiguration,
  input: ListThingsInThingGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListThingsInThingGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingsInThingGroupCommandOutput;
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
