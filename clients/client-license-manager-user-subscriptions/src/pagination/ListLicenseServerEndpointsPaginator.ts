// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLicenseServerEndpointsCommand,
  ListLicenseServerEndpointsCommandInput,
  ListLicenseServerEndpointsCommandOutput,
} from "../commands/ListLicenseServerEndpointsCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLicenseServerEndpoints: (
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListLicenseServerEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListLicenseServerEndpointsCommandOutput> = createPaginator<
  LicenseManagerUserSubscriptionsPaginationConfiguration,
  ListLicenseServerEndpointsCommandInput,
  ListLicenseServerEndpointsCommandOutput
>(LicenseManagerUserSubscriptionsClient, ListLicenseServerEndpointsCommand, "NextToken", "NextToken", "MaxResults");
