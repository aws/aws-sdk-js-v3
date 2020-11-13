import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: Route53DomainsClient,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOperationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Route53Domains,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.listOperations(input, ...args);
};
export async function* listOperationsPaginate(
  config: Route53DomainsPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOperationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOperationsCommandOutput;
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
    token = page.NextPageMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
