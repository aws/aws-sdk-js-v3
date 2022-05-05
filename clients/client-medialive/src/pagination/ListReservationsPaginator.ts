// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReservationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.listReservations(input, ...args);
};
export async function* paginateListReservations(
  config: MediaLivePaginationConfiguration,
  input: ListReservationsCommandInput,
  ...additionalArguments: any
): Paginator<ListReservationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReservationsCommandOutput;
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
