// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";

export interface PricingPaginationConfiguration extends PaginationConfiguration {
  client: Pricing | PricingClient;
}
