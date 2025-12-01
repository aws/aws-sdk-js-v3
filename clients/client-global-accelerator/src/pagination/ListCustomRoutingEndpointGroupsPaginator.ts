// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "../commands/ListCustomRoutingEndpointGroupsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomRoutingEndpointGroups: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomRoutingEndpointGroupsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput
>(GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand, "NextToken", "NextToken", "MaxResults");
