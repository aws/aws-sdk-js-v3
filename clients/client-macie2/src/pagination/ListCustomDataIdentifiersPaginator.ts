// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomDataIdentifiersCommand,
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "../commands/ListCustomDataIdentifiersCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomDataIdentifiers: (
  config: Macie2PaginationConfiguration,
  input: ListCustomDataIdentifiersCommandInput,
  ...rest: any[]
) => Paginator<ListCustomDataIdentifiersCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput
>(Macie2Client, ListCustomDataIdentifiersCommand, "nextToken", "nextToken", "maxResults");
