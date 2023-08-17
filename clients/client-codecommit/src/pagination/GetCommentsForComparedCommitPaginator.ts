// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "../commands/GetCommentsForComparedCommitCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentsForComparedCommitCommandInput,
  ...args: any
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentsForComparedCommitCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetCommentsForComparedCommit(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForComparedCommitCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentsForComparedCommitCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCommentsForComparedCommitCommandOutput;
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
