// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAssessmentCommand,
  DescribeAssessmentCommandInput,
  DescribeAssessmentCommandOutput,
} from "../commands/DescribeAssessmentCommand";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import type { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAssessment: (
  config: MarketplaceCatalogPaginationConfiguration,
  input: DescribeAssessmentCommandInput,
  ...rest: any[]
) => Paginator<DescribeAssessmentCommandOutput> = createPaginator<
  MarketplaceCatalogPaginationConfiguration,
  DescribeAssessmentCommandInput,
  DescribeAssessmentCommandOutput
>(MarketplaceCatalogClient, DescribeAssessmentCommand, "NextToken", "NextToken", "MaxResults");
