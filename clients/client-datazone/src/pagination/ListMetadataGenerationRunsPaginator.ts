// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMetadataGenerationRunsCommand,
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "../commands/ListMetadataGenerationRunsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetadataGenerationRuns: (
  config: DataZonePaginationConfiguration,
  input: ListMetadataGenerationRunsCommandInput,
  ...rest: any[]
) => Paginator<ListMetadataGenerationRunsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput
>(DataZoneClient, ListMetadataGenerationRunsCommand, "nextToken", "nextToken", "maxResults");
