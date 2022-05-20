// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";

export interface KendraPaginationConfiguration extends PaginationConfiguration {
  client: Kendra | KendraClient;
}
