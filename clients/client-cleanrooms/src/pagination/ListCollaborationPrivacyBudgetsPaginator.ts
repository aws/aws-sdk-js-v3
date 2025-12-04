// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationPrivacyBudgetsCommand,
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput,
} from "../commands/ListCollaborationPrivacyBudgetsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationPrivacyBudgets: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationPrivacyBudgetsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationPrivacyBudgetsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput
>(CleanRoomsClient, ListCollaborationPrivacyBudgetsCommand, "nextToken", "nextToken", "maxResults");
