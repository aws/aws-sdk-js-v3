// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListParallelDataCommand,
  ListParallelDataCommandInput,
  ListParallelDataCommandOutput,
} from "../commands/ListParallelDataCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TranslateClient,
  input: ListParallelDataCommandInput,
  ...args: any
): Promise<ListParallelDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListParallelDataCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListParallelData(
  config: TranslatePaginationConfiguration,
  input: ListParallelDataCommandInput,
  ...additionalArguments: any
): Paginator<ListParallelDataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListParallelDataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranslateClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Translate | TranslateClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
