import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SWFPaginationConfiguration extends PaginationConfiguration {
  client: SWF | SWFClient;
}
