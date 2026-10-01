// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServiceLifecycleCommand,
  DescribeServiceLifecycleCommandInput,
  DescribeServiceLifecycleCommandOutput,
} from "../commands/DescribeServiceLifecycleCommand";
import { HealthClient } from "../HealthClient";
import type { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServiceLifecycle: (
  config: HealthPaginationConfiguration,
  input: DescribeServiceLifecycleCommandInput,
  ...rest: any[]
) => Paginator<DescribeServiceLifecycleCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeServiceLifecycleCommandInput,
  DescribeServiceLifecycleCommandOutput
>(HealthClient, DescribeServiceLifecycleCommand, "nextToken", "nextToken", "maxResults");
