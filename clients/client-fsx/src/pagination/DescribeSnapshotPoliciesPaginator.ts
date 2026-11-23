// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotPoliciesCommand,
  DescribeSnapshotPoliciesCommandInput,
  DescribeSnapshotPoliciesCommandOutput,
} from "../commands/DescribeSnapshotPoliciesCommand";
import { FSxClient } from "../FSxClient";
import type { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshotPolicies: (
  config: FSxPaginationConfiguration,
  input: DescribeSnapshotPoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotPoliciesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeSnapshotPoliciesCommandInput,
  DescribeSnapshotPoliciesCommandOutput
>(FSxClient, DescribeSnapshotPoliciesCommand, "NextToken", "NextToken", "MaxResults");
