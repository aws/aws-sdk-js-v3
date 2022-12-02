// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { OpenSearchServerless } from "../OpenSearchServerless";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";

export interface OpenSearchServerlessPaginationConfiguration extends PaginationConfiguration {
  client: OpenSearchServerless | OpenSearchServerlessClient;
}
