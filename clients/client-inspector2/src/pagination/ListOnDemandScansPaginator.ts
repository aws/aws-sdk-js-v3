// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOnDemandScansCommand,
  ListOnDemandScansCommandInput,
  ListOnDemandScansCommandOutput,
} from "../commands/ListOnDemandScansCommand";
import { Inspector2Client } from "../Inspector2Client";
import type { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOnDemandScans: (
  config: Inspector2PaginationConfiguration,
  input: ListOnDemandScansCommandInput,
  ...rest: any[]
) => Paginator<ListOnDemandScansCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListOnDemandScansCommandInput,
  ListOnDemandScansCommandOutput
>(Inspector2Client, ListOnDemandScansCommand, "nextToken", "nextToken", "maxResults");
