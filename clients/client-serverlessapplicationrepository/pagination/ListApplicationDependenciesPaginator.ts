import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import {
  ListApplicationDependenciesCommand,
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "../commands/ListApplicationDependenciesCommand";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServerlessApplicationRepositoryClient,
  input: ListApplicationDependenciesCommandInput,
  ...args: any
): Promise<ListApplicationDependenciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationDependenciesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServerlessApplicationRepository,
  input: ListApplicationDependenciesCommandInput,
  ...args: any
): Promise<ListApplicationDependenciesCommandOutput> => {
  // @ts-ignore
  return await client.listApplicationDependencies(input, ...args);
};
export async function* listApplicationDependenciesPaginate(
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationDependenciesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationDependenciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationDependenciesCommandOutput;
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
