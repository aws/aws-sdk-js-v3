import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import {
  DescribeGlobalNetworksCommand,
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
} from "../commands/DescribeGlobalNetworksCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: DescribeGlobalNetworksCommandInput,
  ...args: any
): Promise<DescribeGlobalNetworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalNetworksCommand(input), ...args);
};
const makePagedRequest = async (
  client: NetworkManager,
  input: DescribeGlobalNetworksCommandInput,
  ...args: any
): Promise<DescribeGlobalNetworksCommandOutput> => {
  // @ts-ignore
  return await client.describeGlobalNetworks(input, ...args);
};
export async function* describeGlobalNetworksPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: DescribeGlobalNetworksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGlobalNetworksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGlobalNetworksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
