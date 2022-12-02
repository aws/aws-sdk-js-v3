// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeCatalyst } from "../CodeCatalyst";
import { CodeCatalystClient } from "../CodeCatalystClient";

export interface CodeCatalystPaginationConfiguration extends PaginationConfiguration {
  client: CodeCatalyst | CodeCatalystClient;
}
