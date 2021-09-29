import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface HoneycodePaginationConfiguration extends PaginationConfiguration {
  client: Honeycode | HoneycodeClient;
}
