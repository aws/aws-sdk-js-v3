// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCurrentUserDataCommand,
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
} from "../commands/GetCurrentUserDataCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCurrentUserData: (
  config: ConnectPaginationConfiguration,
  input: GetCurrentUserDataCommandInput,
  ...rest: any[]
) => Paginator<GetCurrentUserDataCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput
>(ConnectClient, GetCurrentUserDataCommand, "NextToken", "NextToken", "MaxResults");
