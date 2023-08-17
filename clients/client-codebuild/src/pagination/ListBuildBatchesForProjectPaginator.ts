// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "../commands/ListBuildBatchesForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildBatchesForProjectCommandInput,
  ...args: any
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildBatchesForProjectCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBuildBatchesForProject(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesForProjectCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildBatchesForProjectCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildBatchesForProjectCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
