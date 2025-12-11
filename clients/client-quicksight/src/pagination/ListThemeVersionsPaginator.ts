// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThemeVersionsCommand,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "../commands/ListThemeVersionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThemeVersions: (
  config: QuickSightPaginationConfiguration,
  input: ListThemeVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListThemeVersionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput
>(QuickSightClient, ListThemeVersionsCommand, "NextToken", "NextToken", "MaxResults");
