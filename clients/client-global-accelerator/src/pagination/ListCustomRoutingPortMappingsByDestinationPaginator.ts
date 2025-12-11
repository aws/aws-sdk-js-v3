// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "../commands/ListCustomRoutingPortMappingsByDestinationCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomRoutingPortMappingsByDestination: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingPortMappingsByDestinationCommandInput,
  ...rest: any[]
) => Paginator<ListCustomRoutingPortMappingsByDestinationCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput
>(GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand, "NextToken", "NextToken", "MaxResults");
