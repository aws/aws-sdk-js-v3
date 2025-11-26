// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRecoveryInstancesCommand,
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "../commands/DescribeRecoveryInstancesCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRecoveryInstances: (
  config: DrsPaginationConfiguration,
  input: DescribeRecoveryInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRecoveryInstancesCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput
>(DrsClient, DescribeRecoveryInstancesCommand, "nextToken", "nextToken", "maxResults");
