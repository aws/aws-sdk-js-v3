// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFeaturesCommand,
  ListFeaturesCommandInput,
  ListFeaturesCommandOutput,
} from "../commands/ListFeaturesCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EvidentlyClient,
  input: ListFeaturesCommandInput,
  ...args: any
): Promise<ListFeaturesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFeaturesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFeatures(
  config: EvidentlyPaginationConfiguration,
  input: ListFeaturesCommandInput,
  ...additionalArguments: any
): Paginator<ListFeaturesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFeaturesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EvidentlyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Evidently | EvidentlyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
