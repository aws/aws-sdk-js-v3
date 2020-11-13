import { Braket } from "../Braket";
import { BraketClient } from "../BraketClient";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "../commands/SearchDevicesCommand";
import { BraketPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BraketClient,
  input: SearchDevicesCommandInput,
  ...args: any
): Promise<SearchDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Braket,
  input: SearchDevicesCommandInput,
  ...args: any
): Promise<SearchDevicesCommandOutput> => {
  // @ts-ignore
  return await client.searchDevices(input, ...args);
};
export async function* searchDevicesPaginate(
  config: BraketPaginationConfiguration,
  input: SearchDevicesCommandInput,
  ...additionalArguments: any
): Paginator<SearchDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchDevicesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Braket) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BraketClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Braket | BraketClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
