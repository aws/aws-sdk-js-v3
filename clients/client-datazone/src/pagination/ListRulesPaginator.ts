// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRules: (
  config: DataZonePaginationConfiguration,
  input: ListRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListRulesCommandInput,
  ListRulesCommandOutput
>(DataZoneClient, ListRulesCommand, "nextToken", "nextToken", "maxResults");
