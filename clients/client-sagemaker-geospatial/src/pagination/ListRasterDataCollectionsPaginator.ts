// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRasterDataCollectionsCommand,
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
} from "../commands/ListRasterDataCollectionsCommand";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRasterDataCollections: (
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListRasterDataCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListRasterDataCollectionsCommandOutput> = createPaginator<
  SageMakerGeospatialPaginationConfiguration,
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput
>(SageMakerGeospatialClient, ListRasterDataCollectionsCommand, "NextToken", "NextToken", "");
