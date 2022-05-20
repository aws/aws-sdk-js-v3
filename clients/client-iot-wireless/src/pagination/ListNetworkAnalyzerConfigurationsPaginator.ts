// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListNetworkAnalyzerConfigurationsCommand,
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
} from "../commands/ListNetworkAnalyzerConfigurationsCommand";
import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  ...args: any
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNetworkAnalyzerConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  ...args: any
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listNetworkAnalyzerConfigurations(input, ...args);
};
export async function* paginateListNetworkAnalyzerConfigurations(
  config: IoTWirelessPaginationConfiguration,
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListNetworkAnalyzerConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNetworkAnalyzerConfigurationsCommandOutput;
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
