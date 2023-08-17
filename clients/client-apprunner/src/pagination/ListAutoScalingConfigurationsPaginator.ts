// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListAutoScalingConfigurationsCommandInput,
  ...args: any
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAutoScalingConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAutoScalingConfigurations(
  config: AppRunnerPaginationConfiguration,
  input: ListAutoScalingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoScalingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAutoScalingConfigurationsCommandOutput;
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
