// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssociatedAccessPoliciesCommand,
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
} from "../commands/ListAssociatedAccessPoliciesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListAssociatedAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAssociatedAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedAccessPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssociatedAccessPolicies(
  config: EKSPaginationConfiguration,
  input: ListAssociatedAccessPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedAccessPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedAccessPoliciesCommandOutput;
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
