// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "../commands/DescribeNodeConfigurationOptionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNodeConfigurationOptions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNodeConfigurationOptionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput
>(RedshiftClient, DescribeNodeConfigurationOptionsCommand, "Marker", "Marker", "MaxRecords");
