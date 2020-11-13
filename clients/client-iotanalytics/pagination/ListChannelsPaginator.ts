import { IoTAnalytics } from "../IoTAnalytics";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListChannelsCommandInput,
  ...args: any
): Promise<ListChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTAnalytics,
  input: ListChannelsCommandInput,
  ...args: any
): Promise<ListChannelsCommandOutput> => {
  // @ts-ignore
  return await client.listChannels(input, ...args);
};
export async function* listChannelsPaginate(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListChannelsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalytics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTAnalyticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
