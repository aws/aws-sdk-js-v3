// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationMapperSegmentsCommand,
  ListNetworkMigrationMapperSegmentsCommandInput,
  ListNetworkMigrationMapperSegmentsCommandOutput,
} from "../commands/ListNetworkMigrationMapperSegmentsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationMapperSegments: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationMapperSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationMapperSegmentsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationMapperSegmentsCommandInput,
  ListNetworkMigrationMapperSegmentsCommandOutput
>(MgnClient, ListNetworkMigrationMapperSegmentsCommand, "nextToken", "nextToken", "maxResults");
