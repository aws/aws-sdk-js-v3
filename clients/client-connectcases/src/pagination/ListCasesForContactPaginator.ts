// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCasesForContactCommand,
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput,
} from "../commands/ListCasesForContactCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCasesForContact: (
  config: ConnectCasesPaginationConfiguration,
  input: ListCasesForContactCommandInput,
  ...rest: any[]
) => Paginator<ListCasesForContactCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput
>(ConnectCasesClient, ListCasesForContactCommand, "nextToken", "nextToken", "maxResults");
