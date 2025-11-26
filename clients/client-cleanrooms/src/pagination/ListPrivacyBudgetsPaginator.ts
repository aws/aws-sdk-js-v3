// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListPrivacyBudgetsCommand,
  ListPrivacyBudgetsCommandInput,
  ListPrivacyBudgetsCommandOutput,
} from "../commands/ListPrivacyBudgetsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrivacyBudgets: (
  config: CleanRoomsPaginationConfiguration,
  input: ListPrivacyBudgetsCommandInput,
  ...rest: any[]
) => Paginator<ListPrivacyBudgetsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListPrivacyBudgetsCommandInput,
  ListPrivacyBudgetsCommandOutput
>(CleanRoomsClient, ListPrivacyBudgetsCommand, "nextToken", "nextToken", "maxResults");
