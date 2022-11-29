// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ARCZonalShift } from "../ARCZonalShift";
import { ARCZonalShiftClient } from "../ARCZonalShiftClient";
import {
  ListManagedResourcesCommand,
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "../commands/ListManagedResourcesCommand";
import { ARCZonalShiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ARCZonalShiftClient,
  input: ListManagedResourcesCommandInput,
  ...args: any
): Promise<ListManagedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ARCZonalShift,
  input: ListManagedResourcesCommandInput,
  ...args: any
): Promise<ListManagedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listManagedResources(input, ...args);
};
export async function* paginateListManagedResources(
  config: ARCZonalShiftPaginationConfiguration,
  input: ListManagedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ARCZonalShift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ARCZonalShiftClient) {
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
