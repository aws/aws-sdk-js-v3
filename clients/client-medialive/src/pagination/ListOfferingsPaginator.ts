// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferings(input, ...args);
};
export async function* paginateListOfferings(
  config: MediaLivePaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
