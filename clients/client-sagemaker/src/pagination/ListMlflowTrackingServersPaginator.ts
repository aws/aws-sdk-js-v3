// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMlflowTrackingServersCommand,
  ListMlflowTrackingServersCommandInput,
  ListMlflowTrackingServersCommandOutput,
} from "../commands/ListMlflowTrackingServersCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMlflowTrackingServers: (
  config: SageMakerPaginationConfiguration,
  input: ListMlflowTrackingServersCommandInput,
  ...rest: any[]
) => Paginator<ListMlflowTrackingServersCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMlflowTrackingServersCommandInput,
  ListMlflowTrackingServersCommandOutput
>(SageMakerClient, ListMlflowTrackingServersCommand, "NextToken", "NextToken", "MaxResults");
