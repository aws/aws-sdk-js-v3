// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "../commands/DescribeDataSharesForConsumerCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataSharesForConsumer: (
  config: RedshiftPaginationConfiguration,
  input: DescribeDataSharesForConsumerCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataSharesForConsumerCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput
>(RedshiftClient, DescribeDataSharesForConsumerCommand, "Marker", "Marker", "MaxRecords");
