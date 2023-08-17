// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListGrantsCommand, ListGrantsCommandInput, ListGrantsCommandOutput } from "../commands/ListGrantsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListGrantsCommandInput,
  ...args: any
): Promise<ListGrantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGrantsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGrants(
  config: KMSPaginationConfiguration,
  input: ListGrantsCommandInput,
  ...additionalArguments: any
): Paginator<ListGrantsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGrantsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
