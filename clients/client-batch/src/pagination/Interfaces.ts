// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Batch } from "../Batch";
import { BatchClient } from "../BatchClient";

export interface BatchPaginationConfiguration extends PaginationConfiguration {
  client: Batch | BatchClient;
}
