// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationCodeGenerationSegmentsCommand,
  ListNetworkMigrationCodeGenerationSegmentsCommandInput,
  ListNetworkMigrationCodeGenerationSegmentsCommandOutput,
} from "../commands/ListNetworkMigrationCodeGenerationSegmentsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationCodeGenerationSegments: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationCodeGenerationSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationCodeGenerationSegmentsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationCodeGenerationSegmentsCommandInput,
  ListNetworkMigrationCodeGenerationSegmentsCommandOutput
>(MgnClient, ListNetworkMigrationCodeGenerationSegmentsCommand, "nextToken", "nextToken", "maxResults");
