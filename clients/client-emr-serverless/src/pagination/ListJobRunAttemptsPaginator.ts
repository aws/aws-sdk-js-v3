// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobRunAttemptsCommand,
  ListJobRunAttemptsCommandInput,
  ListJobRunAttemptsCommandOutput,
} from "../commands/ListJobRunAttemptsCommand";
import { EMRServerlessClient } from "../EMRServerlessClient";
import { EMRServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobRunAttempts: (
  config: EMRServerlessPaginationConfiguration,
  input: ListJobRunAttemptsCommandInput,
  ...rest: any[]
) => Paginator<ListJobRunAttemptsCommandOutput> = createPaginator<
  EMRServerlessPaginationConfiguration,
  ListJobRunAttemptsCommandInput,
  ListJobRunAttemptsCommandOutput
>(EMRServerlessClient, ListJobRunAttemptsCommand, "nextToken", "nextToken", "maxResults");
