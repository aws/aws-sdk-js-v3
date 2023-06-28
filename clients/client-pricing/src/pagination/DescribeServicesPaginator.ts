// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "../commands/DescribeServicesCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PricingClient,
  input: DescribeServicesCommandInput,
  ...args: any
): Promise<DescribeServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeServices(
  config: PricingPaginationConfiguration,
  input: DescribeServicesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeServicesCommandOutput;
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
