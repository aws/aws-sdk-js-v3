import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReservationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConnect,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.listReservations(input, ...args);
};
export async function* listReservationsPaginate(
  config: MediaConnectPaginationConfiguration,
  input: ListReservationsCommandInput,
  ...additionalArguments: any
): Paginator<ListReservationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReservationsCommandOutput;
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
