// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "../commands/ListImageScanFindingAggregationsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageScanFindingAggregations: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImageScanFindingAggregationsCommandInput,
  ...rest: any[]
) => Paginator<ListImageScanFindingAggregationsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput
>(ImagebuilderClient, ListImageScanFindingAggregationsCommand, "nextToken", "nextToken", "");
