// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListNamedQueriesCommand,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
} from "../commands/ListNamedQueriesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNamedQueries: (
  config: AthenaPaginationConfiguration,
  input: ListNamedQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListNamedQueriesCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput
>(AthenaClient, ListNamedQueriesCommand, "NextToken", "NextToken", "MaxResults");
