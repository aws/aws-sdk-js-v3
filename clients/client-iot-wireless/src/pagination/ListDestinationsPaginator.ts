import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
