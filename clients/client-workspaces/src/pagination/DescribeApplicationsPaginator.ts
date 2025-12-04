// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "../commands/DescribeApplicationsCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeApplications: (
  config: WorkSpacesPaginationConfiguration,
  input: DescribeApplicationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeApplicationsCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput
>(WorkSpacesClient, DescribeApplicationsCommand, "NextToken", "NextToken", "MaxResults");
