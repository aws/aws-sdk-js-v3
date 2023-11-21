// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPropertiesCommand,
  ListPropertiesCommandInput,
  ListPropertiesCommandOutput,
} from "../commands/ListPropertiesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: ListPropertiesCommandInput,
  ...args: any
): Promise<ListPropertiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPropertiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProperties(
  config: IoTTwinMakerPaginationConfiguration,
  input: ListPropertiesCommandInput,
  ...additionalArguments: any
): Paginator<ListPropertiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPropertiesCommandOutput;
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
