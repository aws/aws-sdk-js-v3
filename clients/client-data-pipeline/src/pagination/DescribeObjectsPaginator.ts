// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeObjectsCommand,
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
} from "../commands/DescribeObjectsCommand";
import { DataPipelineClient } from "../DataPipelineClient";
import { DataPipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeObjects: (
  config: DataPipelinePaginationConfiguration,
  input: DescribeObjectsCommandInput,
  ...rest: any[]
) => Paginator<DescribeObjectsCommandOutput> = createPaginator<
  DataPipelinePaginationConfiguration,
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput
>(DataPipelineClient, DescribeObjectsCommand, "marker", "marker", "");
