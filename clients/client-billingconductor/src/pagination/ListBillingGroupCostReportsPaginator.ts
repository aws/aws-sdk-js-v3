// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListBillingGroupCostReportsCommand,
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "../commands/ListBillingGroupCostReportsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListBillingGroupCostReportsCommandInput,
  ...args: any
): Promise<ListBillingGroupCostReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBillingGroupCostReportsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBillingGroupCostReports(
  config: BillingconductorPaginationConfiguration,
  input: ListBillingGroupCostReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListBillingGroupCostReportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBillingGroupCostReportsCommandOutput;
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
