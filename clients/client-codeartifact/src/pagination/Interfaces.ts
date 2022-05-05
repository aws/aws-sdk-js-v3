// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Codeartifact } from "../Codeartifact";
import { CodeartifactClient } from "../CodeartifactClient";

export interface CodeartifactPaginationConfiguration extends PaginationConfiguration {
  client: Codeartifact | CodeartifactClient;
}
