// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "../commands/ListEntitlementsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListEntitlementsCommandInput,
  ...args: any
): Promise<ListEntitlementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitlementsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEntitlements(
  config: MediaConnectPaginationConfiguration,
  input: ListEntitlementsCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitlementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitlementsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
