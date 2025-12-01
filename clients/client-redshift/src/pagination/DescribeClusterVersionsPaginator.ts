// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterVersions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterVersionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput
>(RedshiftClient, DescribeClusterVersionsCommand, "Marker", "Marker", "MaxRecords");
