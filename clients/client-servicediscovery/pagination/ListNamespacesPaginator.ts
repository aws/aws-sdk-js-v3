import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListNamespacesCommandInput,
  ...args: any
): Promise<ListNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNamespacesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: ListNamespacesCommandInput,
  ...args: any
): Promise<ListNamespacesCommandOutput> => {
  // @ts-ignore
  return await client.listNamespaces(input, ...args);
};
export async function* paginateListNamespaces(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...additionalArguments: any
): Paginator<ListNamespacesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNamespacesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceDiscovery) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceDiscoveryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceDiscovery | ServiceDiscoveryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
