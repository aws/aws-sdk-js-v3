// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceProfileArtifactsCommand,
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput,
} from "../commands/ListResourceProfileArtifactsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceProfileArtifacts: (
  config: Macie2PaginationConfiguration,
  input: ListResourceProfileArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceProfileArtifactsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput
>(Macie2Client, ListResourceProfileArtifactsCommand, "nextToken", "nextToken", "");
