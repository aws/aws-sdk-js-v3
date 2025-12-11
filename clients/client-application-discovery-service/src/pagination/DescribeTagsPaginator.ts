// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTags: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeTagsCommand, "nextToken", "nextToken", "maxResults");
