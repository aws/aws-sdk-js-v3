import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "../commands/DescribePullRequestEventsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: DescribePullRequestEventsCommandInput,
  ...args: any
): Promise<DescribePullRequestEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePullRequestEventsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: DescribePullRequestEventsCommandInput,
  ...args: any
): Promise<DescribePullRequestEventsCommandOutput> => {
  // @ts-ignore
  return await client.describePullRequestEvents(input, ...args);
};
export async function* paginateDescribePullRequestEvents(
  config: CodeCommitPaginationConfiguration,
  input: DescribePullRequestEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePullRequestEventsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePullRequestEventsCommandOutput;
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
