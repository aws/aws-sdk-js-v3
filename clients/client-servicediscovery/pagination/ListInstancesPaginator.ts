import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceDiscovery,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listInstances(input, ...args);
};
export async function* listInstancesPaginate(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListInstancesCommandOutput;
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
