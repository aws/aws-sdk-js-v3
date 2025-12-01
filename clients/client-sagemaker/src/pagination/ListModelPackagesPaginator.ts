// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelPackagesCommand,
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput,
} from "../commands/ListModelPackagesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelPackages: (
  config: SageMakerPaginationConfiguration,
  input: ListModelPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListModelPackagesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput
>(SageMakerClient, ListModelPackagesCommand, "NextToken", "NextToken", "MaxResults");
