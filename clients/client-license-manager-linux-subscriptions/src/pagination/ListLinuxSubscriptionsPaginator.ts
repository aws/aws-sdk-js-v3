// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLinuxSubscriptionsCommand,
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput,
} from "../commands/ListLinuxSubscriptionsCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "../LicenseManagerLinuxSubscriptionsClient";
import { LicenseManagerLinuxSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinuxSubscriptions: (
  config: LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  input: ListLinuxSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListLinuxSubscriptionsCommandOutput> = createPaginator<
  LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput
>(LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionsCommand, "NextToken", "NextToken", "MaxResults");
