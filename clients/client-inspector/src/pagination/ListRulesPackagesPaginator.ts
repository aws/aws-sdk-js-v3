// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "../commands/ListRulesPackagesCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRulesPackages: (
  config: InspectorPaginationConfiguration,
  input: ListRulesPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListRulesPackagesCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput
>(InspectorClient, ListRulesPackagesCommand, "nextToken", "nextToken", "maxResults");
