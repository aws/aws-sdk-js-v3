// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "../commands/ListProgressUpdateStreamsCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProgressUpdateStreams: (
  config: MigrationHubPaginationConfiguration,
  input: ListProgressUpdateStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListProgressUpdateStreamsCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput
>(MigrationHubClient, ListProgressUpdateStreamsCommand, "NextToken", "NextToken", "MaxResults");
