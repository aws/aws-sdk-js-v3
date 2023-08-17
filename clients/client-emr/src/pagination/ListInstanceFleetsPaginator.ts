// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListInstanceFleetsCommand,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "../commands/ListInstanceFleetsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListInstanceFleetsCommandInput,
  ...args: any
): Promise<ListInstanceFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceFleetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListInstanceFleets(
  config: EMRPaginationConfiguration,
  input: ListInstanceFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceFleetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceFleetsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
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
