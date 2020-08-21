import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectParentsCommand,
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput,
} from "../commands/ListObjectParentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectParentsCommandInput,
  ...args: any
): Promise<ListObjectParentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectParentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectParentsCommandInput,
  ...args: any
): Promise<ListObjectParentsCommandOutput> => {
  // @ts-ignore
  return await client.listObjectParents(input, ...args);
};
export async function* listObjectParentsPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectParentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListObjectParentsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
