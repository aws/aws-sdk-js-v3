// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListPrivacyBudgetTemplatesCommand,
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListPrivacyBudgetTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrivacyBudgetTemplates: (
  config: CleanRoomsPaginationConfiguration,
  input: ListPrivacyBudgetTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListPrivacyBudgetTemplatesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput
>(CleanRoomsClient, ListPrivacyBudgetTemplatesCommand, "nextToken", "nextToken", "maxResults");
