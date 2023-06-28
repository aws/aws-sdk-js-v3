// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPriceListsCommand,
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput,
} from "../commands/ListPriceListsCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PricingClient,
  input: ListPriceListsCommandInput,
  ...args: any
): Promise<ListPriceListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPriceListsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPriceLists(
  config: PricingPaginationConfiguration,
  input: ListPriceListsCommandInput,
  ...additionalArguments: any
): Paginator<ListPriceListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPriceListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PricingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Pricing | PricingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
