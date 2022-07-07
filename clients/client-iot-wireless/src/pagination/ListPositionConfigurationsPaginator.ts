// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPositionConfigurationsCommand,
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput,
} from "../commands/ListPositionConfigurationsCommand";
import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListPositionConfigurationsCommandInput,
  ...args: any
): Promise<ListPositionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPositionConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListPositionConfigurationsCommandInput,
  ...args: any
): Promise<ListPositionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listPositionConfigurations(input, ...args);
};
export async function* paginateListPositionConfigurations(
  config: IoTWirelessPaginationConfiguration,
  input: ListPositionConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPositionConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPositionConfigurationsCommandOutput;
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
