// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListPolicyAttachmentsCommand,
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "../commands/ListPolicyAttachmentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListPolicyAttachmentsCommandInput,
  ...args: any
): Promise<ListPolicyAttachmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyAttachmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListPolicyAttachmentsCommandInput,
  ...args: any
): Promise<ListPolicyAttachmentsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyAttachments(input, ...args);
};
export async function* paginateListPolicyAttachments(
  config: CloudDirectoryPaginationConfiguration,
  input: ListPolicyAttachmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyAttachmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyAttachmentsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
