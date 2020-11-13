import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectParentPathsCommand,
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "../commands/ListObjectParentPathsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectParentPathsCommandInput,
  ...args: any
): Promise<ListObjectParentPathsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectParentPathsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectParentPathsCommandInput,
  ...args: any
): Promise<ListObjectParentPathsCommandOutput> => {
  // @ts-ignore
  return await client.listObjectParentPaths(input, ...args);
};
export async function* listObjectParentPathsPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentPathsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectParentPathsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectParentPathsCommandOutput;
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
