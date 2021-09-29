import { NetworkFirewall } from "../NetworkFirewall";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import {
  ListFirewallsCommand,
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput,
} from "../commands/ListFirewallsCommand";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkFirewallClient,
  input: ListFirewallsCommandInput,
  ...args: any
): Promise<ListFirewallsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: NetworkFirewall,
  input: ListFirewallsCommandInput,
  ...args: any
): Promise<ListFirewallsCommandOutput> => {
  // @ts-ignore
  return await client.listFirewalls(input, ...args);
};
export async function* paginateListFirewalls(
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallsCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallsCommandOutput;
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
