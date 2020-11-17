import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";
import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "../commands/DescribeServicesCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PricingClient,
  input: DescribeServicesCommandInput,
  ...args: any
): Promise<DescribeServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Pricing,
  input: DescribeServicesCommandInput,
  ...args: any
): Promise<DescribeServicesCommandOutput> => {
  // @ts-ignore
  return await client.describeServices(input, ...args);
};
export async function* paginateDescribeServices(
  config: PricingPaginationConfiguration,
  input: DescribeServicesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeServicesCommandOutput;
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
