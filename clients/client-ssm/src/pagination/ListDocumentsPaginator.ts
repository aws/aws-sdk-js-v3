// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "../commands/ListDocumentsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocuments: (
  config: SSMPaginationConfiguration,
  input: ListDocumentsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput
>(SSMClient, ListDocumentsCommand, "NextToken", "NextToken", "MaxResults");
