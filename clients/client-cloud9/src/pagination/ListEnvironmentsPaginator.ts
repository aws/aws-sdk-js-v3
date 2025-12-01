// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { Cloud9Client } from "../Cloud9Client";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { Cloud9PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: Cloud9PaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  Cloud9PaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(Cloud9Client, ListEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
