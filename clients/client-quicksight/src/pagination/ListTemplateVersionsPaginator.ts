// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateVersions: (
  config: QuickSightPaginationConfiguration,
  input: ListTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateVersionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput
>(QuickSightClient, ListTemplateVersionsCommand, "NextToken", "NextToken", "MaxResults");
