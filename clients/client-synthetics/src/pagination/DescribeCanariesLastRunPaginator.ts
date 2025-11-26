// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "../commands/DescribeCanariesLastRunCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCanariesLastRun: (
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesLastRunCommandInput,
  ...rest: any[]
) => Paginator<DescribeCanariesLastRunCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput
>(SyntheticsClient, DescribeCanariesLastRunCommand, "NextToken", "NextToken", "MaxResults");
