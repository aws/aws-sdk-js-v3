// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";

export interface CodeCommitPaginationConfiguration extends PaginationConfiguration {
  client: CodeCommit | CodeCommitClient;
}
