import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "../commands/GetCurrentMetricDataCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: GetCurrentMetricDataCommandInput,
  ...args: any
): Promise<GetCurrentMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetCurrentMetricDataCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: GetCurrentMetricDataCommandInput,
  ...args: any
): Promise<GetCurrentMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.getCurrentMetricData(input, ...args);
};
export async function* paginateGetCurrentMetricData(
  config: ConnectPaginationConfiguration,
  input: GetCurrentMetricDataCommandInput,
  ...additionalArguments: any
): Paginator<GetCurrentMetricDataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetCurrentMetricDataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
