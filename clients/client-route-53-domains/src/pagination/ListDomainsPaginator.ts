// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53DomainsClient,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDomains(
  config: Route53DomainsPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Route53DomainsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Domains | Route53DomainsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextPageMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
