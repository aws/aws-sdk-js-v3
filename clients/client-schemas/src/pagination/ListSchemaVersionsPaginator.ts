// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "../commands/ListSchemaVersionsCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemaVersions: (
  config: SchemasPaginationConfiguration,
  input: ListSchemaVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListSchemaVersionsCommandOutput> = createPaginator<
  SchemasPaginationConfiguration,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput
>(SchemasClient, ListSchemaVersionsCommand, "NextToken", "NextToken", "Limit");
