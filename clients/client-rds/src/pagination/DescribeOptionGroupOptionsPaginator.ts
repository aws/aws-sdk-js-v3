// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOptionGroupOptionsCommand,
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
} from "../commands/DescribeOptionGroupOptionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOptionGroupOptions: (
  config: RDSPaginationConfiguration,
  input: DescribeOptionGroupOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOptionGroupOptionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput
>(RDSClient, DescribeOptionGroupOptionsCommand, "Marker", "Marker", "MaxRecords");
