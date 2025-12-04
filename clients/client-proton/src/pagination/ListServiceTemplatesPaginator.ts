// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceTemplatesCommand,
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "../commands/ListServiceTemplatesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceTemplates: (
  config: ProtonPaginationConfiguration,
  input: ListServiceTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceTemplatesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput
>(ProtonClient, ListServiceTemplatesCommand, "nextToken", "nextToken", "maxResults");
