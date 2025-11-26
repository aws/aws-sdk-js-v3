// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput,
} from "../commands/DescribeSchemasCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSchemas: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeSchemasCommandInput,
  ...rest: any[]
) => Paginator<DescribeSchemasCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput
>(DatabaseMigrationServiceClient, DescribeSchemasCommand, "Marker", "Marker", "MaxRecords");
