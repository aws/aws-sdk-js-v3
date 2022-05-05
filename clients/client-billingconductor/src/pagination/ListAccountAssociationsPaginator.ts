// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListAccountAssociationsCommand,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "../commands/ListAccountAssociationsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListAccountAssociationsCommandInput,
  ...args: any
): Promise<ListAccountAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListAccountAssociationsCommandInput,
  ...args: any
): Promise<ListAccountAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssociations(input, ...args);
};
export async function* paginateListAccountAssociations(
  config: BillingconductorPaginationConfiguration,
  input: ListAccountAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof Billingconductor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BillingconductorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Billingconductor | BillingconductorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
