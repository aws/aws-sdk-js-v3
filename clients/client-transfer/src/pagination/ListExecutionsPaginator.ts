import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listExecutions(input, ...args);
};
export async function* paginateListExecutions(
  config: TransferPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExecutionsCommandOutput;
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
