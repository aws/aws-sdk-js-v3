// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEffectiveInstanceAssociations: (
  config: SSMPaginationConfiguration,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEffectiveInstanceAssociationsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput
>(SSMClient, DescribeEffectiveInstanceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
