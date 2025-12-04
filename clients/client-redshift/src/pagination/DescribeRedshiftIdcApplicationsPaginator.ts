// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRedshiftIdcApplicationsCommand,
  DescribeRedshiftIdcApplicationsCommandInput,
  DescribeRedshiftIdcApplicationsCommandOutput,
} from "../commands/DescribeRedshiftIdcApplicationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRedshiftIdcApplications: (
  config: RedshiftPaginationConfiguration,
  input: DescribeRedshiftIdcApplicationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRedshiftIdcApplicationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeRedshiftIdcApplicationsCommandInput,
  DescribeRedshiftIdcApplicationsCommandOutput
>(RedshiftClient, DescribeRedshiftIdcApplicationsCommand, "Marker", "Marker", "MaxRecords");
