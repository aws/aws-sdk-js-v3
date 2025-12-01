// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "../commands/DescribeAssociationExecutionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAssociationExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAssociationExecutionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput
>(SSMClient, DescribeAssociationExecutionsCommand, "NextToken", "NextToken", "MaxResults");
