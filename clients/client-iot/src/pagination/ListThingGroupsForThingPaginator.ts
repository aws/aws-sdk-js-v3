import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingGroupsForThingCommand,
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "../commands/ListThingGroupsForThingCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingGroupsForThingCommandInput,
  ...args: any
): Promise<ListThingGroupsForThingCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingGroupsForThingCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListThingGroupsForThingCommandInput,
  ...args: any
): Promise<ListThingGroupsForThingCommandOutput> => {
  // @ts-ignore
  return await client.listThingGroupsForThing(input, ...args);
};
export async function* paginateListThingGroupsForThing(
  config: IoTPaginationConfiguration,
  input: ListThingGroupsForThingCommandInput,
  ...additionalArguments: any
): Paginator<ListThingGroupsForThingCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingGroupsForThingCommandOutput;
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
