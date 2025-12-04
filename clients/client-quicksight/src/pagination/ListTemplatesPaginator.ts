// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplates: (
  config: QuickSightPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplatesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
>(QuickSightClient, ListTemplatesCommand, "NextToken", "NextToken", "MaxResults");
