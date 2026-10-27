// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationBackfillResultsCommand,
  DescribeReplicationBackfillResultsCommandInput,
  DescribeReplicationBackfillResultsCommandOutput,
} from "../commands/DescribeReplicationBackfillResultsCommand";
import { ECRClient } from "../ECRClient";
import type { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationBackfillResults: (
  config: ECRPaginationConfiguration,
  input: DescribeReplicationBackfillResultsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationBackfillResultsCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribeReplicationBackfillResultsCommandInput,
  DescribeReplicationBackfillResultsCommandOutput
>(ECRClient, DescribeReplicationBackfillResultsCommand, "nextToken", "nextToken", "maxResults");
