// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeResourcePermissionsCommand,
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "../commands/DescribeResourcePermissionsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeResourcePermissions: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeResourcePermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeResourcePermissionsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput
>(WorkDocsClient, DescribeResourcePermissionsCommand, "Marker", "Marker", "Limit");
