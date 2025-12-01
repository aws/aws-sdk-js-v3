// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrustAnchorsCommand,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
} from "../commands/ListTrustAnchorsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustAnchors: (
  config: RolesAnywherePaginationConfiguration,
  input: ListTrustAnchorsCommandInput,
  ...rest: any[]
) => Paginator<ListTrustAnchorsCommandOutput> = createPaginator<
  RolesAnywherePaginationConfiguration,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput
>(RolesAnywhereClient, ListTrustAnchorsCommand, "nextToken", "nextToken", "");
