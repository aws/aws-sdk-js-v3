// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBlueprintsCommand,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput,
} from "../commands/ListBlueprintsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBlueprints: (
  config: GluePaginationConfiguration,
  input: ListBlueprintsCommandInput,
  ...rest: any[]
) => Paginator<ListBlueprintsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput
>(GlueClient, ListBlueprintsCommand, "NextToken", "NextToken", "MaxResults");
