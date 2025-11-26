// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemas: (
  config: RedshiftDataPaginationConfiguration,
  input: ListSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListSchemasCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
>(RedshiftDataClient, ListSchemasCommand, "NextToken", "NextToken", "MaxResults");
