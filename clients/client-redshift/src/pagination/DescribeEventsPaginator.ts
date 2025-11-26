// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: RedshiftPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(RedshiftClient, DescribeEventsCommand, "Marker", "Marker", "MaxRecords");
