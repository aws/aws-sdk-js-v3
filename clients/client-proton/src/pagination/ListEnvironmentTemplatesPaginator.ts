// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "../commands/ListEnvironmentTemplatesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentTemplates: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentTemplatesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput
>(ProtonClient, ListEnvironmentTemplatesCommand, "nextToken", "nextToken", "maxResults");
