import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeConfigurationAggregatorsCommand,
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
} from "../commands/DescribeConfigurationAggregatorsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConfigurationAggregatorsCommandInput,
  ...args: any
): Promise<DescribeConfigurationAggregatorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConfigurationAggregatorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeConfigurationAggregatorsCommandInput,
  ...args: any
): Promise<DescribeConfigurationAggregatorsCommandOutput> => {
  // @ts-ignore
  return await client.describeConfigurationAggregators(input, ...args);
};
export async function* paginateDescribeConfigurationAggregators(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigurationAggregatorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConfigurationAggregatorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConfigurationAggregatorsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
