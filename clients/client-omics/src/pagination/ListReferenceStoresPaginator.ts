// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListReferenceStoresCommand,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "../commands/ListReferenceStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReferenceStoresCommandInput,
  ...args: any
): Promise<ListReferenceStoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReferenceStoresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListReferenceStores(
  config: OmicsPaginationConfiguration,
  input: ListReferenceStoresCommandInput,
  ...additionalArguments: any
): Paginator<ListReferenceStoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReferenceStoresCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
