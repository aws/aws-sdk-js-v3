// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeEcsClustersCommand,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "../commands/DescribeEcsClustersCommand";
import { OpsWorksClient } from "../OpsWorksClient";
import { OpsWorksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEcsClusters: (
  config: OpsWorksPaginationConfiguration,
  input: DescribeEcsClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeEcsClustersCommandOutput> = createPaginator<
  OpsWorksPaginationConfiguration,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput
>(OpsWorksClient, DescribeEcsClustersCommand, "NextToken", "NextToken", "MaxResults");
