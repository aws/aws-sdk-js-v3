// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "../commands/ListCustomRoutingAcceleratorsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomRoutingAccelerators: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingAcceleratorsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomRoutingAcceleratorsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput
>(GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand, "NextToken", "NextToken", "MaxResults");
