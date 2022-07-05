// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTrustAnchorsCommand,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
} from "../commands/ListTrustAnchorsCommand";
import { RolesAnywhere } from "../RolesAnywhere";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: RolesAnywhere,
  input: ListTrustAnchorsCommandInput,
  ...args: any
): Promise<ListTrustAnchorsCommandOutput> => {
  // @ts-ignore
  return await client.listTrustAnchors(input, ...args);
};
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
    if (config.client instanceof RolesAnywhere) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RolesAnywhereClient) {
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
