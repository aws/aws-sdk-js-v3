import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "../commands/ListPackagesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListPackagesCommandInput,
  ...args: any
): Promise<ListPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Codeartifact,
  input: ListPackagesCommandInput,
  ...args: any
): Promise<ListPackagesCommandOutput> => {
  // @ts-ignore
  return await client.listPackages(input, ...args);
};
export async function* listPackagesPaginate(
  config: CodeartifactPaginationConfiguration,
  input: ListPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackagesCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
