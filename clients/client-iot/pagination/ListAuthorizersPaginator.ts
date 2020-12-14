import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAuthorizersCommand,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput,
} from "../commands/ListAuthorizersCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuthorizersCommandInput,
  ...args: any
): Promise<ListAuthorizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuthorizersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAuthorizersCommandInput,
  ...args: any
): Promise<ListAuthorizersCommandOutput> => {
  // @ts-ignore
  return await client.listAuthorizers(input, ...args);
};
export async function* paginateListAuthorizers(
  config: IoTPaginationConfiguration,
  input: ListAuthorizersCommandInput,
  ...additionalArguments: any
): Paginator<ListAuthorizersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuthorizersCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
