// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ViewBillingCommand, ViewBillingCommandInput, ViewBillingCommandOutput } from "../commands/ViewBillingCommand";
import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53DomainsClient,
  input: ViewBillingCommandInput,
  ...args: any
): Promise<ViewBillingCommandOutput> => {
  // @ts-ignore
  return await client.send(new ViewBillingCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53Domains,
  input: ViewBillingCommandInput,
  ...args: any
): Promise<ViewBillingCommandOutput> => {
  // @ts-ignore
  return await client.viewBilling(input, ...args);
};
export async function* paginateViewBilling(
  config: Route53DomainsPaginationConfiguration,
  input: ViewBillingCommandInput,
  ...additionalArguments: any
): Paginator<ViewBillingCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ViewBillingCommandOutput;
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
