// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAgreementsCommand,
  ListAgreementsCommandInput,
  ListAgreementsCommandOutput,
} from "../commands/ListAgreementsCommand";
import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListAgreementsCommandInput,
  ...args: any
): Promise<ListAgreementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgreementsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListAgreementsCommandInput,
  ...args: any
): Promise<ListAgreementsCommandOutput> => {
  // @ts-ignore
  return await client.listAgreements(input, ...args);
};
export async function* paginateListAgreements(
  config: TransferPaginationConfiguration,
  input: ListAgreementsCommandInput,
  ...additionalArguments: any
): Paginator<ListAgreementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgreementsCommandOutput;
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
