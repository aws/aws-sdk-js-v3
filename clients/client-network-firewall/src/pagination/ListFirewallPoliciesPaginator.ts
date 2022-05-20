// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "../commands/ListFirewallPoliciesCommand";
import { NetworkFirewall } from "../NetworkFirewall";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkFirewallClient,
  input: ListFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkFirewall,
  input: ListFirewallPoliciesCommandInput,
  ...args: any
): Promise<ListFirewallPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listFirewallPolicies(input, ...args);
};
export async function* paginateListFirewallPolicies(
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallPoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkFirewall) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkFirewallClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkFirewall | NetworkFirewallClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
