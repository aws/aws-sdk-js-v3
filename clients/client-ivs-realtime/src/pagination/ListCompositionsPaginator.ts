// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCompositionsCommand,
  ListCompositionsCommandInput,
  ListCompositionsCommandOutput,
} from "../commands/ListCompositionsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCompositions: (
  config: IVSRealTimePaginationConfiguration,
  input: ListCompositionsCommandInput,
  ...rest: any[]
) => Paginator<ListCompositionsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListCompositionsCommandInput,
  ListCompositionsCommandOutput
>(IVSRealTimeClient, ListCompositionsCommand, "nextToken", "nextToken", "maxResults");
