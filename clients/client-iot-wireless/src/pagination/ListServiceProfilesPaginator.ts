// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServiceProfilesCommand,
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "../commands/ListServiceProfilesCommand";
import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListServiceProfilesCommandInput,
  ...args: any
): Promise<ListServiceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListServiceProfilesCommandInput,
  ...args: any
): Promise<ListServiceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listServiceProfiles(input, ...args);
};
export async function* paginateListServiceProfiles(
  config: IoTWirelessPaginationConfiguration,
  input: ListServiceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceProfilesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
