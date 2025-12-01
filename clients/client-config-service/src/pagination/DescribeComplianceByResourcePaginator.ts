// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeComplianceByResourceCommand,
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
} from "../commands/DescribeComplianceByResourceCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeComplianceByResource: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeComplianceByResourceCommandInput,
  ...rest: any[]
) => Paginator<DescribeComplianceByResourceCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput
>(ConfigServiceClient, DescribeComplianceByResourceCommand, "NextToken", "NextToken", "Limit");
