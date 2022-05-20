// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingRulesCommand,
  ListPricingRulesCommandInput,
  ListPricingRulesCommandOutput,
} from "../commands/ListPricingRulesCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListPricingRulesCommandInput,
  ...args: any
): Promise<ListPricingRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPricingRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListPricingRulesCommandInput,
  ...args: any
): Promise<ListPricingRulesCommandOutput> => {
  // @ts-ignore
  return await client.listPricingRules(input, ...args);
};
export async function* paginateListPricingRules(
  config: BillingconductorPaginationConfiguration,
  input: ListPricingRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListPricingRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPricingRulesCommandOutput;
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
