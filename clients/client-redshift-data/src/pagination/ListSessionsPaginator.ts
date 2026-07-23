// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import type { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: RedshiftDataPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(RedshiftDataClient, ListSessionsCommand, "NextToken", "NextToken", "MaxResults");
