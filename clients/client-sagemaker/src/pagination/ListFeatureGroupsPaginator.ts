// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFeatureGroupsCommand,
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput,
} from "../commands/ListFeatureGroupsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFeatureGroups: (
  config: SageMakerPaginationConfiguration,
  input: ListFeatureGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListFeatureGroupsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput
>(SageMakerClient, ListFeatureGroupsCommand, "NextToken", "NextToken", "MaxResults");
