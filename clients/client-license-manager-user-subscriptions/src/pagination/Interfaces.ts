// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LicenseManagerUserSubscriptions } from "../LicenseManagerUserSubscriptions";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";

export interface LicenseManagerUserSubscriptionsPaginationConfiguration extends PaginationConfiguration {
  client: LicenseManagerUserSubscriptions | LicenseManagerUserSubscriptionsClient;
}
