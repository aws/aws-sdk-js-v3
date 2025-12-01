// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "../commands/DescribePackagesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePackages: (
  config: OpenSearchPaginationConfiguration,
  input: DescribePackagesCommandInput,
  ...rest: any[]
) => Paginator<DescribePackagesCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput
>(OpenSearchClient, DescribePackagesCommand, "NextToken", "NextToken", "MaxResults");
