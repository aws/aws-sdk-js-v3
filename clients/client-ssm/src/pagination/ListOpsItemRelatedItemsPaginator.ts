// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOpsItemRelatedItemsCommand,
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "../commands/ListOpsItemRelatedItemsCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListOpsItemRelatedItemsCommandInput,
  ...args: any
): Promise<ListOpsItemRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOpsItemRelatedItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: ListOpsItemRelatedItemsCommandInput,
  ...args: any
): Promise<ListOpsItemRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.listOpsItemRelatedItems(input, ...args);
};
export async function* paginateListOpsItemRelatedItems(
  config: SSMPaginationConfiguration,
  input: ListOpsItemRelatedItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListOpsItemRelatedItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOpsItemRelatedItemsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
