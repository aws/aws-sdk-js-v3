// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "../commands/DescribeImageScanFindingsCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImageScanFindings: (
  config: ECRPaginationConfiguration,
  input: DescribeImageScanFindingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageScanFindingsCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput
>(ECRClient, DescribeImageScanFindingsCommand, "nextToken", "nextToken", "maxResults");
