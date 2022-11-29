// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand";
import { OpenSearchServerless } from "../OpenSearchServerless";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearchServerless,
  input: ListAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAccessPolicies(input, ...args);
};
export async function* paginateListAccessPolicies(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchServerlessClient) {
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
