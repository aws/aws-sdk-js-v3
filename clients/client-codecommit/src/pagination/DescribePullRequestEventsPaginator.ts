// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "../commands/DescribePullRequestEventsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: DescribePullRequestEventsCommandInput,
  ...args: any
): Promise<DescribePullRequestEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePullRequestEventsCommand(input), ...args);
};
/**
 * @private
 */
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
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
