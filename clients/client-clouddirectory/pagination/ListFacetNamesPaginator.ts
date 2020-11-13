import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetNamesCommand,
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput,
} from "../commands/ListFacetNamesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListFacetNamesCommandInput,
  ...args: any
): Promise<ListFacetNamesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFacetNamesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListFacetNamesCommandInput,
  ...args: any
): Promise<ListFacetNamesCommandOutput> => {
  // @ts-ignore
  return await client.listFacetNames(input, ...args);
};
export async function* listFacetNamesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetNamesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetNamesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFacetNamesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
