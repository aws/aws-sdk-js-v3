// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListProfilingGroupsCommand,
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "../commands/ListProfilingGroupsCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfilingGroups: (
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListProfilingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListProfilingGroupsCommandOutput> = createPaginator<
  CodeGuruProfilerPaginationConfiguration,
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput
>(CodeGuruProfilerClient, ListProfilingGroupsCommand, "nextToken", "nextToken", "maxResults");
