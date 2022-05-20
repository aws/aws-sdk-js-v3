// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";

export interface DetectivePaginationConfiguration extends PaginationConfiguration {
  client: Detective | DetectiveClient;
}
