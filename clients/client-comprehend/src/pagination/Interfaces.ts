// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";

export interface ComprehendPaginationConfiguration extends PaginationConfiguration {
  client: Comprehend | ComprehendClient;
}
