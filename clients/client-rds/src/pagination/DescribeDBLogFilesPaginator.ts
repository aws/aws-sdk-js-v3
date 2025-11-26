// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBLogFilesCommand,
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput,
} from "../commands/DescribeDBLogFilesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBLogFiles: (
  config: RDSPaginationConfiguration,
  input: DescribeDBLogFilesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBLogFilesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput
>(RDSClient, DescribeDBLogFilesCommand, "Marker", "Marker", "MaxRecords");
