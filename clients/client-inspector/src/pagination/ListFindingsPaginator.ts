// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindings: (
  config: InspectorPaginationConfiguration,
  input: ListFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListFindingsCommandInput,
  ListFindingsCommandOutput
>(InspectorClient, ListFindingsCommand, "nextToken", "nextToken", "maxResults");
