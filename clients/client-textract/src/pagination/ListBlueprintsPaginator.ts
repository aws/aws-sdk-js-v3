// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBlueprintsCommand,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput,
} from "../commands/ListBlueprintsCommand";
import { TextractClient } from "../TextractClient";
import type { TextractPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBlueprints: (
  config: TextractPaginationConfiguration,
  input: ListBlueprintsCommandInput,
  ...rest: any[]
) => Paginator<ListBlueprintsCommandOutput> = createPaginator<
  TextractPaginationConfiguration,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput
>(TextractClient, ListBlueprintsCommand, "NextToken", "NextToken", "MaxResults");
