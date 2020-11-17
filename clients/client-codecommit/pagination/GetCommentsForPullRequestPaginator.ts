import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "../commands/GetCommentsForPullRequestCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentsForPullRequestCommandInput,
  ...args: any
): Promise<GetCommentsForPullRequestCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentsForPullRequestCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: GetCommentsForPullRequestCommandInput,
  ...args: any
): Promise<GetCommentsForPullRequestCommandOutput> => {
  // @ts-ignore
  return await client.getCommentsForPullRequest(input, ...args);
};
export async function* paginateGetCommentsForPullRequest(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForPullRequestCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentsForPullRequestCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCommentsForPullRequestCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
