// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeFindingsCommand,
  ListCodeFindingsCommandInput,
  ListCodeFindingsCommandOutput,
} from "../commands/ListCodeFindingsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeFindings: (
  config: ContinuumPaginationConfiguration,
  input: ListCodeFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListCodeFindingsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListCodeFindingsCommandInput,
  ListCodeFindingsCommandOutput
>(ContinuumClient, ListCodeFindingsCommand, "nextToken", "nextToken", "maxResults");
