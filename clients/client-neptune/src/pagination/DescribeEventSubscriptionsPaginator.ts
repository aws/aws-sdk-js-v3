// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventSubscriptions: (
  config: NeptunePaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventSubscriptionsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
>(NeptuneClient, DescribeEventSubscriptionsCommand, "Marker", "Marker", "MaxRecords");
