// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedEnvironmentsCommand,
  ListAssociatedEnvironmentsCommandInput,
  ListAssociatedEnvironmentsCommandOutput,
} from "../commands/ListAssociatedEnvironmentsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedEnvironments: (
  config: ContinuumPaginationConfiguration,
  input: ListAssociatedEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedEnvironmentsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListAssociatedEnvironmentsCommandInput,
  ListAssociatedEnvironmentsCommandOutput
>(ContinuumClient, ListAssociatedEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
