// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserAccessLoggingSettingsCommand,
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput,
} from "../commands/ListUserAccessLoggingSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserAccessLoggingSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListUserAccessLoggingSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListUserAccessLoggingSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput
>(WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand, "nextToken", "nextToken", "maxResults");
