// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: ListResourcePoliciesCommandInput,
  ...args: any
): Promise<ListResourcePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcePoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResourcePolicies(
  config: XRayPaginationConfiguration,
  input: ListResourcePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourcePoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
