// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBProxiesCommand,
  DescribeDBProxiesCommandInput,
  DescribeDBProxiesCommandOutput,
} from "../commands/DescribeDBProxiesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBProxies: (
  config: RDSPaginationConfiguration,
  input: DescribeDBProxiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBProxiesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBProxiesCommandInput,
  DescribeDBProxiesCommandOutput
>(RDSClient, DescribeDBProxiesCommand, "Marker", "Marker", "MaxRecords");
