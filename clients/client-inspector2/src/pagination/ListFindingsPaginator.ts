// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindings: (
  config: Inspector2PaginationConfiguration,
  input: ListFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListFindingsCommandInput,
  ListFindingsCommandOutput
>(Inspector2Client, ListFindingsCommand, "nextToken", "nextToken", "maxResults");
