// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetPartitionsCommand,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
} from "../commands/GetPartitionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPartitions: (
  config: GluePaginationConfiguration,
  input: GetPartitionsCommandInput,
  ...rest: any[]
) => Paginator<GetPartitionsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput
>(GlueClient, GetPartitionsCommand, "NextToken", "NextToken", "MaxResults");
