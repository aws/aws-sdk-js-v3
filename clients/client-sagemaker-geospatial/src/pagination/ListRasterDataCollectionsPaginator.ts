// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRasterDataCollectionsCommand,
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
} from "../commands/ListRasterDataCollectionsCommand";
import { SageMakerGeospatial } from "../SageMakerGeospatial";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: SageMakerGeospatial,
  input: ListRasterDataCollectionsCommandInput,
  ...args: any
): Promise<ListRasterDataCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.listRasterDataCollections(input, ...args);
};
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
    if (config.client instanceof SageMakerGeospatial) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerGeospatialClient) {
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
