// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "../commands/ListTransactionsCommand";
import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: ListTransactionsCommandInput,
  ...args: any
): Promise<ListTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTransactionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LakeFormation,
  input: ListTransactionsCommandInput,
  ...args: any
): Promise<ListTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.listTransactions(input, ...args);
};
export async function* paginateListTransactions(
  config: LakeFormationPaginationConfiguration,
  input: ListTransactionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTransactionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTransactionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
