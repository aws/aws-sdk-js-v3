// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventSubscriptions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventSubscriptionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
>(RedshiftClient, DescribeEventSubscriptionsCommand, "Marker", "Marker", "MaxRecords");
