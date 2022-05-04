// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Polly } from "../Polly";
import { PollyClient } from "../PollyClient";

export interface PollyPaginationConfiguration extends PaginationConfiguration {
  client: Polly | PollyClient;
}
