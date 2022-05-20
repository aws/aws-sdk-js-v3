// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResolverEndpointsCommand,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "../commands/ListResolverEndpointsCommand";
import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverEndpointsCommandInput,
  ...args: any
): Promise<ListResolverEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverEndpointsCommandInput,
  ...args: any
): Promise<ListResolverEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverEndpoints(input, ...args);
};
export async function* paginateListResolverEndpoints(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResolverEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53Resolver) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53ResolverClient) {
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
