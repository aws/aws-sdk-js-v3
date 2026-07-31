// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingClient } from "../BillingClient";
import {
  ListEnterpriseSupportLinkedAccountChargesCommand,
  ListEnterpriseSupportLinkedAccountChargesCommandInput,
  ListEnterpriseSupportLinkedAccountChargesCommandOutput,
} from "../commands/ListEnterpriseSupportLinkedAccountChargesCommand";
import type { BillingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnterpriseSupportLinkedAccountCharges: (
  config: BillingPaginationConfiguration,
  input: ListEnterpriseSupportLinkedAccountChargesCommandInput,
  ...rest: any[]
) => Paginator<ListEnterpriseSupportLinkedAccountChargesCommandOutput> = createPaginator<
  BillingPaginationConfiguration,
  ListEnterpriseSupportLinkedAccountChargesCommandInput,
  ListEnterpriseSupportLinkedAccountChargesCommandOutput
>(BillingClient, ListEnterpriseSupportLinkedAccountChargesCommand, "nextToken", "nextToken", "maxResults");
