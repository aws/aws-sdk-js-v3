// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "../commands/ListImageScanFindingAggregationsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImageScanFindingAggregationsCommandInput,
  ...args: any
): Promise<ListImageScanFindingAggregationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImageScanFindingAggregationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImageScanFindingAggregations(
  config: ImagebuilderPaginationConfiguration,
  input: ListImageScanFindingAggregationsCommandInput,
  ...additionalArguments: any
): Paginator<ListImageScanFindingAggregationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImageScanFindingAggregationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
