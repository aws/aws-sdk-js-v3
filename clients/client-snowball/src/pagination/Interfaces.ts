import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SnowballPaginationConfiguration extends PaginationConfiguration {
  client: Snowball | SnowballClient;
}
