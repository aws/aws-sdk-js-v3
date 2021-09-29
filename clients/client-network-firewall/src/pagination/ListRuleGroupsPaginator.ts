import { NetworkFirewall } from "../NetworkFirewall";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "../commands/ListRuleGroupsCommand";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkFirewallClient,
  input: ListRuleGroupsCommandInput,
  ...args: any
): Promise<ListRuleGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRuleGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkFirewall,
  input: ListRuleGroupsCommandInput,
  ...args: any
): Promise<ListRuleGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listRuleGroups(input, ...args);
};
export async function* paginateListRuleGroups(
  config: NetworkFirewallPaginationConfiguration,
  input: ListRuleGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListRuleGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRuleGroupsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
