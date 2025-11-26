// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProductSubscriptionsCommand,
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "../commands/ListProductSubscriptionsCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProductSubscriptions: (
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListProductSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListProductSubscriptionsCommandOutput> = createPaginator<
  LicenseManagerUserSubscriptionsPaginationConfiguration,
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput
>(LicenseManagerUserSubscriptionsClient, ListProductSubscriptionsCommand, "NextToken", "NextToken", "MaxResults");
