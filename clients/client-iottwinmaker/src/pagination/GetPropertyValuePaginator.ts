// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetPropertyValueCommand,
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput,
} from "../commands/GetPropertyValueCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: GetPropertyValueCommandInput,
  ...args: any
): Promise<GetPropertyValueCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPropertyValueCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetPropertyValue(
  config: IoTTwinMakerPaginationConfiguration,
  input: GetPropertyValueCommandInput,
  ...additionalArguments: any
): Paginator<GetPropertyValueCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPropertyValueCommandOutput;
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
