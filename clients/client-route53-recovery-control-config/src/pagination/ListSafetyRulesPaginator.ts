// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSafetyRulesCommand,
  ListSafetyRulesCommandInput,
  ListSafetyRulesCommandOutput,
} from "../commands/ListSafetyRulesCommand";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53RecoveryControlConfigClient,
  input: ListSafetyRulesCommandInput,
  ...args: any
): Promise<ListSafetyRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSafetyRulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSafetyRules(
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListSafetyRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListSafetyRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSafetyRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryControlConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryControlConfig | Route53RecoveryControlConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
