// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccessPolicies(
  config: EKSPaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
