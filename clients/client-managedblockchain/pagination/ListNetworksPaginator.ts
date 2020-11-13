import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListNetworksCommandInput,
  ...args: any
): Promise<ListNetworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNetworksCommand(input), ...args);
};
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListNetworksCommandInput,
  ...args: any
): Promise<ListNetworksCommandOutput> => {
  // @ts-ignore
  return await client.listNetworks(input, ...args);
};
export async function* listNetworksPaginate(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListNetworksCommandInput,
  ...additionalArguments: any
): Paginator<ListNetworksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNetworksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchain) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
