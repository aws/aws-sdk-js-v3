// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetGroupsCommand,
  ListTargetGroupsCommandInput,
  ListTargetGroupsCommandOutput,
} from "../commands/ListTargetGroupsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetGroups: (
  config: VPCLatticePaginationConfiguration,
  input: ListTargetGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListTargetGroupsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListTargetGroupsCommandInput,
  ListTargetGroupsCommandOutput
>(VPCLatticeClient, ListTargetGroupsCommand, "nextToken", "nextToken", "maxResults");
