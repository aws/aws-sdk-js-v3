// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "../commands/DescribeReservedNodeOfferingsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedNodeOfferings: (
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodeOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedNodeOfferingsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput
>(RedshiftClient, DescribeReservedNodeOfferingsCommand, "Marker", "Marker", "MaxRecords");
