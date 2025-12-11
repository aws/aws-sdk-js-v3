// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDiscoverersCommand,
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput,
} from "../commands/ListDiscoverersCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoverers: (
  config: SchemasPaginationConfiguration,
  input: ListDiscoverersCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoverersCommandOutput> = createPaginator<
  SchemasPaginationConfiguration,
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput
>(SchemasClient, ListDiscoverersCommand, "NextToken", "NextToken", "Limit");
