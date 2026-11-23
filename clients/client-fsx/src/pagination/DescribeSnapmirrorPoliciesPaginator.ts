// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapmirrorPoliciesCommand,
  DescribeSnapmirrorPoliciesCommandInput,
  DescribeSnapmirrorPoliciesCommandOutput,
} from "../commands/DescribeSnapmirrorPoliciesCommand";
import { FSxClient } from "../FSxClient";
import type { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapmirrorPolicies: (
  config: FSxPaginationConfiguration,
  input: DescribeSnapmirrorPoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapmirrorPoliciesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeSnapmirrorPoliciesCommandInput,
  DescribeSnapmirrorPoliciesCommandOutput
>(FSxClient, DescribeSnapmirrorPoliciesCommand, "NextToken", "NextToken", "MaxResults");
