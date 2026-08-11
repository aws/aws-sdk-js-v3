// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListAnalysisLogExportsCommand,
  ListAnalysisLogExportsCommandInput,
  ListAnalysisLogExportsCommandOutput,
} from "../commands/ListAnalysisLogExportsCommand";
import type { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalysisLogExports: (
  config: CleanRoomsPaginationConfiguration,
  input: ListAnalysisLogExportsCommandInput,
  ...rest: any[]
) => Paginator<ListAnalysisLogExportsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListAnalysisLogExportsCommandInput,
  ListAnalysisLogExportsCommandOutput
>(CleanRoomsClient, ListAnalysisLogExportsCommand, "nextToken", "nextToken", "maxResults");
