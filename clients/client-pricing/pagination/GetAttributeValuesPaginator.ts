import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";
import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "../commands/GetAttributeValuesCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PricingClient,
  input: GetAttributeValuesCommandInput,
  ...args: any
): Promise<GetAttributeValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAttributeValuesCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
