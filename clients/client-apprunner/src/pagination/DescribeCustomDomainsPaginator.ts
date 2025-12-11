// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  DescribeCustomDomainsCommand,
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "../commands/DescribeCustomDomainsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCustomDomains: (
  config: AppRunnerPaginationConfiguration,
  input: DescribeCustomDomainsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCustomDomainsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput
>(AppRunnerClient, DescribeCustomDomainsCommand, "NextToken", "NextToken", "MaxResults");
