// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "../commands/ListSchemaVersionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemaVersions: (
  config: GluePaginationConfiguration,
  input: ListSchemaVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListSchemaVersionsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput
>(GlueClient, ListSchemaVersionsCommand, "NextToken", "NextToken", "MaxResults");
