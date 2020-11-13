import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import {
  ListResolverEndpointsCommand,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "../commands/ListResolverEndpointsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverEndpointsCommandInput,
  ...args: any
): Promise<ListResolverEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverEndpointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverEndpointsCommandInput,
  ...args: any
): Promise<ListResolverEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverEndpoints(input, ...args);
};
export async function* listResolverEndpointsPaginate(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
