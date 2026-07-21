// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeQev2IdcApplicationsCommand,
  DescribeQev2IdcApplicationsCommandInput,
  DescribeQev2IdcApplicationsCommandOutput,
} from "../commands/DescribeQev2IdcApplicationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import type { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeQev2IdcApplications: (
  config: RedshiftPaginationConfiguration,
  input: DescribeQev2IdcApplicationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeQev2IdcApplicationsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeQev2IdcApplicationsCommandInput,
  DescribeQev2IdcApplicationsCommandOutput
>(RedshiftClient, DescribeQev2IdcApplicationsCommand, "Marker", "Marker", "MaxRecords");
