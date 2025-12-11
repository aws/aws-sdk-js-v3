// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "../commands/ListCoverageCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoverage: (
  config: Inspector2PaginationConfiguration,
  input: ListCoverageCommandInput,
  ...rest: any[]
) => Paginator<ListCoverageCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCoverageCommandInput,
  ListCoverageCommandOutput
>(Inspector2Client, ListCoverageCommand, "nextToken", "nextToken", "maxResults");
