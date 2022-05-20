// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListDestinationsCommandInput,
  ...args: any
): Promise<ListDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListDestinationsCommandInput,
  ...args: any
): Promise<ListDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listDestinations(input, ...args);
};
export async function* paginateListDestinations(
  config: IoTWirelessPaginationConfiguration,
  input: ListDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDestinationsCommandOutput;
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
