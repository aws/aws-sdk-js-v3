// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEdgeDeploymentPlansCommand,
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "../commands/ListEdgeDeploymentPlansCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEdgeDeploymentPlans: (
  config: SageMakerPaginationConfiguration,
  input: ListEdgeDeploymentPlansCommandInput,
  ...rest: any[]
) => Paginator<ListEdgeDeploymentPlansCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput
>(SageMakerClient, ListEdgeDeploymentPlansCommand, "NextToken", "NextToken", "MaxResults");
