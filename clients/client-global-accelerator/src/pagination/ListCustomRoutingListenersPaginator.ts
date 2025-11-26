// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomRoutingListenersCommand,
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "../commands/ListCustomRoutingListenersCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomRoutingListeners: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingListenersCommandInput,
  ...rest: any[]
) => Paginator<ListCustomRoutingListenersCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput
>(GlobalAcceleratorClient, ListCustomRoutingListenersCommand, "NextToken", "NextToken", "MaxResults");
