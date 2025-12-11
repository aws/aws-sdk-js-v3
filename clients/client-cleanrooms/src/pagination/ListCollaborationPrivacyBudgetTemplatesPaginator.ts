// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationPrivacyBudgetTemplates: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationPrivacyBudgetTemplatesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput
>(CleanRoomsClient, ListCollaborationPrivacyBudgetTemplatesCommand, "nextToken", "nextToken", "maxResults");
