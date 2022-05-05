// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "../commands/GetAttributeValuesCommand";
import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PricingClient,
  input: GetAttributeValuesCommandInput,
  ...args: any
): Promise<GetAttributeValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAttributeValuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Pricing,
  input: GetAttributeValuesCommandInput,
  ...args: any
): Promise<GetAttributeValuesCommandOutput> => {
  // @ts-ignore
  return await client.getAttributeValues(input, ...args);
};
export async function* paginateGetAttributeValues(
  config: PricingPaginationConfiguration,
  input: GetAttributeValuesCommandInput,
  ...additionalArguments: any
): Paginator<GetAttributeValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAttributeValuesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Pricing) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PricingClient) {
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
