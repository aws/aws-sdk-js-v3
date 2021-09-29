import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectPoliciesCommand,
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
} from "../commands/ListObjectPoliciesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectPoliciesCommandInput,
  ...args: any
): Promise<ListObjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectPoliciesCommandInput,
  ...args: any
): Promise<ListObjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listObjectPolicies(input, ...args);
};
export async function* paginateListObjectPolicies(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectPoliciesCommandOutput;
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
