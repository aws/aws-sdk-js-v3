import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListAppliedSchemaArnsCommand,
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "../commands/ListAppliedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListAppliedSchemaArnsCommandInput,
  ...args: any
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppliedSchemaArnsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListAppliedSchemaArnsCommandInput,
  ...args: any
): Promise<ListAppliedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.listAppliedSchemaArns(input, ...args);
};
export async function* listAppliedSchemaArnsPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListAppliedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppliedSchemaArnsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppliedSchemaArnsCommandOutput;
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
