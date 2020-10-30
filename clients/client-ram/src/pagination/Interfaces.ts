import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface RAMPaginationConfiguration extends PaginationConfiguration {
  client: RAM | RAMClient;
}
