// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThemes: (
  config: QuickSightPaginationConfiguration,
  input: ListThemesCommandInput,
  ...rest: any[]
) => Paginator<ListThemesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListThemesCommandInput,
  ListThemesCommandOutput
>(QuickSightClient, ListThemesCommand, "NextToken", "NextToken", "MaxResults");
