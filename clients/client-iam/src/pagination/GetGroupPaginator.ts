// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetGroup: (
  config: IAMPaginationConfiguration,
  input: GetGroupCommandInput,
  ...rest: any[]
) => Paginator<GetGroupCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  GetGroupCommandInput,
  GetGroupCommandOutput
>(IAMClient, GetGroupCommand, "Marker", "Marker", "MaxItems");
