// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemas: (
  config: GluePaginationConfiguration,
  input: ListSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListSchemasCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
>(GlueClient, ListSchemasCommand, "NextToken", "NextToken", "MaxResults");
