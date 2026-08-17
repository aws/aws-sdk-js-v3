// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExtractionDefinitionsCommand,
  ListExtractionDefinitionsCommandInput,
  ListExtractionDefinitionsCommandOutput,
} from "../commands/ListExtractionDefinitionsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExtractionDefinitions: (
  config: ConnectPaginationConfiguration,
  input: ListExtractionDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListExtractionDefinitionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListExtractionDefinitionsCommandInput,
  ListExtractionDefinitionsCommandOutput
>(ConnectClient, ListExtractionDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
