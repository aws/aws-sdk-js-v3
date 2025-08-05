// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListClusterEventsCommand,
  ListClusterEventsCommandInput,
  ListClusterEventsCommandOutput,
} from "../commands/ListClusterEventsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterEvents: (
  config: SageMakerPaginationConfiguration,
  input: ListClusterEventsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterEventsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListClusterEventsCommandInput,
  ListClusterEventsCommandOutput
>(SageMakerClient, ListClusterEventsCommand, "NextToken", "NextToken", "MaxResults");
