// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  OpsWorksCMPaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(OpsWorksCMClient, DescribeEventsCommand, "NextToken", "NextToken", "MaxResults");
