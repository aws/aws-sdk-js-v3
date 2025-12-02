// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMlflowAppsCommand,
  ListMlflowAppsCommandInput,
  ListMlflowAppsCommandOutput,
} from "../commands/ListMlflowAppsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMlflowApps: (
  config: SageMakerPaginationConfiguration,
  input: ListMlflowAppsCommandInput,
  ...rest: any[]
) => Paginator<ListMlflowAppsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMlflowAppsCommandInput,
  ListMlflowAppsCommandOutput
>(SageMakerClient, ListMlflowAppsCommand, "NextToken", "NextToken", "MaxResults");
