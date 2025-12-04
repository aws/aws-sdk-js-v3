// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindings: (
  config: Macie2PaginationConfiguration,
  input: ListFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListFindingsCommandInput,
  ListFindingsCommandOutput
>(Macie2Client, ListFindingsCommand, "nextToken", "nextToken", "maxResults");
