// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "../commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FMSClient,
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThirdPartyFirewallFirewallPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FMS,
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listThirdPartyFirewallFirewallPolicies(input, ...args);
};
export async function* paginateListThirdPartyFirewallFirewallPolicies(
  config: FMSPaginationConfiguration,
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListThirdPartyFirewallFirewallPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThirdPartyFirewallFirewallPoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
