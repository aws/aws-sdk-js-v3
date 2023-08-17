// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAttachedLinksCommand,
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput,
} from "../commands/ListAttachedLinksCommand";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OAMClient,
  input: ListAttachedLinksCommandInput,
  ...args: any
): Promise<ListAttachedLinksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedLinksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAttachedLinks(
  config: OAMPaginationConfiguration,
  input: ListAttachedLinksCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedLinksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedLinksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OAM | OAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
