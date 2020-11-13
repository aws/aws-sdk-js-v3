import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import { ListIndexCommand, ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListIndexCommandInput,
  ...args: any
): Promise<ListIndexCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndexCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListIndexCommandInput,
  ...args: any
): Promise<ListIndexCommandOutput> => {
  // @ts-ignore
  return await client.listIndex(input, ...args);
};
export async function* listIndexPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListIndexCommandInput,
  ...additionalArguments: any
): Paginator<ListIndexCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndexCommandOutput;
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
