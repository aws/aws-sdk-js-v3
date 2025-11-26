// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "../commands/DescribeSourceRegionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSourceRegions: (
  config: RDSPaginationConfiguration,
  input: DescribeSourceRegionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSourceRegionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput
>(RDSClient, DescribeSourceRegionsCommand, "Marker", "Marker", "MaxRecords");
