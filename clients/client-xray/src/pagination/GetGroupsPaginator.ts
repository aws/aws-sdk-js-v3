// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetGroupsCommand, GetGroupsCommandInput, GetGroupsCommandOutput } from "../commands/GetGroupsCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetGroups: (
  config: XRayPaginationConfiguration,
  input: GetGroupsCommandInput,
  ...rest: any[]
) => Paginator<GetGroupsCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetGroupsCommandInput,
  GetGroupsCommandOutput
>(XRayClient, GetGroupsCommand, "NextToken", "NextToken", "");
