// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListCustomLineItemsCommand,
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "../commands/ListCustomLineItemsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListCustomLineItemsCommandInput,
  ...args: any
): Promise<ListCustomLineItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomLineItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListCustomLineItemsCommandInput,
  ...args: any
): Promise<ListCustomLineItemsCommandOutput> => {
  // @ts-ignore
  return await client.listCustomLineItems(input, ...args);
};
export async function* paginateListCustomLineItems(
  config: BillingconductorPaginationConfiguration,
  input: ListCustomLineItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomLineItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomLineItemsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
