// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUsers: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...rest: any[]
) => Paginator<DescribeUsersCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
>(WorkDocsClient, DescribeUsersCommand, "Marker", "Marker", "Limit");
