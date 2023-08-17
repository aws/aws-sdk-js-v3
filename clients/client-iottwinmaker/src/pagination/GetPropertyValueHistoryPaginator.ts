// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetPropertyValueHistoryCommand,
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "../commands/GetPropertyValueHistoryCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: GetPropertyValueHistoryCommandInput,
  ...args: any
): Promise<GetPropertyValueHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPropertyValueHistoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetPropertyValueHistory(
  config: IoTTwinMakerPaginationConfiguration,
  input: GetPropertyValueHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetPropertyValueHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPropertyValueHistoryCommandOutput;
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
