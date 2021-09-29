import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { ListSuitesCommand, ListSuitesCommandInput, ListSuitesCommandOutput } from "../commands/ListSuitesCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListSuitesCommandInput,
  ...args: any
): Promise<ListSuitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListSuitesCommandInput,
  ...args: any
): Promise<ListSuitesCommandOutput> => {
  // @ts-ignore
  return await client.listSuites(input, ...args);
};
export async function* paginateListSuites(
  config: DeviceFarmPaginationConfiguration,
  input: ListSuitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSuitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuitesCommandOutput;
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
