import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "../commands/DescribeComplianceByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...args: any
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeComplianceByConfigRuleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...args: any
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.describeComplianceByConfigRule(input, ...args);
};
export async function* paginateDescribeComplianceByConfigRule(
  config: ConfigServicePaginationConfiguration,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...additionalArguments: any
): Paginator<DescribeComplianceByConfigRuleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeComplianceByConfigRuleCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
