// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRolePoliciesCommand,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "../commands/ListRolePoliciesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListRolePoliciesCommandInput,
  ...args: any
): Promise<ListRolePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRolePoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRolePolicies(
  config: IAMPaginationConfiguration,
  input: ListRolePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListRolePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRolePoliciesCommandOutput;
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
