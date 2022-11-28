// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAttachedLinksCommand,
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput,
} from "../commands/ListAttachedLinksCommand";
import { OAM } from "../OAM";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: OAM,
  input: ListAttachedLinksCommandInput,
  ...args: any
): Promise<ListAttachedLinksCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedLinks(input, ...args);
};
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
    if (config.client instanceof OAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OAMClient) {
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
