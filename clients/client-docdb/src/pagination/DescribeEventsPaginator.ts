// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: DocDBPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(DocDBClient, DescribeEventsCommand, "Marker", "Marker", "MaxRecords");
