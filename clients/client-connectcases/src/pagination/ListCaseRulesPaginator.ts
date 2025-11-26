// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCaseRulesCommand,
  ListCaseRulesCommandInput,
  ListCaseRulesCommandOutput,
} from "../commands/ListCaseRulesCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCaseRules: (
  config: ConnectCasesPaginationConfiguration,
  input: ListCaseRulesCommandInput,
  ...rest: any[]
) => Paginator<ListCaseRulesCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  ListCaseRulesCommandInput,
  ListCaseRulesCommandOutput
>(ConnectCasesClient, ListCaseRulesCommand, "nextToken", "nextToken", "maxResults");
