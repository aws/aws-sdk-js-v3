// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "../commands/DescribeModelVersionsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeModelVersions: (
  config: FraudDetectorPaginationConfiguration,
  input: DescribeModelVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeModelVersionsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput
>(FraudDetectorClient, DescribeModelVersionsCommand, "nextToken", "nextToken", "maxResults");
