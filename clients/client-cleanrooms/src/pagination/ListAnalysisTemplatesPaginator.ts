// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListAnalysisTemplatesCommand,
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput,
} from "../commands/ListAnalysisTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalysisTemplates: (
  config: CleanRoomsPaginationConfiguration,
  input: ListAnalysisTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListAnalysisTemplatesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput
>(CleanRoomsClient, ListAnalysisTemplatesCommand, "nextToken", "nextToken", "maxResults");
