// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "../commands/ListListenersCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListListeners: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListListenersCommandInput,
  ...rest: any[]
) => Paginator<ListListenersCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListListenersCommandInput,
  ListListenersCommandOutput
>(GlobalAcceleratorClient, ListListenersCommand, "NextToken", "NextToken", "MaxResults");
