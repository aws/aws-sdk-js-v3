// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetPropertyValueCommand,
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput,
} from "../commands/GetPropertyValueCommand";
import { IoTTwinMaker } from "../IoTTwinMaker";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoTTwinMaker,
  input: GetPropertyValueCommandInput,
  ...args: any
): Promise<GetPropertyValueCommandOutput> => {
  // @ts-ignore
  return await client.getPropertyValue(input, ...args);
};
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
