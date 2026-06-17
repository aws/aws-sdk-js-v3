// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSharedResourcesCommand,
  DescribeSharedResourcesCommandInput,
  DescribeSharedResourcesCommandOutput,
} from "../commands/DescribeSharedResourcesCommand";
import { MqClient } from "../MqClient";
import type { MqPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSharedResources: (
  config: MqPaginationConfiguration,
  input: DescribeSharedResourcesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSharedResourcesCommandOutput> = createPaginator<
  MqPaginationConfiguration,
  DescribeSharedResourcesCommandInput,
  DescribeSharedResourcesCommandOutput
>(MqClient, DescribeSharedResourcesCommand, "NextToken", "NextToken", "MaxResults");
