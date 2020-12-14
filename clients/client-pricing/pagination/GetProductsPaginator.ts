import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";
import { GetProductsCommand, GetProductsCommandInput, GetProductsCommandOutput } from "../commands/GetProductsCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PricingClient,
  input: GetProductsCommandInput,
  ...args: any
): Promise<GetProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetProductsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Pricing,
  input: GetProductsCommandInput,
  ...args: any
): Promise<GetProductsCommandOutput> => {
  // @ts-ignore
  return await client.getProducts(input, ...args);
};
export async function* paginateGetProducts(
  config: PricingPaginationConfiguration,
  input: GetProductsCommandInput,
  ...additionalArguments: any
): Paginator<GetProductsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetProductsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
