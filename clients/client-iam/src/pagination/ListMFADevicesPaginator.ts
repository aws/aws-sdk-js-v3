import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListMFADevicesCommandInput,
  ...args: any
): Promise<ListMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMFADevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListMFADevicesCommandInput,
  ...args: any
): Promise<ListMFADevicesCommandOutput> => {
  // @ts-ignore
  return await client.listMFADevices(input, ...args);
};
export async function* paginateListMFADevices(
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListMFADevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMFADevicesCommandOutput;
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
