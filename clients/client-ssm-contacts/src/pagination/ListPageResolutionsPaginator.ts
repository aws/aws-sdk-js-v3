// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPageResolutionsCommand,
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput,
} from "../commands/ListPageResolutionsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListPageResolutionsCommandInput,
  ...args: any
): Promise<ListPageResolutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPageResolutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPageResolutions(
  config: SSMContactsPaginationConfiguration,
  input: ListPageResolutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPageResolutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPageResolutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SSMContactsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
