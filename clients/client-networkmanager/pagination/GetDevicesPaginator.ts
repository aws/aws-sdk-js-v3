import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { GetDevicesCommand, GetDevicesCommandInput, GetDevicesCommandOutput } from "../commands/GetDevicesCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetDevicesCommandInput,
  ...args: any
): Promise<GetDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetDevicesCommandInput,
  ...args: any
): Promise<GetDevicesCommandOutput> => {
  // @ts-ignore
  return await client.getDevices(input, ...args);
};
export async function* getDevicesPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetDevicesCommandInput,
  ...additionalArguments: any
): Paginator<GetDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDevicesCommandOutput;
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
