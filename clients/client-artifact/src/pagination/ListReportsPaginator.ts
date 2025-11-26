// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ArtifactClient } from "../ArtifactClient";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import { ArtifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReports: (
  config: ArtifactPaginationConfiguration,
  input: ListReportsCommandInput,
  ...rest: any[]
) => Paginator<ListReportsCommandOutput> = createPaginator<
  ArtifactPaginationConfiguration,
  ListReportsCommandInput,
  ListReportsCommandOutput
>(ArtifactClient, ListReportsCommand, "nextToken", "nextToken", "maxResults");
