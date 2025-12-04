// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRootFoldersCommand,
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "../commands/DescribeRootFoldersCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRootFolders: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeRootFoldersCommandInput,
  ...rest: any[]
) => Paginator<DescribeRootFoldersCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput
>(WorkDocsClient, DescribeRootFoldersCommand, "Marker", "Marker", "Limit");
