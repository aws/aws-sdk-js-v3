// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListInvestigationsCommand,
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput,
} from "../commands/ListInvestigationsCommand";
import { SecurityIRClient } from "../SecurityIRClient";
import { SecurityIRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvestigations: (
  config: SecurityIRPaginationConfiguration,
  input: ListInvestigationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvestigationsCommandOutput> = createPaginator<
  SecurityIRPaginationConfiguration,
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput
>(SecurityIRClient, ListInvestigationsCommand, "nextToken", "nextToken", "maxResults");
