import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReservationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaLive,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.listReservations(input, ...args);
};
export async function* listReservationsPaginate(
  config: MediaLivePaginationConfiguration,
  input: ListReservationsCommandInput,
  ...additionalArguments: any
): Paginator<ListReservationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
