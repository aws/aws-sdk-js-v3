import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListPublishedSchemaArnsCommand,
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "../commands/ListPublishedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListPublishedSchemaArnsCommandInput,
  ...args: any
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublishedSchemaArnsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListPublishedSchemaArnsCommandInput,
  ...args: any
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.listPublishedSchemaArns(input, ...args);
};
export async function* listPublishedSchemaArnsPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListPublishedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListPublishedSchemaArnsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPublishedSchemaArnsCommandOutput;
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
