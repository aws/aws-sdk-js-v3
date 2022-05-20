// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.listServices(input, ...args);
};
export async function* paginateListServices(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
