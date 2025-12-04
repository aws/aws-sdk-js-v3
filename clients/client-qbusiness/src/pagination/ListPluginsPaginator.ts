// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPluginsCommand, ListPluginsCommandInput, ListPluginsCommandOutput } from "../commands/ListPluginsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlugins: (
  config: QBusinessPaginationConfiguration,
  input: ListPluginsCommandInput,
  ...rest: any[]
) => Paginator<ListPluginsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListPluginsCommandInput,
  ListPluginsCommandOutput
>(QBusinessClient, ListPluginsCommand, "nextToken", "nextToken", "maxResults");
