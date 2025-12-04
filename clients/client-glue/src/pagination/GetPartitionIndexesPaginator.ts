// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPartitionIndexesCommand,
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "../commands/GetPartitionIndexesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPartitionIndexes: (
  config: GluePaginationConfiguration,
  input: GetPartitionIndexesCommandInput,
  ...rest: any[]
) => Paginator<GetPartitionIndexesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput
>(GlueClient, GetPartitionIndexesCommand, "NextToken", "NextToken", "");
