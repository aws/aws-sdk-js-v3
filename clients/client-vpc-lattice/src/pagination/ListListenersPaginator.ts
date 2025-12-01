// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "../commands/ListListenersCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListListeners: (
  config: VPCLatticePaginationConfiguration,
  input: ListListenersCommandInput,
  ...rest: any[]
) => Paginator<ListListenersCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListListenersCommandInput,
  ListListenersCommandOutput
>(VPCLatticeClient, ListListenersCommand, "nextToken", "nextToken", "maxResults");
