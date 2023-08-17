// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "../commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof FMSClient) {
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
