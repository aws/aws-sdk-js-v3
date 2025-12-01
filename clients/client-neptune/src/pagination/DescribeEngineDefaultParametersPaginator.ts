// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineDefaultParameters: (
  config: NeptunePaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineDefaultParametersCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput
>(NeptuneClient, DescribeEngineDefaultParametersCommand, "Marker", "EngineDefaults.Marker", "MaxRecords");
