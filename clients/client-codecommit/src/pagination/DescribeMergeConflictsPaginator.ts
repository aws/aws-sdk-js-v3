// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "../commands/DescribeMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: DescribeMergeConflictsCommandInput,
  ...args: any
): Promise<DescribeMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMergeConflictsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: DescribeMergeConflictsCommandInput,
  ...args: any
): Promise<DescribeMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.describeMergeConflicts(input, ...args);
};
export async function* paginateDescribeMergeConflicts(
  config: CodeCommitPaginationConfiguration,
  input: DescribeMergeConflictsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMergeConflictsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMergeConflictsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxMergeHunks"] = config.pageSize;
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
