// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput,
} from "../commands/ListProfileTimesCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfileTimes: (
  config: CodeGuruProfilerPaginationConfiguration,
  input: ListProfileTimesCommandInput,
  ...rest: any[]
) => Paginator<ListProfileTimesCommandOutput> = createPaginator<
  CodeGuruProfilerPaginationConfiguration,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput
>(CodeGuruProfilerClient, ListProfileTimesCommand, "nextToken", "nextToken", "maxResults");
