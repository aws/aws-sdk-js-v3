import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeCommitPaginationConfiguration extends PaginationConfiguration {
  client: CodeCommit | CodeCommitClient;
}
