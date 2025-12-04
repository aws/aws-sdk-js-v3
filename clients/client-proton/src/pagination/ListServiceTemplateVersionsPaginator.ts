// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "../commands/ListServiceTemplateVersionsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceTemplateVersions: (
  config: ProtonPaginationConfiguration,
  input: ListServiceTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceTemplateVersionsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput
>(ProtonClient, ListServiceTemplateVersionsCommand, "nextToken", "nextToken", "maxResults");
