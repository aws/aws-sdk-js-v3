// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargets: (
  config: VPCLatticePaginationConfiguration,
  input: ListTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListTargetsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListTargetsCommandInput,
  ListTargetsCommandOutput
>(VPCLatticeClient, ListTargetsCommand, "nextToken", "nextToken", "maxResults");
