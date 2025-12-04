// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKeyPoliciesCommand,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
} from "../commands/ListKeyPoliciesCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeyPolicies: (
  config: KMSPaginationConfiguration,
  input: ListKeyPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListKeyPoliciesCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput
>(KMSClient, ListKeyPoliciesCommand, "Marker", "NextMarker", "Limit");
