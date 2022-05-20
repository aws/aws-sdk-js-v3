// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListResourcesAssociatedToCustomLineItemCommand,
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "../commands/ListResourcesAssociatedToCustomLineItemCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  ...args: any
): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesAssociatedToCustomLineItemCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  ...args: any
): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> => {
  // @ts-ignore
  return await client.listResourcesAssociatedToCustomLineItem(input, ...args);
};
export async function* paginateListResourcesAssociatedToCustomLineItem(
  config: BillingconductorPaginationConfiguration,
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesAssociatedToCustomLineItemCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcesAssociatedToCustomLineItemCommandOutput;
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
