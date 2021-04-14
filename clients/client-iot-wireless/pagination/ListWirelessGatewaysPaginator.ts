import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import {
  ListWirelessGatewaysCommand,
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "../commands/ListWirelessGatewaysCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListWirelessGatewaysCommandInput,
  ...args: any
): Promise<ListWirelessGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWirelessGatewaysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListWirelessGatewaysCommandInput,
  ...args: any
): Promise<ListWirelessGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listWirelessGateways(input, ...args);
};
export async function* paginateListWirelessGateways(
  config: IoTWirelessPaginationConfiguration,
  input: ListWirelessGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListWirelessGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWirelessGatewaysCommandOutput;
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
