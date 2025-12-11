// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFreeTierUsageCommand,
  GetFreeTierUsageCommandInput,
  GetFreeTierUsageCommandOutput,
} from "../commands/GetFreeTierUsageCommand";
import { FreeTierClient } from "../FreeTierClient";
import { FreeTierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFreeTierUsage: (
  config: FreeTierPaginationConfiguration,
  input: GetFreeTierUsageCommandInput,
  ...rest: any[]
) => Paginator<GetFreeTierUsageCommandOutput> = createPaginator<
  FreeTierPaginationConfiguration,
  GetFreeTierUsageCommandInput,
  GetFreeTierUsageCommandOutput
>(FreeTierClient, GetFreeTierUsageCommand, "nextToken", "nextToken", "maxResults");
