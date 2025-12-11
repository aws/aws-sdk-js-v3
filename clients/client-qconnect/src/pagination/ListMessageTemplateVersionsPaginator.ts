// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMessageTemplateVersionsCommand,
  ListMessageTemplateVersionsCommandInput,
  ListMessageTemplateVersionsCommandOutput,
} from "../commands/ListMessageTemplateVersionsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMessageTemplateVersions: (
  config: QConnectPaginationConfiguration,
  input: ListMessageTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListMessageTemplateVersionsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListMessageTemplateVersionsCommandInput,
  ListMessageTemplateVersionsCommandOutput
>(QConnectClient, ListMessageTemplateVersionsCommand, "nextToken", "nextToken", "maxResults");
