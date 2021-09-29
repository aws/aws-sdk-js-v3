import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import {
  GetDevicePositionHistoryCommand,
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "../commands/GetDevicePositionHistoryCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: GetDevicePositionHistoryCommandInput,
  ...args: any
): Promise<GetDevicePositionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDevicePositionHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: GetDevicePositionHistoryCommandInput,
  ...args: any
): Promise<GetDevicePositionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getDevicePositionHistory(input, ...args);
};
export async function* paginateGetDevicePositionHistory(
  config: LocationPaginationConfiguration,
  input: GetDevicePositionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetDevicePositionHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDevicePositionHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof Location) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LocationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Location | LocationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
