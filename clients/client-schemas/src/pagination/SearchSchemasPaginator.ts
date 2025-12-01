// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSchemasCommand,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
} from "../commands/SearchSchemasCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSchemas: (
  config: SchemasPaginationConfiguration,
  input: SearchSchemasCommandInput,
  ...rest: any[]
) => Paginator<SearchSchemasCommandOutput> = createPaginator<
  SchemasPaginationConfiguration,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput
>(SchemasClient, SearchSchemasCommand, "NextToken", "NextToken", "Limit");
