import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOperationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.listOperations(input, ...args);
};
export async function* paginateListOperations(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOperationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOperationsCommandOutput;
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
