// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineDefaultParameters: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineDefaultParametersCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput
>(ElastiCacheClient, DescribeEngineDefaultParametersCommand, "Marker", "EngineDefaults.Marker", "MaxRecords");
