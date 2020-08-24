import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.listServices(input, ...args);
};
export async function* listServicesPaginate(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListServicesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceDiscovery) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceDiscoveryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceDiscovery | ServiceDiscoveryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
