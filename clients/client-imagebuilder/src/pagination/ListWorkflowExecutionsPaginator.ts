// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkflowExecutionsCommand,
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "../commands/ListWorkflowExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListWorkflowExecutionsCommandInput,
  ...args: any
): Promise<ListWorkflowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowExecutions(
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowExecutionsCommandOutput;
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
