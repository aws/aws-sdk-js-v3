import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListPackageVersionsCommandInput,
  ...args: any
): Promise<ListPackageVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackageVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Codeartifact,
  input: ListPackageVersionsCommandInput,
  ...args: any
): Promise<ListPackageVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listPackageVersions(input, ...args);
};
export async function* listPackageVersionsPaginate(
  config: CodeartifactPaginationConfiguration,
  input: ListPackageVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackageVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackageVersionsCommandOutput;
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
