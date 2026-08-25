// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRequestAuthorizationDetailsCommand,
  GetRequestAuthorizationDetailsCommandInput,
  GetRequestAuthorizationDetailsCommandOutput,
} from "../commands/GetRequestAuthorizationDetailsCommand";
import { IAMToolboxClient } from "../IAMToolboxClient";
import type { IAMToolboxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRequestAuthorizationDetails: (
  config: IAMToolboxPaginationConfiguration,
  input: GetRequestAuthorizationDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetRequestAuthorizationDetailsCommandOutput> = createPaginator<
  IAMToolboxPaginationConfiguration,
  GetRequestAuthorizationDetailsCommandInput,
  GetRequestAuthorizationDetailsCommandOutput
>(IAMToolboxClient, GetRequestAuthorizationDetailsCommand, "nextToken", "nextToken", "");
