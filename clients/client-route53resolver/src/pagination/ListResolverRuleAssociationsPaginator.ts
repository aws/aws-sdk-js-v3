// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "../commands/ListResolverRuleAssociationsCommand";
import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverRuleAssociationsCommandInput,
  ...args: any
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverRuleAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverRuleAssociationsCommandInput,
  ...args: any
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverRuleAssociations(input, ...args);
};
export async function* paginateListResolverRuleAssociations(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverRuleAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverRuleAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResolverRuleAssociationsCommandOutput;
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
