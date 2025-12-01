// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: NeptunePaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(NeptuneClient, DescribeEventsCommand, "Marker", "Marker", "MaxRecords");
