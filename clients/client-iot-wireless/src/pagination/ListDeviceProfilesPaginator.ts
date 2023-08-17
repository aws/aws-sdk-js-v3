// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDeviceProfilesCommand,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput,
} from "../commands/ListDeviceProfilesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListDeviceProfilesCommandInput,
  ...args: any
): Promise<ListDeviceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDeviceProfiles(
  config: IoTWirelessPaginationConfiguration,
  input: ListDeviceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceProfilesCommandOutput;
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
