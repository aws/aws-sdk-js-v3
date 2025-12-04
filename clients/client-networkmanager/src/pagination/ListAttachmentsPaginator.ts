// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachmentsCommand,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput,
} from "../commands/ListAttachmentsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachments: (
  config: NetworkManagerPaginationConfiguration,
  input: ListAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachmentsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput
>(NetworkManagerClient, ListAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
