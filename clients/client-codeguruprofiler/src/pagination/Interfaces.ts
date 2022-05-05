// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeGuruProfiler } from "../CodeGuruProfiler";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";

export interface CodeGuruProfilerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruProfiler | CodeGuruProfilerClient;
}
