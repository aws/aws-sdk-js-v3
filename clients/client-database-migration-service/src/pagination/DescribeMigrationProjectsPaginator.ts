// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMigrationProjectsCommand,
  DescribeMigrationProjectsCommandInput,
  DescribeMigrationProjectsCommandOutput,
} from "../commands/DescribeMigrationProjectsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import type { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMigrationProjects: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMigrationProjectsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMigrationProjectsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMigrationProjectsCommandInput,
  DescribeMigrationProjectsCommandOutput
>(DatabaseMigrationServiceClient, DescribeMigrationProjectsCommand, "Marker", "Marker", "MaxRecords");
