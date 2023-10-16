// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssetContractsCommand,
  ListAssetContractsCommandInput,
  ListAssetContractsCommandOutput,
} from "../commands/ListAssetContractsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainQueryClient,
  input: ListAssetContractsCommandInput,
  ...args: any
): Promise<ListAssetContractsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetContractsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssetContracts(
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListAssetContractsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetContractsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetContractsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchainQueryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchainQuery | ManagedBlockchainQueryClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
