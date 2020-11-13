import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackageVersionAssetsCommand,
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "../commands/ListPackageVersionAssetsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeartifactClient,
  input: ListPackageVersionAssetsCommandInput,
  ...args: any
): Promise<ListPackageVersionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackageVersionAssetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Codeartifact,
  input: ListPackageVersionAssetsCommandInput,
  ...args: any
): Promise<ListPackageVersionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listPackageVersionAssets(input, ...args);
};
export async function* listPackageVersionAssetsPaginate(
  config: CodeartifactPaginationConfiguration,
  input: ListPackageVersionAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackageVersionAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackageVersionAssetsCommandOutput;
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
