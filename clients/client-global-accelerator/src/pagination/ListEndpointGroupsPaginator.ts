// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
} from "../commands/ListEndpointGroupsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpointGroups: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListEndpointGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointGroupsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput
>(GlobalAcceleratorClient, ListEndpointGroupsCommand, "NextToken", "NextToken", "MaxResults");
