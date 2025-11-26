// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachmentsCommand,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput,
} from "../commands/ListAttachmentsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachments: (
  config: QBusinessPaginationConfiguration,
  input: ListAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachmentsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput
>(QBusinessClient, ListAttachmentsCommand, "nextToken", "nextToken", "maxResults");
