// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListPricesCommand, ListPricesCommandInput, ListPricesCommandOutput } from "../commands/ListPricesCommand";
import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53DomainsClient,
  input: ListPricesCommandInput,
  ...args: any
): Promise<ListPricesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPricesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Domains,
  input: ListPricesCommandInput,
  ...args: any
): Promise<ListPricesCommandOutput> => {
  // @ts-ignore
  return await client.listPrices(input, ...args);
};
export async function* paginateListPrices(
  config: Route53DomainsPaginationConfiguration,
  input: ListPricesCommandInput,
  ...additionalArguments: any
): Paginator<ListPricesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPricesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Route53Domains) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53DomainsClient) {
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
