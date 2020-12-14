import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListServersCommandInput,
  ...args: any
): Promise<ListServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListServersCommandInput,
  ...args: any
): Promise<ListServersCommandOutput> => {
  // @ts-ignore
  return await client.listServers(input, ...args);
};
export async function* paginateListServers(
  config: TransferPaginationConfiguration,
  input: ListServersCommandInput,
  ...additionalArguments: any
): Paginator<ListServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServersCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
