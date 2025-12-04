// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNotificationSubscriptionsCommand,
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput,
} from "../commands/DescribeNotificationSubscriptionsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNotificationSubscriptions: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeNotificationSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNotificationSubscriptionsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput
>(WorkDocsClient, DescribeNotificationSubscriptionsCommand, "Marker", "Marker", "Limit");
