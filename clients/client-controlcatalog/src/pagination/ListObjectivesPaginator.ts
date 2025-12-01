// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListObjectivesCommand,
  ListObjectivesCommandInput,
  ListObjectivesCommandOutput,
} from "../commands/ListObjectivesCommand";
import { ControlCatalogClient } from "../ControlCatalogClient";
import { ControlCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectives: (
  config: ControlCatalogPaginationConfiguration,
  input: ListObjectivesCommandInput,
  ...rest: any[]
) => Paginator<ListObjectivesCommandOutput> = createPaginator<
  ControlCatalogPaginationConfiguration,
  ListObjectivesCommandInput,
  ListObjectivesCommandOutput
>(ControlCatalogClient, ListObjectivesCommand, "NextToken", "NextToken", "MaxResults");
