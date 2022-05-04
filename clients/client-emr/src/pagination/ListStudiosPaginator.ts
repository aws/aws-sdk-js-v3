// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStudiosCommandInput,
  ...args: any
): Promise<ListStudiosCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudiosCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListStudiosCommandInput,
  ...args: any
): Promise<ListStudiosCommandOutput> => {
  // @ts-ignore
  return await client.listStudios(input, ...args);
};
export async function* paginateListStudios(
  config: EMRPaginationConfiguration,
  input: ListStudiosCommandInput,
  ...additionalArguments: any
): Paginator<ListStudiosCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudiosCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
