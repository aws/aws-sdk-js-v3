// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetEntitlementsCommandInput,
  type GetEntitlementsCommandOutput,
  GetEntitlementsCommand,
} from "./commands/GetEntitlementsCommand";
import { MarketplaceEntitlementServiceClient } from "./MarketplaceEntitlementServiceClient";
import { paginateGetEntitlements } from "./pagination/GetEntitlementsPaginator";

const commands = {
  GetEntitlementsCommand,
};
const paginators = {
  paginateGetEntitlements,
};

/**
 * @public
 */
export interface MarketplaceEntitlementServiceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MarketplaceEntitlementService {
  /**
   * @see {@link GetEntitlementsCommand}
   */
  getEntitlements(
    args: GetEntitlementsCommandInput,
    options?: MarketplaceEntitlementServiceRequestOptions
  ): Promise<GetEntitlementsCommandOutput>;
  getEntitlements(
    args: GetEntitlementsCommandInput,
    cb: (err: any, data?: GetEntitlementsCommandOutput) => void
  ): void;
  getEntitlements(
    args: GetEntitlementsCommandInput,
    options: MarketplaceEntitlementServiceRequestOptions,
    cb: (err: any, data?: GetEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntitlementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEntitlementsCommandOutput}.
   */
  paginateGetEntitlements(
    args: GetEntitlementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEntitlementsCommandOutput>;
}

/**
 * AWS Marketplace Entitlement Service
 *
 * This reference provides descriptions of the AWS Marketplace Entitlement Service API.
 *
 * AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
 *
 * **Getting Entitlement Records**
 *
 * - *GetEntitlements*- Gets the entitlements for a Marketplace product.
 *
 * @public
 */
export class MarketplaceEntitlementService extends MarketplaceEntitlementServiceClient implements MarketplaceEntitlementService {}
createAggregatedClient(commands, MarketplaceEntitlementService, { paginators });
