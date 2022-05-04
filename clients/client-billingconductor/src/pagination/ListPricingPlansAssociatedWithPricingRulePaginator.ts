// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "../commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ...args: any
): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPricingPlansAssociatedWithPricingRuleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ...args: any
): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> => {
  // @ts-ignore
  return await client.listPricingPlansAssociatedWithPricingRule(input, ...args);
};
export async function* paginateListPricingPlansAssociatedWithPricingRule(
  config: BillingconductorPaginationConfiguration,
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ...additionalArguments: any
): Paginator<ListPricingPlansAssociatedWithPricingRuleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPricingPlansAssociatedWithPricingRuleCommandOutput;
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
