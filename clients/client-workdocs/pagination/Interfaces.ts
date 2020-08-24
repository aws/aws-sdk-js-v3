import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WorkDocsPaginationConfiguration extends PaginationConfiguration {
  client: WorkDocs | WorkDocsClient;
}
