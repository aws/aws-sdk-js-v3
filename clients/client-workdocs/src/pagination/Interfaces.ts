// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";

export interface WorkDocsPaginationConfiguration extends PaginationConfiguration {
  client: WorkDocs | WorkDocsClient;
}
