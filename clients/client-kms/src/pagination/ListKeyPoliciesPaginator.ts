// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKeyPoliciesCommand,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
} from "../commands/ListKeyPoliciesCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListKeyPoliciesCommandInput,
  ...args: any
): Promise<ListKeyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyPoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKeyPolicies(
  config: KMSPaginationConfiguration,
  input: ListKeyPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
