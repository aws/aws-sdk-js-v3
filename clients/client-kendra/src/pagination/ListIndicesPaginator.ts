// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndices: (
  config: KendraPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...rest: any[]
) => Paginator<ListIndicesCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListIndicesCommandInput,
  ListIndicesCommandOutput
>(KendraClient, ListIndicesCommand, "NextToken", "NextToken", "MaxResults");
