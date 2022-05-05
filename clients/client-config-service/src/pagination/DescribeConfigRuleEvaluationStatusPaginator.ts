// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeConfigRuleEvaluationStatusCommand,
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
} from "../commands/DescribeConfigRuleEvaluationStatusCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  ...args: any
): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConfigRuleEvaluationStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  ...args: any
): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> => {
  // @ts-ignore
  return await client.describeConfigRuleEvaluationStatus(input, ...args);
};
export async function* paginateDescribeConfigRuleEvaluationStatus(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigRuleEvaluationStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConfigRuleEvaluationStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConfigRuleEvaluationStatusCommandOutput;
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
