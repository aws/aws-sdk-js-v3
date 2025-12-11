// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClassificationScopesCommand,
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput,
} from "../commands/ListClassificationScopesCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClassificationScopes: (
  config: Macie2PaginationConfiguration,
  input: ListClassificationScopesCommandInput,
  ...rest: any[]
) => Paginator<ListClassificationScopesCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput
>(Macie2Client, ListClassificationScopesCommand, "nextToken", "nextToken", "");
