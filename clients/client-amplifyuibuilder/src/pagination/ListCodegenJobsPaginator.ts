// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ListCodegenJobsCommand,
  ListCodegenJobsCommandInput,
  ListCodegenJobsCommandOutput,
} from "../commands/ListCodegenJobsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodegenJobs: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListCodegenJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCodegenJobsCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ListCodegenJobsCommandInput,
  ListCodegenJobsCommandOutput
>(AmplifyUIBuilderClient, ListCodegenJobsCommand, "nextToken", "nextToken", "maxResults");
