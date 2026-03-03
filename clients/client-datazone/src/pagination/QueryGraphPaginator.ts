// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { QueryGraphCommand, QueryGraphCommandInput, QueryGraphCommandOutput } from "../commands/QueryGraphCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryGraph: (
  config: DataZonePaginationConfiguration,
  input: QueryGraphCommandInput,
  ...rest: any[]
) => Paginator<QueryGraphCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  QueryGraphCommandInput,
  QueryGraphCommandOutput
>(DataZoneClient, QueryGraphCommand, "nextToken", "nextToken", "maxResults");
