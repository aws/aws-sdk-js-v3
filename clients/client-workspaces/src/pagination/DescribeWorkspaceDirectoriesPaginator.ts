// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeWorkspaceDirectories: (
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspaceDirectoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeWorkspaceDirectoriesCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput
>(WorkSpacesClient, DescribeWorkspaceDirectoriesCommand, "NextToken", "NextToken", "");
