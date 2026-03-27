// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchImageSetsCommand,
  SearchImageSetsCommandInput,
  SearchImageSetsCommandOutput,
} from "../commands/SearchImageSetsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import type { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchImageSets: (
  config: MedicalImagingPaginationConfiguration,
  input: SearchImageSetsCommandInput,
  ...rest: any[]
) => Paginator<SearchImageSetsCommandOutput> = createPaginator<
  MedicalImagingPaginationConfiguration,
  SearchImageSetsCommandInput,
  SearchImageSetsCommandOutput
>(MedicalImagingClient, SearchImageSetsCommand, "nextToken", "nextToken", "maxResults");
