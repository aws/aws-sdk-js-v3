// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGroupsCommand,
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput,
} from "../commands/DescribeGroupsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGroups: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeGroupsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput
>(WorkDocsClient, DescribeGroupsCommand, "Marker", "Marker", "Limit");
