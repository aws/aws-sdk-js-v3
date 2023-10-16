// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIdMappingWorkflowsCommand,
  ListIdMappingWorkflowsCommandInput,
  ListIdMappingWorkflowsCommandOutput,
} from "../commands/ListIdMappingWorkflowsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListIdMappingWorkflowsCommandInput,
  ...args: any
): Promise<ListIdMappingWorkflowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdMappingWorkflowsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIdMappingWorkflows(
  config: EntityResolutionPaginationConfiguration,
  input: ListIdMappingWorkflowsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdMappingWorkflowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdMappingWorkflowsCommandOutput;
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
