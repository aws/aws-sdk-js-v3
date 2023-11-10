// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetEntitlementsCommand,
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
} from "../commands/GetEntitlementsCommand";
import { MarketplaceEntitlementServiceClient } from "../MarketplaceEntitlementServiceClient";
import { MarketplaceEntitlementServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MarketplaceEntitlementServiceClient,
  input: GetEntitlementsCommandInput,
  ...args: any
): Promise<GetEntitlementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEntitlementsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetEntitlements(
  config: MarketplaceEntitlementServicePaginationConfiguration,
  input: GetEntitlementsCommandInput,
  ...additionalArguments: any
): Paginator<GetEntitlementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEntitlementsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MarketplaceEntitlementServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MarketplaceEntitlementService | MarketplaceEntitlementServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
