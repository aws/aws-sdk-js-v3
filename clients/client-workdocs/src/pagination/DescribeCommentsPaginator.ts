// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCommentsCommand,
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput,
} from "../commands/DescribeCommentsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeComments: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeCommentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCommentsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput
>(WorkDocsClient, DescribeCommentsCommand, "Marker", "Marker", "Limit");
