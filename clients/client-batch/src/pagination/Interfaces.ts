import { Batch } from "../Batch";
import { BatchClient } from "../BatchClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface BatchPaginationConfiguration extends PaginationConfiguration {
  client: Batch | BatchClient;
}
