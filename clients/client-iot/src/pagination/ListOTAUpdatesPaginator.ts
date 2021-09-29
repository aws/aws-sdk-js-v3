import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListOTAUpdatesCommand,
  ListOTAUpdatesCommandInput,
  ListOTAUpdatesCommandOutput,
} from "../commands/ListOTAUpdatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListOTAUpdatesCommandInput,
  ...args: any
): Promise<ListOTAUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOTAUpdatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListOTAUpdatesCommandInput,
  ...args: any
): Promise<ListOTAUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.listOTAUpdates(input, ...args);
};
export async function* paginateListOTAUpdates(
  config: IoTPaginationConfiguration,
  input: ListOTAUpdatesCommandInput,
  ...additionalArguments: any
): Paginator<ListOTAUpdatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOTAUpdatesCommandOutput;
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
