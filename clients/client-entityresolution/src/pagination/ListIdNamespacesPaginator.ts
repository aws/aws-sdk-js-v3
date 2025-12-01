// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdNamespacesCommand,
  ListIdNamespacesCommandInput,
  ListIdNamespacesCommandOutput,
} from "../commands/ListIdNamespacesCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdNamespaces: (
  config: EntityResolutionPaginationConfiguration,
  input: ListIdNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListIdNamespacesCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListIdNamespacesCommandInput,
  ListIdNamespacesCommandOutput
>(EntityResolutionClient, ListIdNamespacesCommand, "nextToken", "nextToken", "maxResults");
