// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudHSMV2 } from "../CloudHSMV2";
import { CloudHSMV2Client } from "../CloudHSMV2Client";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudHSMV2Client,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudHSMV2,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
export async function* paginateListTags(
  config: CloudHSMV2PaginationConfiguration,
  input: ListTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudHSMV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudHSMV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudHSMV2 | CloudHSMV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
