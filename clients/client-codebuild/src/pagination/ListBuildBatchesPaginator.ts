// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildBatchesCommand,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
} from "../commands/ListBuildBatchesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuildBatches: (
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesCommandInput,
  ...rest: any[]
) => Paginator<ListBuildBatchesCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput
>(CodeBuildClient, ListBuildBatchesCommand, "nextToken", "nextToken", "maxResults");
