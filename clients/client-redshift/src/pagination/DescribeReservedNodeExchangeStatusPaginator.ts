// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "../commands/DescribeReservedNodeExchangeStatusCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedNodeExchangeStatus: (
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodeExchangeStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedNodeExchangeStatusCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput
>(RedshiftClient, DescribeReservedNodeExchangeStatusCommand, "Marker", "Marker", "MaxRecords");
