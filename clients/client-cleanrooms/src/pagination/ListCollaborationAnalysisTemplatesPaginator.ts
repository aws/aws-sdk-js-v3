// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationAnalysisTemplatesCommand,
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput,
} from "../commands/ListCollaborationAnalysisTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationAnalysisTemplates: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationAnalysisTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationAnalysisTemplatesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput
>(CleanRoomsClient, ListCollaborationAnalysisTemplatesCommand, "nextToken", "nextToken", "maxResults");
