// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Pipes } from "../Pipes";
import { PipesClient } from "../PipesClient";

export interface PipesPaginationConfiguration extends PaginationConfiguration {
  client: Pipes | PipesClient;
}
