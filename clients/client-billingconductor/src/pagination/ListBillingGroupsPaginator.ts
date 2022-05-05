// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListBillingGroupsCommand,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "../commands/ListBillingGroupsCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListBillingGroupsCommandInput,
  ...args: any
): Promise<ListBillingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBillingGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Billingconductor,
  input: ListBillingGroupsCommandInput,
  ...args: any
): Promise<ListBillingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listBillingGroups(input, ...args);
};
export async function* paginateListBillingGroups(
  config: BillingconductorPaginationConfiguration,
  input: ListBillingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListBillingGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBillingGroupsCommandOutput;
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
