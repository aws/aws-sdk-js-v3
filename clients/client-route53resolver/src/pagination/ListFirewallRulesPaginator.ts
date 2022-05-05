// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "../commands/ListFirewallRulesCommand";
import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListFirewallRulesCommandInput,
  ...args: any
): Promise<ListFirewallRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListFirewallRulesCommandInput,
  ...args: any
): Promise<ListFirewallRulesCommandOutput> => {
  // @ts-ignore
  return await client.listFirewallRules(input, ...args);
};
export async function* paginateListFirewallRules(
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53Resolver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53ResolverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
