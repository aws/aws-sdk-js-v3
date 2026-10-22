// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: ContinuumPaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(ContinuumClient, ListEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
