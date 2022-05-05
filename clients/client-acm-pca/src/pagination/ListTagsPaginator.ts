// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ACMPCA } from "../ACMPCA";
import { ACMPCAClient } from "../ACMPCAClient";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ACMPCAClient,
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
  client: ACMPCA,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
export async function* paginateListTags(
  config: ACMPCAPaginationConfiguration,
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
    if (config.client instanceof ACMPCA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
