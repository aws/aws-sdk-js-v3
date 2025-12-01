// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
} from "../commands/DescribeOrganizationResourceCollectionHealthCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrganizationResourceCollectionHealth: (
  config: DevOpsGuruPaginationConfiguration,
  input: DescribeOrganizationResourceCollectionHealthCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrganizationResourceCollectionHealthCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput
>(DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand, "NextToken", "NextToken", "");
