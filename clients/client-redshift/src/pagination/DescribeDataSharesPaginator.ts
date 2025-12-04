// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataSharesCommand,
  DescribeDataSharesCommandInput,
  DescribeDataSharesCommandOutput,
} from "../commands/DescribeDataSharesCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataShares: (
  config: RedshiftPaginationConfiguration,
  input: DescribeDataSharesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataSharesCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeDataSharesCommandInput,
  DescribeDataSharesCommandOutput
>(RedshiftClient, DescribeDataSharesCommand, "Marker", "Marker", "MaxRecords");
