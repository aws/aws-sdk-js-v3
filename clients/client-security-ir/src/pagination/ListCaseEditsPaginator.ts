// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCaseEditsCommand,
  ListCaseEditsCommandInput,
  ListCaseEditsCommandOutput,
} from "../commands/ListCaseEditsCommand";
import { SecurityIRClient } from "../SecurityIRClient";
import { SecurityIRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCaseEdits: (
  config: SecurityIRPaginationConfiguration,
  input: ListCaseEditsCommandInput,
  ...rest: any[]
) => Paginator<ListCaseEditsCommandOutput> = createPaginator<
  SecurityIRPaginationConfiguration,
  ListCaseEditsCommandInput,
  ListCaseEditsCommandOutput
>(SecurityIRClient, ListCaseEditsCommand, "nextToken", "nextToken", "maxResults");
