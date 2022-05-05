// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildsCommandInput,
  ...args: any
): Promise<ListBuildsCommandOutput> => {
  // @ts-ignore
  return await client.listBuilds(input, ...args);
};
export async function* paginateListBuilds(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
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
