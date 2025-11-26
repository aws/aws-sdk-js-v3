// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  QueryObjectsCommand,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
} from "../commands/QueryObjectsCommand";
import { DataPipelineClient } from "../DataPipelineClient";
import { DataPipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryObjects: (
  config: DataPipelinePaginationConfiguration,
  input: QueryObjectsCommandInput,
  ...rest: any[]
) => Paginator<QueryObjectsCommandOutput> = createPaginator<
  DataPipelinePaginationConfiguration,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput
>(DataPipelineClient, QueryObjectsCommand, "marker", "marker", "limit");
