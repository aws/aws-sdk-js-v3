// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkflowBuildVersionsCommand,
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
} from "../commands/ListWorkflowBuildVersionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListWorkflowBuildVersionsCommandInput,
  ...args: any
): Promise<ListWorkflowBuildVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkflowBuildVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkflowBuildVersions(
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowBuildVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkflowBuildVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkflowBuildVersionsCommandOutput;
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
