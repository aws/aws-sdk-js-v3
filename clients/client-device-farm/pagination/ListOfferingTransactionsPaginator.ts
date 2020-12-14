import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "../commands/ListOfferingTransactionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListOfferingTransactionsCommandInput,
  ...args: any
): Promise<ListOfferingTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingTransactionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListOfferingTransactionsCommandInput,
  ...args: any
): Promise<ListOfferingTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferingTransactions(input, ...args);
};
export async function* paginateListOfferingTransactions(
  config: DeviceFarmPaginationConfiguration,
  input: ListOfferingTransactionsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingTransactionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingTransactionsCommandOutput;
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
