// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceAdmins: (
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceAdminsCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceAdminsCommandOutput> = createPaginator<
  ChimeSDKIdentityPaginationConfiguration,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput
>(ChimeSDKIdentityClient, ListAppInstanceAdminsCommand, "NextToken", "NextToken", "MaxResults");
