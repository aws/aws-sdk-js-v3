// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchemaMappingsCommand,
  ListSchemaMappingsCommandInput,
  ListSchemaMappingsCommandOutput,
} from "../commands/ListSchemaMappingsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemaMappings: (
  config: EntityResolutionPaginationConfiguration,
  input: ListSchemaMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListSchemaMappingsCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListSchemaMappingsCommandInput,
  ListSchemaMappingsCommandOutput
>(EntityResolutionClient, ListSchemaMappingsCommand, "nextToken", "nextToken", "maxResults");
