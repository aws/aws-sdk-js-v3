import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectChildrenCommand,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "../commands/ListObjectChildrenCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectChildrenCommandInput,
  ...args: any
): Promise<ListObjectChildrenCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectChildrenCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectChildrenCommandInput,
  ...args: any
): Promise<ListObjectChildrenCommandOutput> => {
  // @ts-ignore
  return await client.listObjectChildren(input, ...args);
};
export async function* paginateListObjectChildren(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectChildrenCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectChildrenCommandOutput;
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
