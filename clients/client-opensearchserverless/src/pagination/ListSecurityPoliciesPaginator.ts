// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListSecurityPoliciesCommandInput,
  ...args: any
): Promise<ListSecurityPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSecurityPolicies(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListSecurityPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearchServerless | OpenSearchServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
