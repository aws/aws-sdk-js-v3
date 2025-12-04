// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntityRecognizerSummariesCommand,
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "../commands/ListEntityRecognizerSummariesCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityRecognizerSummaries: (
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizerSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListEntityRecognizerSummariesCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput
>(ComprehendClient, ListEntityRecognizerSummariesCommand, "NextToken", "NextToken", "MaxResults");
