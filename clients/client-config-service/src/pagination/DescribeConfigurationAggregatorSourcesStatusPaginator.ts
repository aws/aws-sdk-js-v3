// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeConfigurationAggregatorSourcesStatusCommand,
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
} from "../commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  ...args: any
): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConfigurationAggregatorSourcesStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  ...args: any
): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> => {
  // @ts-ignore
  return await client.describeConfigurationAggregatorSourcesStatus(input, ...args);
};
export async function* paginateDescribeConfigurationAggregatorSourcesStatus(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConfigurationAggregatorSourcesStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConfigurationAggregatorSourcesStatusCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
