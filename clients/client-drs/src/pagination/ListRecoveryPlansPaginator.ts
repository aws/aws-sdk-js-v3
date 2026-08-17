// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryPlansCommand,
  ListRecoveryPlansCommandInput,
  ListRecoveryPlansCommandOutput,
} from "../commands/ListRecoveryPlansCommand";
import { DrsClient } from "../DrsClient";
import type { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPlans: (
  config: DrsPaginationConfiguration,
  input: ListRecoveryPlansCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPlansCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListRecoveryPlansCommandInput,
  ListRecoveryPlansCommandOutput
>(DrsClient, ListRecoveryPlansCommand, "nextToken", "nextToken", "maxResults");
