// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemas: (
  config: SchemasPaginationConfiguration,
  input: ListSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListSchemasCommandOutput> = createPaginator<
  SchemasPaginationConfiguration,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
>(SchemasClient, ListSchemasCommand, "NextToken", "NextToken", "Limit");
