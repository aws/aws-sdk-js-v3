// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListConfiguredAudienceModelsCommand,
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "../commands/ListConfiguredAudienceModelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsMLClient,
  input: ListConfiguredAudienceModelsCommandInput,
  ...args: any
): Promise<ListConfiguredAudienceModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfiguredAudienceModelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfiguredAudienceModels(
  config: CleanRoomsMLPaginationConfiguration,
  input: ListConfiguredAudienceModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfiguredAudienceModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfiguredAudienceModelsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CleanRoomsMLClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CleanRoomsML | CleanRoomsMLClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
