// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataRepositoryAssociationsCommand,
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
} from "../commands/DescribeDataRepositoryAssociationsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataRepositoryAssociations: (
  config: FSxPaginationConfiguration,
  input: DescribeDataRepositoryAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataRepositoryAssociationsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput
>(FSxClient, DescribeDataRepositoryAssociationsCommand, "NextToken", "NextToken", "MaxResults");
