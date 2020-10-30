import { CodeGuruProfiler } from "../CodeGuruProfiler";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeGuruProfilerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruProfiler | CodeGuruProfilerClient;
}
