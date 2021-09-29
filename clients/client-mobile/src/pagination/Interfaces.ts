import { Mobile } from "../Mobile";
import { MobileClient } from "../MobileClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MobilePaginationConfiguration extends PaginationConfiguration {
  client: Mobile | MobileClient;
}
