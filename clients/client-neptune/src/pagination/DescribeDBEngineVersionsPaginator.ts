// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBEngineVersions: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBEngineVersionsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput
>(NeptuneClient, DescribeDBEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
