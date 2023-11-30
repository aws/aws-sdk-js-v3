// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListAutoshiftsCommand,
  ListAutoshiftsCommandInput,
  ListAutoshiftsCommandOutput,
} from "../commands/ListAutoshiftsCommand";
import { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ARCZonalShiftClient,
  input: ListAutoshiftsCommandInput,
  ...args: any
): Promise<ListAutoshiftsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAutoshiftsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAutoshifts(
  config: ARCZonalShiftPaginationConfiguration,
  input: ListAutoshiftsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoshiftsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAutoshiftsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ARCZonalShiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ARCZonalShift | ARCZonalShiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
