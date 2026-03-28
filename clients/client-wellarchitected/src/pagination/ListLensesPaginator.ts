// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLensesCommand, ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLenses: (
  config: WellArchitectedPaginationConfiguration,
  input: ListLensesCommandInput,
  ...rest: any[]
) => Paginator<ListLensesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListLensesCommandInput,
  ListLensesCommandOutput
>(WellArchitectedClient, ListLensesCommand, "NextToken", "NextToken", "MaxResults");
