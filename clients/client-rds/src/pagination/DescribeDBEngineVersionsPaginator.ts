// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBEngineVersions: (
  config: RDSPaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBEngineVersionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput
>(RDSClient, DescribeDBEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
