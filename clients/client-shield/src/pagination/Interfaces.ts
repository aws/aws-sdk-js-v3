import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ShieldPaginationConfiguration extends PaginationConfiguration {
  client: Shield | ShieldClient;
}
