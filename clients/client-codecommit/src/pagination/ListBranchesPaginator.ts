// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "../commands/ListBranchesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListBranchesCommandInput,
  ...args: any
): Promise<ListBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBranchesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: ListBranchesCommandInput,
  ...args: any
): Promise<ListBranchesCommandOutput> => {
  // @ts-ignore
  return await client.listBranches(input, ...args);
};
export async function* paginateListBranches(
  config: CodeCommitPaginationConfiguration,
  input: ListBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListBranchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBranchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
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
