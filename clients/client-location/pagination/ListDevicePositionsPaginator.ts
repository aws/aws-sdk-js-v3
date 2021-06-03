import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import {
  ListDevicePositionsCommand,
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "../commands/ListDevicePositionsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListDevicePositionsCommandInput,
  ...args: any
): Promise<ListDevicePositionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicePositionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListDevicePositionsCommandInput,
  ...args: any
): Promise<ListDevicePositionsCommandOutput> => {
  // @ts-ignore
  return await client.listDevicePositions(input, ...args);
};
export async function* paginateListDevicePositions(
  config: LocationPaginationConfiguration,
  input: ListDevicePositionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicePositionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDevicePositionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
