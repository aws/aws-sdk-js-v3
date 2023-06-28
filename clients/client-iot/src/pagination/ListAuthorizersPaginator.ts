// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAuthorizersCommand,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput,
} from "../commands/ListAuthorizersCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
