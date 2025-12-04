// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudHSMV2Client } from "../CloudHSMV2Client";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusters: (
  config: CloudHSMV2PaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeClustersCommandOutput> = createPaginator<
  CloudHSMV2PaginationConfiguration,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
>(CloudHSMV2Client, DescribeClustersCommand, "NextToken", "NextToken", "MaxResults");
