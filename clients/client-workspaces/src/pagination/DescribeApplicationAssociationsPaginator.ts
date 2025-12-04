// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeApplicationAssociationsCommand,
  DescribeApplicationAssociationsCommandInput,
  DescribeApplicationAssociationsCommandOutput,
} from "../commands/DescribeApplicationAssociationsCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeApplicationAssociations: (
  config: WorkSpacesPaginationConfiguration,
  input: DescribeApplicationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeApplicationAssociationsCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  DescribeApplicationAssociationsCommandInput,
  DescribeApplicationAssociationsCommandOutput
>(WorkSpacesClient, DescribeApplicationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
