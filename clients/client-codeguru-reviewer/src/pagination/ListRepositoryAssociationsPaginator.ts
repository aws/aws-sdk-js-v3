// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "../commands/ListRepositoryAssociationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositoryAssociations: (
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRepositoryAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoryAssociationsCommandOutput> = createPaginator<
  CodeGuruReviewerPaginationConfiguration,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput
>(CodeGuruReviewerClient, ListRepositoryAssociationsCommand, "NextToken", "NextToken", "MaxResults");
