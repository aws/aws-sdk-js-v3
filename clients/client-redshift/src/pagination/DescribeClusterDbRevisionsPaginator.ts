// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterDbRevisionsCommand,
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "../commands/DescribeClusterDbRevisionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterDbRevisions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterDbRevisionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterDbRevisionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput
>(RedshiftClient, DescribeClusterDbRevisionsCommand, "Marker", "Marker", "MaxRecords");
