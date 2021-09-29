import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import {
  ListWirelessDevicesCommand,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "../commands/ListWirelessDevicesCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListWirelessDevicesCommandInput,
  ...args: any
): Promise<ListWirelessDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWirelessDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListWirelessDevicesCommandInput,
  ...args: any
): Promise<ListWirelessDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listWirelessDevices(input, ...args);
};
export async function* paginateListWirelessDevices(
  config: IoTWirelessPaginationConfiguration,
  input: ListWirelessDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListWirelessDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWirelessDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof IoTWireless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTWirelessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
