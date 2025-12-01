// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCisScanResultDetailsCommand,
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput,
} from "../commands/GetCisScanResultDetailsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCisScanResultDetails: (
  config: Inspector2PaginationConfiguration,
  input: GetCisScanResultDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetCisScanResultDetailsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput
>(Inspector2Client, GetCisScanResultDetailsCommand, "nextToken", "nextToken", "maxResults");
