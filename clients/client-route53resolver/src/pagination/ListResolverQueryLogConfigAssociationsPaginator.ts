import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import {
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "../commands/ListResolverQueryLogConfigAssociationsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverQueryLogConfigAssociationsCommandInput,
  ...args: any
): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverQueryLogConfigAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverQueryLogConfigAssociationsCommandInput,
  ...args: any
): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverQueryLogConfigAssociations(input, ...args);
};
export async function* paginateListResolverQueryLogConfigAssociations(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverQueryLogConfigAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverQueryLogConfigAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResolverQueryLogConfigAssociationsCommandOutput;
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
