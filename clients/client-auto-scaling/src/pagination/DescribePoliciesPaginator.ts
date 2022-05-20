// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribePoliciesCommand,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
} from "../commands/DescribePoliciesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribePoliciesCommandInput,
  ...args: any
): Promise<DescribePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribePoliciesCommandInput,
  ...args: any
): Promise<DescribePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.describePolicies(input, ...args);
};
export async function* paginateDescribePolicies(
  config: AutoScalingPaginationConfiguration,
  input: DescribePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
