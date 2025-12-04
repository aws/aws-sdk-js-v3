// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "../commands/ListCreatedArtifactsCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCreatedArtifacts: (
  config: MigrationHubPaginationConfiguration,
  input: ListCreatedArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListCreatedArtifactsCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput
>(MigrationHubClient, ListCreatedArtifactsCommand, "NextToken", "NextToken", "MaxResults");
