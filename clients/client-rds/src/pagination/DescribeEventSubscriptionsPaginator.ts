// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventSubscriptions: (
  config: RDSPaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventSubscriptionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
>(RDSClient, DescribeEventSubscriptionsCommand, "Marker", "Marker", "MaxRecords");
