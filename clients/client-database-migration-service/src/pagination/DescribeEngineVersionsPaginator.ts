// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "../commands/DescribeEngineVersionsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineVersions: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineVersionsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput
>(DatabaseMigrationServiceClient, DescribeEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
