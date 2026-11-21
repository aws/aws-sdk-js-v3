// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeResourceAssociationsCommand,
  DescribeResourceAssociationsCommandInput,
  DescribeResourceAssociationsCommandOutput,
} from "../commands/DescribeResourceAssociationsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeResourceAssociations: (
  config: SageMakerPaginationConfiguration,
  input: DescribeResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeResourceAssociationsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  DescribeResourceAssociationsCommandInput,
  DescribeResourceAssociationsCommandOutput
>(SageMakerClient, DescribeResourceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
