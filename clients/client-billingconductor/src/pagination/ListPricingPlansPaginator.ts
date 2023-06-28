// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingPlansCommand,
  ListPricingPlansCommandInput,
  ListPricingPlansCommandOutput,
} from "../commands/ListPricingPlansCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListPricingPlansCommandInput,
  ...args: any
): Promise<ListPricingPlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPricingPlansCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPricingPlans(
  config: BillingconductorPaginationConfiguration,
  input: ListPricingPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListPricingPlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPricingPlansCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BillingconductorClient) {
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
