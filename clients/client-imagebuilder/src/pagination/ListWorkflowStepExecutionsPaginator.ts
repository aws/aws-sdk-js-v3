// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkflowStepExecutionsCommand,
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "../commands/ListWorkflowStepExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListWorkflowStepExecutionsCommandInput,
  ...args: any
): Promise<ListWorkflowStepExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowStepExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowStepExecutions(
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowStepExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowStepExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowStepExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
