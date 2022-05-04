// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";

export interface DataBrewPaginationConfiguration extends PaginationConfiguration {
  client: DataBrew | DataBrewClient;
}
