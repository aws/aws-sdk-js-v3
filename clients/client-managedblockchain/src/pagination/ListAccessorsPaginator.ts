// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccessorsCommand,
  ListAccessorsCommandInput,
  ListAccessorsCommandOutput,
} from "../commands/ListAccessorsCommand";
import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListAccessorsCommandInput,
  ...args: any
): Promise<ListAccessorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListAccessorsCommandInput,
  ...args: any
): Promise<ListAccessorsCommandOutput> => {
  // @ts-ignore
  return await client.listAccessors(input, ...args);
};
export async function* paginateListAccessors(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListAccessorsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchain) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
