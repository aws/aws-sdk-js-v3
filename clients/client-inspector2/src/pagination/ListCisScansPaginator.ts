// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCisScansCommand,
  ListCisScansCommandInput,
  ListCisScansCommandOutput,
} from "../commands/ListCisScansCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCisScans: (
  config: Inspector2PaginationConfiguration,
  input: ListCisScansCommandInput,
  ...rest: any[]
) => Paginator<ListCisScansCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCisScansCommandInput,
  ListCisScansCommandOutput
>(Inspector2Client, ListCisScansCommand, "nextToken", "nextToken", "maxResults");
