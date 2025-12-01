// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "../commands/ListDocumentsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocuments: (
  config: QBusinessPaginationConfiguration,
  input: ListDocumentsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput
>(QBusinessClient, ListDocumentsCommand, "nextToken", "nextToken", "maxResults");
