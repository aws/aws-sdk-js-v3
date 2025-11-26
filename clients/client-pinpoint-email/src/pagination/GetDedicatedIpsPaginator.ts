// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "../commands/GetDedicatedIpsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDedicatedIps: (
  config: PinpointEmailPaginationConfiguration,
  input: GetDedicatedIpsCommandInput,
  ...rest: any[]
) => Paginator<GetDedicatedIpsCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput
>(PinpointEmailClient, GetDedicatedIpsCommand, "NextToken", "NextToken", "PageSize");
