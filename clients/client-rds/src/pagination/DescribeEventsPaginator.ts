// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: RDSPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(RDSClient, DescribeEventsCommand, "Marker", "Marker", "MaxRecords");
