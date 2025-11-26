// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAccountAuthorizationDetails: (
  config: IAMPaginationConfiguration,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetAccountAuthorizationDetailsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput
>(IAMClient, GetAccountAuthorizationDetailsCommand, "Marker", "Marker", "MaxItems");
