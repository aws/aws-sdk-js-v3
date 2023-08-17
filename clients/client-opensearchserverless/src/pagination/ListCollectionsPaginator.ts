// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "../commands/ListCollectionsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListCollectionsCommandInput,
  ...args: any
): Promise<ListCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCollectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCollections(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListCollectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCollectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCollectionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearchServerless | OpenSearchServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
