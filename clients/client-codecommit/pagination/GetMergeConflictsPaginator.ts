import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "../commands/GetMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetMergeConflictsCommandInput,
  ...args: any
): Promise<GetMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMergeConflictsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeCommit,
  input: GetMergeConflictsCommandInput,
  ...args: any
): Promise<GetMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.getMergeConflicts(input, ...args);
};
export async function* getMergeConflictsPaginate(
  config: CodeCommitPaginationConfiguration,
  input: GetMergeConflictsCommandInput,
  ...additionalArguments: any
): Paginator<GetMergeConflictsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetMergeConflictsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxConflictFiles"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
