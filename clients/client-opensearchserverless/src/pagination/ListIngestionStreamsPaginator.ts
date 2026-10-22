// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIngestionStreamsCommand,
  ListIngestionStreamsCommandInput,
  ListIngestionStreamsCommandOutput,
} from "../commands/ListIngestionStreamsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import type { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngestionStreams: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListIngestionStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListIngestionStreamsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListIngestionStreamsCommandInput,
  ListIngestionStreamsCommandOutput
>(OpenSearchServerlessClient, ListIngestionStreamsCommand, "nextToken", "nextToken", "");
