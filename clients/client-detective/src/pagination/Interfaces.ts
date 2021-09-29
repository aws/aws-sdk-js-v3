import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DetectivePaginationConfiguration extends PaginationConfiguration {
  client: Detective | DetectiveClient;
}
