// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListIndicesCommandInput,
  ...args: any
): Promise<ListIndicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIndices(
  config: IoTPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...additionalArguments: any
): Paginator<ListIndicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndicesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
