// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListServicesForAutoScalingConfigurationCommand,
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput,
} from "../commands/ListServicesForAutoScalingConfigurationCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListServicesForAutoScalingConfigurationCommandInput,
  ...args: any
): Promise<ListServicesForAutoScalingConfigurationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesForAutoScalingConfigurationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServicesForAutoScalingConfiguration(
  config: AppRunnerPaginationConfiguration,
  input: ListServicesForAutoScalingConfigurationCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesForAutoScalingConfigurationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicesForAutoScalingConfigurationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
