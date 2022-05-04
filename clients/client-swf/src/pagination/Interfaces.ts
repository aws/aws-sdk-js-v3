// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";

export interface SWFPaginationConfiguration extends PaginationConfiguration {
  client: SWF | SWFClient;
}
