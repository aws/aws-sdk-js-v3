// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "../commands/ListWorkflowRunsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListWorkflowRunsCommandInput,
  ...args: any
): Promise<ListWorkflowRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowRuns(
  config: CodeCatalystPaginationConfiguration,
  input: ListWorkflowRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCatalystClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCatalyst | CodeCatalystClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
