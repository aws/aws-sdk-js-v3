// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceProfilesCommand,
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput,
} from "../commands/DescribeInstanceProfilesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceProfiles: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeInstanceProfilesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceProfilesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput
>(DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand, "Marker", "Marker", "MaxRecords");
