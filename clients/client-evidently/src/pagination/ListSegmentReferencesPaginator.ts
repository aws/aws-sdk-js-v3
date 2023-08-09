// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSegmentReferencesCommand,
  ListSegmentReferencesCommandInput,
  ListSegmentReferencesCommandOutput,
} from "../commands/ListSegmentReferencesCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EvidentlyClient,
  input: ListSegmentReferencesCommandInput,
  ...args: any
): Promise<ListSegmentReferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSegmentReferencesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSegmentReferences(
  config: EvidentlyPaginationConfiguration,
  input: ListSegmentReferencesCommandInput,
  ...additionalArguments: any
): Paginator<ListSegmentReferencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSegmentReferencesCommandOutput;
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
