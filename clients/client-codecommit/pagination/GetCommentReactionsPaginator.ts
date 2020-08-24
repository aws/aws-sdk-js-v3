import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentReactionsCommand,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "../commands/GetCommentReactionsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentReactionsCommandInput,
  ...args: any
): Promise<GetCommentReactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentReactionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeCommit,
  input: GetCommentReactionsCommandInput,
  ...args: any
): Promise<GetCommentReactionsCommandOutput> => {
  // @ts-ignore
  return await client.getCommentReactions(input, ...args);
};
export async function* getCommentReactionsPaginate(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentReactionsCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentReactionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetCommentReactionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
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
