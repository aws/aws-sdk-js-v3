// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserAssociationsCommand,
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
} from "../commands/ListUserAssociationsCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserAssociations: (
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListUserAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListUserAssociationsCommandOutput> = createPaginator<
  LicenseManagerUserSubscriptionsPaginationConfiguration,
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput
>(LicenseManagerUserSubscriptionsClient, ListUserAssociationsCommand, "NextToken", "NextToken", "MaxResults");
