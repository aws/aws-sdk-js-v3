// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataSharesForProducerCommand,
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "../commands/DescribeDataSharesForProducerCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataSharesForProducer: (
  config: RedshiftPaginationConfiguration,
  input: DescribeDataSharesForProducerCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataSharesForProducerCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput
>(RedshiftClient, DescribeDataSharesForProducerCommand, "Marker", "Marker", "MaxRecords");
