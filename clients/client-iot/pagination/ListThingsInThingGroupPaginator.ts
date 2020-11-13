import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingsInThingGroupCommand,
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "../commands/ListThingsInThingGroupCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingsInThingGroupCommandInput,
  ...args: any
): Promise<ListThingsInThingGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingsInThingGroupCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListThingsInThingGroupCommandInput,
  ...args: any
): Promise<ListThingsInThingGroupCommandOutput> => {
  // @ts-ignore
  return await client.listThingsInThingGroup(input, ...args);
};
export async function* listThingsInThingGroupPaginate(
  config: IoTPaginationConfiguration,
  input: ListThingsInThingGroupCommandInput,
  ...additionalArguments: any
): Paginator<ListThingsInThingGroupCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
