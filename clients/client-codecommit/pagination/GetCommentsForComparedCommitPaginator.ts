import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "../commands/GetCommentsForComparedCommitCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetCommentsForComparedCommitCommandInput,
  ...args: any
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCommentsForComparedCommitCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: GetCommentsForComparedCommitCommandInput,
  ...args: any
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  // @ts-ignore
  return await client.getCommentsForComparedCommit(input, ...args);
};
export async function* getCommentsForComparedCommitPaginate(
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForComparedCommitCommandInput,
  ...additionalArguments: any
): Paginator<GetCommentsForComparedCommitCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCommentsForComparedCommitCommandOutput;
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
