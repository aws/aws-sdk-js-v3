// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserSettingsCommand,
  ListUserSettingsCommandInput,
  ListUserSettingsCommandOutput,
} from "../commands/ListUserSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListUserSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListUserSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListUserSettingsCommandInput,
  ListUserSettingsCommandOutput
>(WorkSpacesWebClient, ListUserSettingsCommand, "nextToken", "nextToken", "maxResults");
