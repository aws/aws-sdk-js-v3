// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemas: (
  config: PersonalizePaginationConfiguration,
  input: ListSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListSchemasCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
>(PersonalizeClient, ListSchemasCommand, "nextToken", "nextToken", "maxResults");
