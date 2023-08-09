// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListComponentTypesCommand,
  ListComponentTypesCommandInput,
  ListComponentTypesCommandOutput,
} from "../commands/ListComponentTypesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: ListComponentTypesCommandInput,
  ...args: any
): Promise<ListComponentTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListComponentTypes(
  config: IoTTwinMakerPaginationConfiguration,
  input: ListComponentTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComponentTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTTwinMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTTwinMaker | IoTTwinMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
