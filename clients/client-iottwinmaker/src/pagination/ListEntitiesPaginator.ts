// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { IoTTwinMaker } from "../IoTTwinMaker";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: ListEntitiesCommandInput,
  ...args: any
): Promise<ListEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTTwinMaker,
  input: ListEntitiesCommandInput,
  ...args: any
): Promise<ListEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.listEntities(input, ...args);
};
export async function* paginateListEntities(
  config: IoTTwinMakerPaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTTwinMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTTwinMakerClient) {
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
