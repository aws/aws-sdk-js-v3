// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Billingconductor } from "../Billingconductor";
import { BillingconductorClient } from "../BillingconductorClient";

export interface BillingconductorPaginationConfiguration extends PaginationConfiguration {
  client: Billingconductor | BillingconductorClient;
}
