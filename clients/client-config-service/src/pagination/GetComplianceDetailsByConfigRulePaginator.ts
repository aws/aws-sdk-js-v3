import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  GetComplianceDetailsByConfigRuleCommand,
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetComplianceDetailsByConfigRuleCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetComplianceDetailsByConfigRuleCommandInput,
  ...args: any
): Promise<GetComplianceDetailsByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetComplianceDetailsByConfigRuleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetComplianceDetailsByConfigRuleCommandInput,
  ...args: any
): Promise<GetComplianceDetailsByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.getComplianceDetailsByConfigRule(input, ...args);
};
export async function* paginateGetComplianceDetailsByConfigRule(
  config: ConfigServicePaginationConfiguration,
  input: GetComplianceDetailsByConfigRuleCommandInput,
  ...additionalArguments: any
): Paginator<GetComplianceDetailsByConfigRuleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetComplianceDetailsByConfigRuleCommandOutput;
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
