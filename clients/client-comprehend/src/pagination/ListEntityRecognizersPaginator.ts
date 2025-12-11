// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntityRecognizersCommand,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "../commands/ListEntityRecognizersCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityRecognizers: (
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizersCommandInput,
  ...rest: any[]
) => Paginator<ListEntityRecognizersCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput
>(ComprehendClient, ListEntityRecognizersCommand, "NextToken", "NextToken", "MaxResults");
