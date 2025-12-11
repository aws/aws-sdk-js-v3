// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeBucketsCommand,
  DescribeBucketsCommandInput,
  DescribeBucketsCommandOutput,
} from "../commands/DescribeBucketsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBuckets: (
  config: Macie2PaginationConfiguration,
  input: DescribeBucketsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBucketsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  DescribeBucketsCommandInput,
  DescribeBucketsCommandOutput
>(Macie2Client, DescribeBucketsCommand, "nextToken", "nextToken", "maxResults");
