// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListOrganizationalUnitsCommand,
  ListOrganizationalUnitsCommandInput,
  ListOrganizationalUnitsCommandOutput,
} from "../commands/ListOrganizationalUnitsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationalUnits: (
  config: NotificationsPaginationConfiguration,
  input: ListOrganizationalUnitsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationalUnitsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListOrganizationalUnitsCommandInput,
  ListOrganizationalUnitsCommandOutput
>(NotificationsClient, ListOrganizationalUnitsCommand, "nextToken", "nextToken", "maxResults");
