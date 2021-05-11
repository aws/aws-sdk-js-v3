import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  ...args: any
): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAggregateComplianceDetailsByConfigRuleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  ...args: any
): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.getAggregateComplianceDetailsByConfigRule(input, ...args);
};
export async function* paginateGetAggregateComplianceDetailsByConfigRule(
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
  ...additionalArguments: any
): Paginator<GetAggregateComplianceDetailsByConfigRuleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAggregateComplianceDetailsByConfigRuleCommandOutput;
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
