// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentClassifierSummariesCommand,
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "../commands/ListDocumentClassifierSummariesCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocumentClassifierSummaries: (
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassifierSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentClassifierSummariesCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput
>(ComprehendClient, ListDocumentClassifierSummariesCommand, "NextToken", "NextToken", "MaxResults");
