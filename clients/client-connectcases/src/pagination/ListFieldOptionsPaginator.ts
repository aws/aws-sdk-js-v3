// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFieldOptionsCommand,
  ListFieldOptionsCommandInput,
  ListFieldOptionsCommandOutput,
} from "../commands/ListFieldOptionsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFieldOptions: (
  config: ConnectCasesPaginationConfiguration,
  input: ListFieldOptionsCommandInput,
  ...rest: any[]
) => Paginator<ListFieldOptionsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListFieldOptionsCommandInput,
  ListFieldOptionsCommandOutput
>(ConnectCasesClient, ListFieldOptionsCommand, "nextToken", "nextToken", "maxResults");
