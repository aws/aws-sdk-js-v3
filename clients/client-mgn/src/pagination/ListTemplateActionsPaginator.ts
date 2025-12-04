// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateActionsCommand,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "../commands/ListTemplateActionsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateActions: (
  config: MgnPaginationConfiguration,
  input: ListTemplateActionsCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateActionsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput
>(MgnClient, ListTemplateActionsCommand, "nextToken", "nextToken", "maxResults");
