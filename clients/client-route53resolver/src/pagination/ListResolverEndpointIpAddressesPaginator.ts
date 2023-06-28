// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "../commands/ListResolverEndpointIpAddressesCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverEndpointIpAddressesCommandInput,
  ...args: any
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverEndpointIpAddressesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResolverEndpointIpAddresses(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverEndpointIpAddressesCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverEndpointIpAddressesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResolverEndpointIpAddressesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53ResolverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
