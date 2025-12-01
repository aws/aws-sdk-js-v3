// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: SageMakerPaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(SageMakerClient, ListTagsCommand, "NextToken", "NextToken", "MaxResults");
