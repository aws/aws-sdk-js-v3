// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentTemplateVersionsCommand,
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "../commands/ListEnvironmentTemplateVersionsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentTemplateVersions: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentTemplateVersionsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput
>(ProtonClient, ListEnvironmentTemplateVersionsCommand, "nextToken", "nextToken", "maxResults");
