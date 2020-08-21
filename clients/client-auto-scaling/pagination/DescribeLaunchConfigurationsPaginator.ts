import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeLaunchConfigurationsCommand,
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "../commands/DescribeLaunchConfigurationsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeLaunchConfigurationsCommandInput,
  ...args: any
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeLaunchConfigurationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeLaunchConfigurationsCommandInput,
  ...args: any
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeLaunchConfigurations(input, ...args);
};
export async function* describeLaunchConfigurationsPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribeLaunchConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeLaunchConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeLaunchConfigurationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
