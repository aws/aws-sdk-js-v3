// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRasterDataCollectionsCommand,
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
} from "../commands/ListRasterDataCollectionsCommand";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerGeospatialClient,
  input: ListRasterDataCollectionsCommandInput,
  ...args: any
): Promise<ListRasterDataCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRasterDataCollectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRasterDataCollections(
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListRasterDataCollectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRasterDataCollectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRasterDataCollectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SageMakerGeospatialClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMakerGeospatial | SageMakerGeospatialClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
