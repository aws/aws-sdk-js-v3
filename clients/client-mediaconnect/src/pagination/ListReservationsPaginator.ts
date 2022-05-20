// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaConnectClient,
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
  client: MediaConnect,
  input: ListReservationsCommandInput,
  ...args: any
): Promise<ListReservationsCommandOutput> => {
  // @ts-ignore
  return await client.listReservations(input, ...args);
};
export async function* paginateListReservations(
  config: MediaConnectPaginationConfiguration,
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
    if (config.client instanceof MediaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
