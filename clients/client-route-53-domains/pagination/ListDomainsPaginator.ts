import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Route53DomainsClient,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Route53Domains,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.listDomains(input, ...args);
};
export async function* listDomainsPaginate(
  config: Route53DomainsPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDomainsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Route53Domains) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53DomainsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Domains | Route53DomainsClient");
    }
    yield page;
    token = page["NextPageMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
