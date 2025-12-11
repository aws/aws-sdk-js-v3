// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStageSessionsCommand,
  ListStageSessionsCommandInput,
  ListStageSessionsCommandOutput,
} from "../commands/ListStageSessionsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStageSessions: (
  config: IVSRealTimePaginationConfiguration,
  input: ListStageSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListStageSessionsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListStageSessionsCommandInput,
  ListStageSessionsCommandOutput
>(IVSRealTimeClient, ListStageSessionsCommand, "nextToken", "nextToken", "maxResults");
