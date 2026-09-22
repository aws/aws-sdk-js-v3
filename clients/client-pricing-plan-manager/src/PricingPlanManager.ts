// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ApprovePaidSubscriptionCommandInput,
  type ApprovePaidSubscriptionCommandOutput,
  ApprovePaidSubscriptionCommand,
} from "./commands/ApprovePaidSubscriptionCommand";
import {
  type AssociateResourcesToSubscriptionCommandInput,
  type AssociateResourcesToSubscriptionCommandOutput,
  AssociateResourcesToSubscriptionCommand,
} from "./commands/AssociateResourcesToSubscriptionCommand";
import {
  type CancelSubscriptionChangeCommandInput,
  type CancelSubscriptionChangeCommandOutput,
  CancelSubscriptionChangeCommand,
} from "./commands/CancelSubscriptionChangeCommand";
import {
  type CancelSubscriptionCommandInput,
  type CancelSubscriptionCommandOutput,
  CancelSubscriptionCommand,
} from "./commands/CancelSubscriptionCommand";
import {
  type CreateSubscriptionCommandInput,
  type CreateSubscriptionCommandOutput,
  CreateSubscriptionCommand,
} from "./commands/CreateSubscriptionCommand";
import {
  type DisassociateResourcesFromSubscriptionCommandInput,
  type DisassociateResourcesFromSubscriptionCommandOutput,
  DisassociateResourcesFromSubscriptionCommand,
} from "./commands/DisassociateResourcesFromSubscriptionCommand";
import {
  type GetSubscriptionCommandInput,
  type GetSubscriptionCommandOutput,
  GetSubscriptionCommand,
} from "./commands/GetSubscriptionCommand";
import {
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsCommand,
} from "./commands/ListSubscriptionsCommand";
import {
  type UpdateSubscriptionCommandInput,
  type UpdateSubscriptionCommandOutput,
  UpdateSubscriptionCommand,
} from "./commands/UpdateSubscriptionCommand";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";
import { PricingPlanManagerClient } from "./PricingPlanManagerClient";

const commands = {
  ApprovePaidSubscriptionCommand,
  AssociateResourcesToSubscriptionCommand,
  CancelSubscriptionCommand,
  CancelSubscriptionChangeCommand,
  CreateSubscriptionCommand,
  DisassociateResourcesFromSubscriptionCommand,
  GetSubscriptionCommand,
  ListSubscriptionsCommand,
  UpdateSubscriptionCommand,
};
const paginators = {
  paginateListSubscriptions,
};

/**
 * @public
 */
export interface PricingPlanManagerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PricingPlanManager {
  /**
   * @see {@link ApprovePaidSubscriptionCommand}
   */
  approvePaidSubscription(
    args: ApprovePaidSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<ApprovePaidSubscriptionCommandOutput>;
  approvePaidSubscription(
    args: ApprovePaidSubscriptionCommandInput,
    cb: (err: any, data?: ApprovePaidSubscriptionCommandOutput) => void
  ): void;
  approvePaidSubscription(
    args: ApprovePaidSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: ApprovePaidSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourcesToSubscriptionCommand}
   */
  associateResourcesToSubscription(
    args: AssociateResourcesToSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<AssociateResourcesToSubscriptionCommandOutput>;
  associateResourcesToSubscription(
    args: AssociateResourcesToSubscriptionCommandInput,
    cb: (err: any, data?: AssociateResourcesToSubscriptionCommandOutput) => void
  ): void;
  associateResourcesToSubscription(
    args: AssociateResourcesToSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: AssociateResourcesToSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSubscriptionCommand}
   */
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<CancelSubscriptionCommandOutput>;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSubscriptionChangeCommand}
   */
  cancelSubscriptionChange(
    args: CancelSubscriptionChangeCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<CancelSubscriptionChangeCommandOutput>;
  cancelSubscriptionChange(
    args: CancelSubscriptionChangeCommandInput,
    cb: (err: any, data?: CancelSubscriptionChangeCommandOutput) => void
  ): void;
  cancelSubscriptionChange(
    args: CancelSubscriptionChangeCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: CancelSubscriptionChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourcesFromSubscriptionCommand}
   */
  disassociateResourcesFromSubscription(
    args: DisassociateResourcesFromSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<DisassociateResourcesFromSubscriptionCommandOutput>;
  disassociateResourcesFromSubscription(
    args: DisassociateResourcesFromSubscriptionCommandInput,
    cb: (err: any, data?: DisassociateResourcesFromSubscriptionCommandOutput) => void
  ): void;
  disassociateResourcesFromSubscription(
    args: DisassociateResourcesFromSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: DisassociateResourcesFromSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionCommand}
   */
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options?: PricingPlanManagerRequestOptions
  ): Promise<UpdateSubscriptionCommandOutput>;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options: PricingPlanManagerRequestOptions,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args?: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;
}

/**
 * <p>Manages flat-rate pricing subscriptions for supported services. Use this API to create, approve, update, and cancel subscriptions; associate and disassociate resources; and retrieve subscription details. With a flat-rate pricing subscription, you pay a fixed recurring fee for eligible resources instead of usage-based pricing.</p>
 * @public
 */
export class PricingPlanManager extends PricingPlanManagerClient implements PricingPlanManager {}
createAggregatedClient(commands, PricingPlanManager, { paginators });
