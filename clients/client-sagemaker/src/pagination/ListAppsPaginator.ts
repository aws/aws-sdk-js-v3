// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApps: (
  config: SageMakerPaginationConfiguration,
  input: ListAppsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAppsCommandInput,
  ListAppsCommandOutput
>(SageMakerClient, ListAppsCommand, "NextToken", "NextToken", "MaxResults");
