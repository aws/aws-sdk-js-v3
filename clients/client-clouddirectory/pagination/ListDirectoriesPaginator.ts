import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListDirectoriesCommand,
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput,
} from "../commands/ListDirectoriesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListDirectoriesCommandInput,
  ...args: any
): Promise<ListDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDirectoriesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListDirectoriesCommandInput,
  ...args: any
): Promise<ListDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.listDirectories(input, ...args);
};
export async function* listDirectoriesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListDirectoriesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDirectoriesCommandOutput;
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
