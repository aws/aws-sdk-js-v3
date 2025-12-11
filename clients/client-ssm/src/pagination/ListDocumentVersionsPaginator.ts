// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentVersionsCommand,
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "../commands/ListDocumentVersionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocumentVersions: (
  config: SSMPaginationConfiguration,
  input: ListDocumentVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentVersionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput
>(SSMClient, ListDocumentVersionsCommand, "NextToken", "NextToken", "MaxResults");
