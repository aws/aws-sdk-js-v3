// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";

export interface GluePaginationConfiguration extends PaginationConfiguration {
  client: Glue | GlueClient;
}
