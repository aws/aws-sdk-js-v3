import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListVirtualMFADevicesCommand,
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "../commands/ListVirtualMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListVirtualMFADevicesCommandInput,
  ...args: any
): Promise<ListVirtualMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVirtualMFADevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IAM,
  input: ListVirtualMFADevicesCommandInput,
  ...args: any
): Promise<ListVirtualMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.listVirtualMFADevices(input, ...args);
};
export async function* listVirtualMFADevicesPaginate(
  config: IAMPaginationConfiguration,
  input: ListVirtualMFADevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualMFADevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVirtualMFADevicesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
