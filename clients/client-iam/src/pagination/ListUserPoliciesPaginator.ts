// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "../commands/ListUserPoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListUserPoliciesCommandInput,
  ...args: any
): Promise<ListUserPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListUserPolicies(
  config: IAMPaginationConfiguration,
  input: ListUserPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListUserPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUserPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
