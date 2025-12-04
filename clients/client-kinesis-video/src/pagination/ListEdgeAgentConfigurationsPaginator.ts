// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEdgeAgentConfigurationsCommand,
  ListEdgeAgentConfigurationsCommandInput,
  ListEdgeAgentConfigurationsCommandOutput,
} from "../commands/ListEdgeAgentConfigurationsCommand";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEdgeAgentConfigurations: (
  config: KinesisVideoPaginationConfiguration,
  input: ListEdgeAgentConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListEdgeAgentConfigurationsCommandOutput> = createPaginator<
  KinesisVideoPaginationConfiguration,
  ListEdgeAgentConfigurationsCommandInput,
  ListEdgeAgentConfigurationsCommandOutput
>(KinesisVideoClient, ListEdgeAgentConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
