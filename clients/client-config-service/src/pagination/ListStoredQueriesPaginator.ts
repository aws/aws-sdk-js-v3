// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStoredQueriesCommand,
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
} from "../commands/ListStoredQueriesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStoredQueries: (
  config: ConfigServicePaginationConfiguration,
  input: ListStoredQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListStoredQueriesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput
>(ConfigServiceClient, ListStoredQueriesCommand, "NextToken", "NextToken", "MaxResults");
