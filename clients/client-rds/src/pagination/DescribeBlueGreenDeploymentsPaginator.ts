// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeBlueGreenDeploymentsCommand,
  DescribeBlueGreenDeploymentsCommandInput,
  DescribeBlueGreenDeploymentsCommandOutput,
} from "../commands/DescribeBlueGreenDeploymentsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBlueGreenDeployments: (
  config: RDSPaginationConfiguration,
  input: DescribeBlueGreenDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBlueGreenDeploymentsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeBlueGreenDeploymentsCommandInput,
  DescribeBlueGreenDeploymentsCommandOutput
>(RDSClient, DescribeBlueGreenDeploymentsCommand, "Marker", "Marker", "MaxRecords");
