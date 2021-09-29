import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SFNPaginationConfiguration extends PaginationConfiguration {
  client: SFN | SFNClient;
}
