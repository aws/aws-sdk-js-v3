// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOutpostResolversCommand,
  ListOutpostResolversCommandInput,
  ListOutpostResolversCommandOutput,
} from "../commands/ListOutpostResolversCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListOutpostResolversCommandInput,
  ...args: any
): Promise<ListOutpostResolversCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOutpostResolversCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOutpostResolvers(
  config: Route53ResolverPaginationConfiguration,
  input: ListOutpostResolversCommandInput,
  ...additionalArguments: any
): Paginator<ListOutpostResolversCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOutpostResolversCommandOutput;
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
