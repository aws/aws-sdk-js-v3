// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListSchedulingPoliciesCommand,
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
} from "../commands/ListSchedulingPoliciesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BatchClient,
  input: ListSchedulingPoliciesCommandInput,
  ...args: any
): Promise<ListSchedulingPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchedulingPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSchedulingPolicies(
  config: BatchPaginationConfiguration,
  input: ListSchedulingPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListSchedulingPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchedulingPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
