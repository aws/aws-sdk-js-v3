// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLongTermPricingCommand,
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
} from "../commands/ListLongTermPricingCommand";
import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowballClient,
  input: ListLongTermPricingCommandInput,
  ...args: any
): Promise<ListLongTermPricingCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLongTermPricingCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Snowball,
  input: ListLongTermPricingCommandInput,
  ...args: any
): Promise<ListLongTermPricingCommandOutput> => {
  // @ts-ignore
  return await client.listLongTermPricing(input, ...args);
};
export async function* paginateListLongTermPricing(
  config: SnowballPaginationConfiguration,
  input: ListLongTermPricingCommandInput,
  ...additionalArguments: any
): Paginator<ListLongTermPricingCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLongTermPricingCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Snowball) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
