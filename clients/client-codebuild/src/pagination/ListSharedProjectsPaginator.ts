// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSharedProjectsCommand,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
} from "../commands/ListSharedProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListSharedProjectsCommandInput,
  ...args: any
): Promise<ListSharedProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSharedProjectsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSharedProjects(
  config: CodeBuildPaginationConfiguration,
  input: ListSharedProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListSharedProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSharedProjectsCommandOutput;
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
