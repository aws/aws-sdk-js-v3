// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "../commands/GetDedicatedIpsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDedicatedIps: (
  config: SESv2PaginationConfiguration,
  input: GetDedicatedIpsCommandInput,
  ...rest: any[]
) => Paginator<GetDedicatedIpsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput
>(SESv2Client, GetDedicatedIpsCommand, "NextToken", "NextToken", "PageSize");
