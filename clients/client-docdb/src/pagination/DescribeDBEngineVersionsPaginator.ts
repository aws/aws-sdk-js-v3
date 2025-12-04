// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBEngineVersions: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBEngineVersionsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput
>(DocDBClient, DescribeDBEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
