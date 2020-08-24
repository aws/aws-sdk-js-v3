import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListRepositoriesInDomainCommandInput,
  ...args: any
): Promise<ListRepositoriesInDomainCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesInDomainCommand(input, ...args));
};
const makePagedRequest = async (
  client: Codeartifact,
  input: ListRepositoriesInDomainCommandInput,
  ...args: any
): Promise<ListRepositoriesInDomainCommandOutput> => {
  // @ts-ignore
  return await client.listRepositoriesInDomain(input, ...args);
};
export async function* listRepositoriesInDomainPaginate(
  config: CodeartifactPaginationConfiguration,
  input: ListRepositoriesInDomainCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesInDomainCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRepositoriesInDomainCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Codeartifact) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeartifactClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
