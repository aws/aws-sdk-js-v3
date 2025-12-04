// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "../commands/ListCustomRoutingPortMappingsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomRoutingPortMappings: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingPortMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomRoutingPortMappingsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput
>(GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand, "NextToken", "NextToken", "MaxResults");
