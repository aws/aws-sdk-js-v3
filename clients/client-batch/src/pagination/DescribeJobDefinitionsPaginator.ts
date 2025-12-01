// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeJobDefinitionsCommand,
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobDefinitions: (
  config: BatchPaginationConfiguration,
  input: DescribeJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobDefinitionsCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput
>(BatchClient, DescribeJobDefinitionsCommand, "nextToken", "nextToken", "maxResults");
