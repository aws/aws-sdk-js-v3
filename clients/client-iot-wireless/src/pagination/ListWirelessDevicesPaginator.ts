// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWirelessDevicesCommand,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "../commands/ListWirelessDevicesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof IoTWirelessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
