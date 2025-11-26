// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFieldsCommand, ListFieldsCommandInput, ListFieldsCommandOutput } from "../commands/ListFieldsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFields: (
  config: ConnectCasesPaginationConfiguration,
  input: ListFieldsCommandInput,
  ...rest: any[]
) => Paginator<ListFieldsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListFieldsCommandInput,
  ListFieldsCommandOutput
>(ConnectCasesClient, ListFieldsCommand, "nextToken", "nextToken", "maxResults");
