// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { Transfer } from "../Transfer";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListSecurityPoliciesCommandInput,
  ...args: any
): Promise<ListSecurityPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transfer,
  input: ListSecurityPoliciesCommandInput,
  ...args: any
): Promise<ListSecurityPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityPolicies(input, ...args);
};
export async function* paginateListSecurityPolicies(
  config: TransferPaginationConfiguration,
  input: ListSecurityPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityPoliciesCommandOutput;
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
