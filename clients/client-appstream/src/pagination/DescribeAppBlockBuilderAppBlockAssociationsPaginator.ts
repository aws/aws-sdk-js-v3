// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "../commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAppBlockBuilderAppBlockAssociations: (
  config: AppStreamPaginationConfiguration,
  input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> = createPaginator<
  AppStreamPaginationConfiguration,
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput
>(AppStreamClient, DescribeAppBlockBuilderAppBlockAssociationsCommand, "NextToken", "NextToken", "MaxResults");
