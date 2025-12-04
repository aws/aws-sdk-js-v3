// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplates: (
  config: ConnectCasesPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplatesCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
>(ConnectCasesClient, ListTemplatesCommand, "nextToken", "nextToken", "maxResults");
