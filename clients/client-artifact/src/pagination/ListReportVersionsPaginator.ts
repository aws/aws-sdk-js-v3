// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ArtifactClient } from "../ArtifactClient";
import {
  ListReportVersionsCommand,
  ListReportVersionsCommandInput,
  ListReportVersionsCommandOutput,
} from "../commands/ListReportVersionsCommand";
import { ArtifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportVersions: (
  config: ArtifactPaginationConfiguration,
  input: ListReportVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListReportVersionsCommandOutput> = createPaginator<
  ArtifactPaginationConfiguration,
  ListReportVersionsCommandInput,
  ListReportVersionsCommandOutput
>(ArtifactClient, ListReportVersionsCommand, "nextToken", "nextToken", "maxResults");
