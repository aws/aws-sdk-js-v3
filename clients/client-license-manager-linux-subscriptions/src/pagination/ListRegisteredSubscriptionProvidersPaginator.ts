// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegisteredSubscriptionProvidersCommand,
  ListRegisteredSubscriptionProvidersCommandInput,
  ListRegisteredSubscriptionProvidersCommandOutput,
} from "../commands/ListRegisteredSubscriptionProvidersCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "../LicenseManagerLinuxSubscriptionsClient";
import { LicenseManagerLinuxSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegisteredSubscriptionProviders: (
  config: LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  input: ListRegisteredSubscriptionProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListRegisteredSubscriptionProvidersCommandOutput> = createPaginator<
  LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  ListRegisteredSubscriptionProvidersCommandInput,
  ListRegisteredSubscriptionProvidersCommandOutput
>(
  LicenseManagerLinuxSubscriptionsClient,
  ListRegisteredSubscriptionProvidersCommand,
  "NextToken",
  "NextToken",
  "MaxResults"
);
