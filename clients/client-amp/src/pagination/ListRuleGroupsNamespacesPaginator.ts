// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Amp } from "../Amp";
import { AmpClient } from "../AmpClient";
import {
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
} from "../commands/ListRuleGroupsNamespacesCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmpClient,
  input: ListRuleGroupsNamespacesCommandInput,
  ...args: any
): Promise<ListRuleGroupsNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRuleGroupsNamespacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Amp,
  input: ListRuleGroupsNamespacesCommandInput,
  ...args: any
): Promise<ListRuleGroupsNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.listRuleGroupsNamespaces(input, ...args);
};
export async function* paginateListRuleGroupsNamespaces(
  config: AmpPaginationConfiguration,
  input: ListRuleGroupsNamespacesCommandInput,
  ...additionalArguments: any
): Paginator<ListRuleGroupsNamespacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRuleGroupsNamespacesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Amp) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AmpClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amp | AmpClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
