// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeContinuousExportsCommand,
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeContinuousExports: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeContinuousExportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeContinuousExportsCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand, "nextToken", "nextToken", "maxResults");
