// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "../commands/DescribeCanariesCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCanaries: (
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCanariesCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput
>(SyntheticsClient, DescribeCanariesCommand, "NextToken", "NextToken", "MaxResults");
