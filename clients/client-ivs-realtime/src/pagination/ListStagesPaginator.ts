// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "../commands/ListStagesCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStages: (
  config: IVSRealTimePaginationConfiguration,
  input: ListStagesCommandInput,
  ...rest: any[]
) => Paginator<ListStagesCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListStagesCommandInput,
  ListStagesCommandOutput
>(IVSRealTimeClient, ListStagesCommand, "nextToken", "nextToken", "maxResults");
