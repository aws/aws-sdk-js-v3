// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: M2PaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(M2Client, ListEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
