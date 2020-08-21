import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListRepositoriesCommandInput,
  ...args: any
): Promise<ListRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Codeartifact,
  input: ListRepositoriesCommandInput,
  ...args: any
): Promise<ListRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.listRepositories(input, ...args);
};
export async function* listRepositoriesPaginate(
  config: CodeartifactPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRepositoriesCommandOutput;
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
