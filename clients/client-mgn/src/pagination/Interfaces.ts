// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";

export interface MgnPaginationConfiguration extends PaginationConfiguration {
  client: Mgn | MgnClient;
}
