// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListConnectorsCommandInput,
  ...args: any
): Promise<ListConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListConnectorsCommandInput,
  ...args: any
): Promise<ListConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.listConnectors(input, ...args);
};
export async function* paginateListConnectors(
  config: TransferPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transfer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TransferClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transfer | TransferClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
