// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListRepositoriesCommandInput,
  ...args: any
): Promise<ListRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRepositories(
  config: CodeCommitPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRepositoriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeCommitClient) {
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
