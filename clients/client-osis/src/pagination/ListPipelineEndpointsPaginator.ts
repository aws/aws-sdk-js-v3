// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelineEndpointsCommand,
  ListPipelineEndpointsCommandInput,
  ListPipelineEndpointsCommandOutput,
} from "../commands/ListPipelineEndpointsCommand";
import { OSISClient } from "../OSISClient";
import { OSISPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelineEndpoints: (
  config: OSISPaginationConfiguration,
  input: ListPipelineEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListPipelineEndpointsCommandOutput> = createPaginator<
  OSISPaginationConfiguration,
  ListPipelineEndpointsCommandInput,
  ListPipelineEndpointsCommandOutput
>(OSISClient, ListPipelineEndpointsCommand, "NextToken", "NextToken", "MaxResults");
