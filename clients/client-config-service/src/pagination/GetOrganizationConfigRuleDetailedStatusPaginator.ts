// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetOrganizationConfigRuleDetailedStatusCommand,
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
} from "../commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  ...args: any
): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetOrganizationConfigRuleDetailedStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  ...args: any
): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> => {
  // @ts-ignore
  return await client.getOrganizationConfigRuleDetailedStatus(input, ...args);
};
export async function* paginateGetOrganizationConfigRuleDetailedStatus(
  config: ConfigServicePaginationConfiguration,
  input: GetOrganizationConfigRuleDetailedStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetOrganizationConfigRuleDetailedStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetOrganizationConfigRuleDetailedStatusCommandOutput;
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
