// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Braket } from "../Braket";
import { BraketClient } from "../BraketClient";

export interface BraketPaginationConfiguration extends PaginationConfiguration {
  client: Braket | BraketClient;
}
