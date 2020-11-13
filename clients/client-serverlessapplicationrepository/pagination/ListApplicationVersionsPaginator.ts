import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServerlessApplicationRepositoryClient,
  input: ListApplicationVersionsCommandInput,
  ...args: any
): Promise<ListApplicationVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServerlessApplicationRepository,
  input: ListApplicationVersionsCommandInput,
  ...args: any
): Promise<ListApplicationVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listApplicationVersions(input, ...args);
};
export async function* listApplicationVersionsPaginate(
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationVersionsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
