// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineDefaultParameters: (
  config: RDSPaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineDefaultParametersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput
>(RDSClient, DescribeEngineDefaultParametersCommand, "Marker", "EngineDefaults.Marker", "MaxRecords");
