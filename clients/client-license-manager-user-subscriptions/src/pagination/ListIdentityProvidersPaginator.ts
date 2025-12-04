// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentityProviders: (
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListIdentityProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListIdentityProvidersCommandOutput> = createPaginator<
  LicenseManagerUserSubscriptionsPaginationConfiguration,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput
>(LicenseManagerUserSubscriptionsClient, ListIdentityProvidersCommand, "NextToken", "NextToken", "MaxResults");
