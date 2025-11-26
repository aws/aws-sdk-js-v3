// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "../commands/DescribeWorkspaceBundlesCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeWorkspaceBundles: (
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspaceBundlesCommandInput,
  ...rest: any[]
) => Paginator<DescribeWorkspaceBundlesCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput
>(WorkSpacesClient, DescribeWorkspaceBundlesCommand, "NextToken", "NextToken", "");
