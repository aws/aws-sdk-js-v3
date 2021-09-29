import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeAggregateComplianceByConfigRulesCommand,
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
} from "../commands/DescribeAggregateComplianceByConfigRulesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...args: any
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAggregateComplianceByConfigRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...args: any
): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> => {
  // @ts-ignore
  return await client.describeAggregateComplianceByConfigRules(input, ...args);
};
export async function* paginateDescribeAggregateComplianceByConfigRules(
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregateComplianceByConfigRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAggregateComplianceByConfigRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAggregateComplianceByConfigRulesCommandOutput;
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
