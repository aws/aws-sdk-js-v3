// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationMapperSegmentConstructsCommand,
  ListNetworkMigrationMapperSegmentConstructsCommandInput,
  ListNetworkMigrationMapperSegmentConstructsCommandOutput,
} from "../commands/ListNetworkMigrationMapperSegmentConstructsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationMapperSegmentConstructs: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationMapperSegmentConstructsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationMapperSegmentConstructsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationMapperSegmentConstructsCommandInput,
  ListNetworkMigrationMapperSegmentConstructsCommandOutput
>(MgnClient, ListNetworkMigrationMapperSegmentConstructsCommand, "nextToken", "nextToken", "maxResults");
