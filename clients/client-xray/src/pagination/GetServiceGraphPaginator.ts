// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetServiceGraphCommand,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
} from "../commands/GetServiceGraphCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetServiceGraph: (
  config: XRayPaginationConfiguration,
  input: GetServiceGraphCommandInput,
  ...rest: any[]
) => Paginator<GetServiceGraphCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput
>(XRayClient, GetServiceGraphCommand, "NextToken", "NextToken", "");
