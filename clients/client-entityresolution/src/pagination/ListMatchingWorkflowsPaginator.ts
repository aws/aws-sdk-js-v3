// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMatchingWorkflowsCommand,
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput,
} from "../commands/ListMatchingWorkflowsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListMatchingWorkflowsCommandInput,
  ...args: any
): Promise<ListMatchingWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMatchingWorkflowsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMatchingWorkflows(
  config: EntityResolutionPaginationConfiguration,
  input: ListMatchingWorkflowsCommandInput,
  ...additionalArguments: any
): Paginator<ListMatchingWorkflowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMatchingWorkflowsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EntityResolutionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EntityResolution | EntityResolutionClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
