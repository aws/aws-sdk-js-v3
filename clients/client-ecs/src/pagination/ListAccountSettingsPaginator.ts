// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountSettingsCommand,
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "../commands/ListAccountSettingsCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountSettings: (
  config: ECSPaginationConfiguration,
  input: ListAccountSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountSettingsCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput
>(ECSClient, ListAccountSettingsCommand, "nextToken", "nextToken", "maxResults");
