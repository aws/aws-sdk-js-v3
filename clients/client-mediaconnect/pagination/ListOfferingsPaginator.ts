import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConnect,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferings(input, ...args);
};
export async function* listOfferingsPaginate(
  config: MediaConnectPaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
