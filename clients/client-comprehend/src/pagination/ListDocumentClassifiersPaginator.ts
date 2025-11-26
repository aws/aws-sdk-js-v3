// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDocumentClassifiersCommand,
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "../commands/ListDocumentClassifiersCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDocumentClassifiers: (
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassifiersCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentClassifiersCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput
>(ComprehendClient, ListDocumentClassifiersCommand, "NextToken", "NextToken", "MaxResults");
