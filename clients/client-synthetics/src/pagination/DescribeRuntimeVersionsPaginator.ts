// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "../commands/DescribeRuntimeVersionsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRuntimeVersions: (
  config: SyntheticsPaginationConfiguration,
  input: DescribeRuntimeVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRuntimeVersionsCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput
>(SyntheticsClient, DescribeRuntimeVersionsCommand, "NextToken", "NextToken", "MaxResults");
