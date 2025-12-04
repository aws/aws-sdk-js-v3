// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommentsCommand,
  ListCommentsCommandInput,
  ListCommentsCommandOutput,
} from "../commands/ListCommentsCommand";
import { SecurityIRClient } from "../SecurityIRClient";
import { SecurityIRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComments: (
  config: SecurityIRPaginationConfiguration,
  input: ListCommentsCommandInput,
  ...rest: any[]
) => Paginator<ListCommentsCommandOutput> = createPaginator<
  SecurityIRPaginationConfiguration,
  ListCommentsCommandInput,
  ListCommentsCommandOutput
>(SecurityIRClient, ListCommentsCommand, "nextToken", "nextToken", "maxResults");
