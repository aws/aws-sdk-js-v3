// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchRasterDataCollectionCommand,
  SearchRasterDataCollectionCommandInput,
  SearchRasterDataCollectionCommandOutput,
} from "../commands/SearchRasterDataCollectionCommand";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRasterDataCollection: (
  config: SageMakerGeospatialPaginationConfiguration,
  input: SearchRasterDataCollectionCommandInput,
  ...rest: any[]
) => Paginator<SearchRasterDataCollectionCommandOutput> = createPaginator<
  SageMakerGeospatialPaginationConfiguration,
  SearchRasterDataCollectionCommandInput,
  SearchRasterDataCollectionCommandOutput
>(SageMakerGeospatialClient, SearchRasterDataCollectionCommand, "NextToken", "NextToken", "");
