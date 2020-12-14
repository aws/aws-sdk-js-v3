import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  GetOfferingStatusCommand,
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
} from "../commands/GetOfferingStatusCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: GetOfferingStatusCommandInput,
  ...args: any
): Promise<GetOfferingStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetOfferingStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: GetOfferingStatusCommandInput,
  ...args: any
): Promise<GetOfferingStatusCommandOutput> => {
  // @ts-ignore
  return await client.getOfferingStatus(input, ...args);
};
export async function* paginateGetOfferingStatus(
  config: DeviceFarmPaginationConfiguration,
  input: GetOfferingStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetOfferingStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetOfferingStatusCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
