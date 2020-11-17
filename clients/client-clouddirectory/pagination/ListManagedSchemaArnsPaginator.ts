import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListManagedSchemaArnsCommand,
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListManagedSchemaArnsCommandInput,
  ...args: any
): Promise<ListManagedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedSchemaArnsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListManagedSchemaArnsCommandInput,
  ...args: any
): Promise<ListManagedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.listManagedSchemaArns(input, ...args);
};
export async function* paginateListManagedSchemaArns(
  config: CloudDirectoryPaginationConfiguration,
  input: ListManagedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedSchemaArnsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedSchemaArnsCommandOutput;
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
