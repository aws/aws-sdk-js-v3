// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentReactionsCommand,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "../commands/GetCommentReactionsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentReactionsCommandInput,
  ...args: any
): Promise<GetCommentReactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentReactionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetCommentReactions(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentReactionsCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentReactionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCommentReactionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
