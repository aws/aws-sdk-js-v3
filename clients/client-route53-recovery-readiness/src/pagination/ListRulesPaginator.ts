// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: ListRulesCommandInput,
  ...args: any
): Promise<ListRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryReadiness,
  input: ListRulesCommandInput,
  ...args: any
): Promise<ListRulesCommandOutput> => {
  // @ts-ignore
  return await client.listRules(input, ...args);
};
export async function* paginateListRules(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryReadiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53RecoveryReadinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryReadiness | Route53RecoveryReadinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
