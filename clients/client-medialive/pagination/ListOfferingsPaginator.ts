import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaLive,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferings(input, ...args);
};
export async function* listOfferingsPaginate(
  config: MediaLivePaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
