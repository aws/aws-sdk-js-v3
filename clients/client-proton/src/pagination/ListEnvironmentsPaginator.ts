// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(ProtonClient, ListEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
