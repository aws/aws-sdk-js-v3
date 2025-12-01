// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeWorkspacesCommand,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "../commands/DescribeWorkspacesCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeWorkspaces: (
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeWorkspacesCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput
>(WorkSpacesClient, DescribeWorkspacesCommand, "NextToken", "NextToken", "Limit");
