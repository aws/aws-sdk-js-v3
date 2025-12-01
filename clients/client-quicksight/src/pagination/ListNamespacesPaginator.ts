// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNamespaces: (
  config: QuickSightPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListNamespacesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput
>(QuickSightClient, ListNamespacesCommand, "NextToken", "NextToken", "MaxResults");
