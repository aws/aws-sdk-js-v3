import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingGroupsCommand,
  ListThingGroupsCommandInput,
  ListThingGroupsCommandOutput,
} from "../commands/ListThingGroupsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingGroupsCommandInput,
  ...args: any
): Promise<ListThingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListThingGroupsCommandInput,
  ...args: any
): Promise<ListThingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listThingGroups(input, ...args);
};
export async function* paginateListThingGroups(
  config: IoTPaginationConfiguration,
  input: ListThingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListThingGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingGroupsCommandOutput;
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
