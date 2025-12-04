// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedInstanceOfferingsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedInstanceOfferings: (
  config: OpenSearchPaginationConfiguration,
  input: DescribeReservedInstanceOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedInstanceOfferingsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput
>(OpenSearchClient, DescribeReservedInstanceOfferingsCommand, "NextToken", "NextToken", "MaxResults");
