// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "../commands/DescribeEngineDefaultClusterParametersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineDefaultClusterParameters: (
  config: RDSPaginationConfiguration,
  input: DescribeEngineDefaultClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineDefaultClusterParametersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput
>(RDSClient, DescribeEngineDefaultClusterParametersCommand, "Marker", "EngineDefaults.Marker", "MaxRecords");
