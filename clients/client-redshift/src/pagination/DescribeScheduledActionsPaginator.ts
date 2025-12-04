// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScheduledActions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduledActionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput
>(RedshiftClient, DescribeScheduledActionsCommand, "Marker", "Marker", "MaxRecords");
