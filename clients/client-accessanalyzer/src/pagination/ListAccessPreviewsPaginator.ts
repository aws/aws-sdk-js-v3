// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAccessPreviewsCommand,
  ListAccessPreviewsCommandInput,
  ListAccessPreviewsCommandOutput,
} from "../commands/ListAccessPreviewsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListAccessPreviewsCommandInput,
  ...args: any
): Promise<ListAccessPreviewsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPreviewsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccessPreviews(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPreviewsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPreviewsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
