// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListRepositoriesInDomainCommandInput,
  ...args: any
): Promise<ListRepositoriesInDomainCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesInDomainCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Codeartifact,
  input: ListRepositoriesInDomainCommandInput,
  ...args: any
): Promise<ListRepositoriesInDomainCommandOutput> => {
  // @ts-ignore
  return await client.listRepositoriesInDomain(input, ...args);
};
export async function* paginateListRepositoriesInDomain(
  config: CodeartifactPaginationConfiguration,
  input: ListRepositoriesInDomainCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesInDomainCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRepositoriesInDomainCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Codeartifact) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeartifactClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
