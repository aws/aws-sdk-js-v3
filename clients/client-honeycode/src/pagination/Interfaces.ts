// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";

export interface HoneycodePaginationConfiguration extends PaginationConfiguration {
  client: Honeycode | HoneycodeClient;
}
