import { Pricing } from "../Pricing";
import { PricingClient } from "../PricingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface PricingPaginationConfiguration extends PaginationConfiguration {
  client: Pricing | PricingClient;
}
