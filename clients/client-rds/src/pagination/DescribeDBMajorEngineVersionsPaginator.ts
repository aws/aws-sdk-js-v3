// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBMajorEngineVersionsCommand,
  DescribeDBMajorEngineVersionsCommandInput,
  DescribeDBMajorEngineVersionsCommandOutput,
} from "../commands/DescribeDBMajorEngineVersionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBMajorEngineVersions: (
  config: RDSPaginationConfiguration,
  input: DescribeDBMajorEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBMajorEngineVersionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBMajorEngineVersionsCommandInput,
  DescribeDBMajorEngineVersionsCommandOutput
>(RDSClient, DescribeDBMajorEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
