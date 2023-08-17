// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetAggregateComplianceDetailsByConfigRuleCommand,
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
} from "../commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ConfigServiceClient) {
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
