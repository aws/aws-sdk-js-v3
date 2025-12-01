// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLineageGroupsCommand,
  ListLineageGroupsCommandInput,
  ListLineageGroupsCommandOutput,
} from "../commands/ListLineageGroupsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLineageGroups: (
  config: SageMakerPaginationConfiguration,
  input: ListLineageGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListLineageGroupsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListLineageGroupsCommandInput,
  ListLineageGroupsCommandOutput
>(SageMakerClient, ListLineageGroupsCommand, "NextToken", "NextToken", "MaxResults");
