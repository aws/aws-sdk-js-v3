import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferings(input, ...args);
};
export async function* listOfferingsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingsCommandOutput;
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
