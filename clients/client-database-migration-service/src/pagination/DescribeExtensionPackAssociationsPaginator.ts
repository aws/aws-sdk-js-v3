// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeExtensionPackAssociationsCommand,
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput,
} from "../commands/DescribeExtensionPackAssociationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeExtensionPackAssociations: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeExtensionPackAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeExtensionPackAssociationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand, "Marker", "Marker", "MaxRecords");
