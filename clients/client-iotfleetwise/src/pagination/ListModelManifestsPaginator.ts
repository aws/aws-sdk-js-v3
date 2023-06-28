// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListModelManifestsCommand,
  ListModelManifestsCommandInput,
  ListModelManifestsCommandOutput,
} from "../commands/ListModelManifestsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: ListModelManifestsCommandInput,
  ...args: any
): Promise<ListModelManifestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelManifestsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListModelManifests(
  config: IoTFleetWisePaginationConfiguration,
  input: ListModelManifestsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelManifestsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelManifestsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetWise | IoTFleetWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
