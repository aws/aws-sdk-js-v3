// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedDataIdentifiersCommand,
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "../commands/ListManagedDataIdentifiersCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedDataIdentifiers: (
  config: Macie2PaginationConfiguration,
  input: ListManagedDataIdentifiersCommandInput,
  ...rest: any[]
) => Paginator<ListManagedDataIdentifiersCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput
>(Macie2Client, ListManagedDataIdentifiersCommand, "nextToken", "nextToken", "");
