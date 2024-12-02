// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListCasesCommand, ListCasesCommandInput, ListCasesCommandOutput } from "../commands/ListCasesCommand";
import { SecurityIRClient } from "../SecurityIRClient";
import { SecurityIRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCases: (
  config: SecurityIRPaginationConfiguration,
  input: ListCasesCommandInput,
  ...rest: any[]
) => Paginator<ListCasesCommandOutput> = createPaginator<
  SecurityIRPaginationConfiguration,
  ListCasesCommandInput,
  ListCasesCommandOutput
>(SecurityIRClient, ListCasesCommand, "nextToken", "nextToken", "maxResults");
