// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataProtectionSettingsCommand,
  ListDataProtectionSettingsCommandInput,
  ListDataProtectionSettingsCommandOutput,
} from "../commands/ListDataProtectionSettingsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataProtectionSettings: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListDataProtectionSettingsCommandInput,
  ...rest: any[]
) => Paginator<ListDataProtectionSettingsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListDataProtectionSettingsCommandInput,
  ListDataProtectionSettingsCommandOutput
>(WorkSpacesWebClient, ListDataProtectionSettingsCommand, "nextToken", "nextToken", "maxResults");
