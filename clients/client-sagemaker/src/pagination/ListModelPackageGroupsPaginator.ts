// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelPackageGroupsCommand,
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "../commands/ListModelPackageGroupsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelPackageGroups: (
  config: SageMakerPaginationConfiguration,
  input: ListModelPackageGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListModelPackageGroupsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput
>(SageMakerClient, ListModelPackageGroupsCommand, "NextToken", "NextToken", "MaxResults");
