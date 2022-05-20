// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServerlessApplicationRepositoryClient,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServerlessApplicationRepository,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listApplications(input, ...args);
};
export async function* paginateListApplications(
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof ServerlessApplicationRepository) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServerlessApplicationRepositoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error(
        "Invalid client, expected ServerlessApplicationRepository | ServerlessApplicationRepositoryClient"
      );
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
