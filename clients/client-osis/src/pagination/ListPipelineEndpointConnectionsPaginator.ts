// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineEndpointConnectionsCommand,
  ListPipelineEndpointConnectionsCommandInput,
  ListPipelineEndpointConnectionsCommandOutput,
} from "../commands/ListPipelineEndpointConnectionsCommand";
import { OSISClient } from "../OSISClient";
import { OSISPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineEndpointConnections: (
  config: OSISPaginationConfiguration,
  input: ListPipelineEndpointConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineEndpointConnectionsCommandOutput> = createPaginator<
  OSISPaginationConfiguration,
  ListPipelineEndpointConnectionsCommandInput,
  ListPipelineEndpointConnectionsCommandOutput
>(OSISClient, ListPipelineEndpointConnectionsCommand, "NextToken", "NextToken", "MaxResults");
