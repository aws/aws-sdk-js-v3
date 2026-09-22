// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListSpacesForOrganizationCommand,
  ListSpacesForOrganizationCommandInput,
  ListSpacesForOrganizationCommandOutput,
} from "../commands/ListSpacesForOrganizationCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpacesForOrganization: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListSpacesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListSpacesForOrganizationCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListSpacesForOrganizationCommandInput,
  ListSpacesForOrganizationCommandOutput
>(CloudWatchOmniClient, ListSpacesForOrganizationCommand, "nextToken", "nextToken", "maxResults");
