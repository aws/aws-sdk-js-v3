// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResolverQueryLogConfigsCommand,
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "../commands/ListResolverQueryLogConfigsCommand";
import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListResolverQueryLogConfigsCommandInput,
  ...args: any
): Promise<ListResolverQueryLogConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResolverQueryLogConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Resolver,
  input: ListResolverQueryLogConfigsCommandInput,
  ...args: any
): Promise<ListResolverQueryLogConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listResolverQueryLogConfigs(input, ...args);
};
export async function* paginateListResolverQueryLogConfigs(
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverQueryLogConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListResolverQueryLogConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResolverQueryLogConfigsCommandOutput;
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
