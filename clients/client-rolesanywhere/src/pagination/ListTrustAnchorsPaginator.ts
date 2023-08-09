// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTrustAnchorsCommand,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
} from "../commands/ListTrustAnchorsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RolesAnywhereClient,
  input: ListTrustAnchorsCommandInput,
  ...args: any
): Promise<ListTrustAnchorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrustAnchorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTrustAnchors(
  config: RolesAnywherePaginationConfiguration,
  input: ListTrustAnchorsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrustAnchorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrustAnchorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof RolesAnywhereClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RolesAnywhere | RolesAnywhereClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
