// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateAliasesCommand,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "../commands/ListTemplateAliasesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateAliases: (
  config: QuickSightPaginationConfiguration,
  input: ListTemplateAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateAliasesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput
>(QuickSightClient, ListTemplateAliasesCommand, "NextToken", "NextToken", "MaxResults");
