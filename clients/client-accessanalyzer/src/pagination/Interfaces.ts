import { AccessAnalyzer } from "../AccessAnalyzer";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AccessAnalyzerPaginationConfiguration extends PaginationConfiguration {
  client: AccessAnalyzer | AccessAnalyzerClient;
}
