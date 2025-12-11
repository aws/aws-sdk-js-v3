// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlaceIndexesCommand,
  ListPlaceIndexesCommandInput,
  ListPlaceIndexesCommandOutput,
} from "../commands/ListPlaceIndexesCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlaceIndexes: (
  config: LocationPaginationConfiguration,
  input: ListPlaceIndexesCommandInput,
  ...rest: any[]
) => Paginator<ListPlaceIndexesCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListPlaceIndexesCommandInput,
  ListPlaceIndexesCommandOutput
>(LocationClient, ListPlaceIndexesCommand, "NextToken", "NextToken", "MaxResults");
