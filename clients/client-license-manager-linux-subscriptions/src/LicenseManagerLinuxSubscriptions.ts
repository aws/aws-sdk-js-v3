// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type DeregisterSubscriptionProviderCommandInput,
  type DeregisterSubscriptionProviderCommandOutput,
  DeregisterSubscriptionProviderCommand,
} from "./commands/DeregisterSubscriptionProviderCommand";
import {
  type GetRegisteredSubscriptionProviderCommandInput,
  type GetRegisteredSubscriptionProviderCommandOutput,
  GetRegisteredSubscriptionProviderCommand,
} from "./commands/GetRegisteredSubscriptionProviderCommand";
import {
  type GetServiceSettingsCommandInput,
  type GetServiceSettingsCommandOutput,
  GetServiceSettingsCommand,
} from "./commands/GetServiceSettingsCommand";
import {
  type ListLinuxSubscriptionInstancesCommandInput,
  type ListLinuxSubscriptionInstancesCommandOutput,
  ListLinuxSubscriptionInstancesCommand,
} from "./commands/ListLinuxSubscriptionInstancesCommand";
import {
  type ListLinuxSubscriptionsCommandInput,
  type ListLinuxSubscriptionsCommandOutput,
  ListLinuxSubscriptionsCommand,
} from "./commands/ListLinuxSubscriptionsCommand";
import {
  type ListRegisteredSubscriptionProvidersCommandInput,
  type ListRegisteredSubscriptionProvidersCommandOutput,
  ListRegisteredSubscriptionProvidersCommand,
} from "./commands/ListRegisteredSubscriptionProvidersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RegisterSubscriptionProviderCommandInput,
  type RegisterSubscriptionProviderCommandOutput,
  RegisterSubscriptionProviderCommand,
} from "./commands/RegisterSubscriptionProviderCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateServiceSettingsCommandInput,
  type UpdateServiceSettingsCommandOutput,
  UpdateServiceSettingsCommand,
} from "./commands/UpdateServiceSettingsCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "./LicenseManagerLinuxSubscriptionsClient";
import { paginateListLinuxSubscriptionInstances } from "./pagination/ListLinuxSubscriptionInstancesPaginator";
import { paginateListLinuxSubscriptions } from "./pagination/ListLinuxSubscriptionsPaginator";
import { paginateListRegisteredSubscriptionProviders } from "./pagination/ListRegisteredSubscriptionProvidersPaginator";

const commands = {
  DeregisterSubscriptionProviderCommand,
  GetRegisteredSubscriptionProviderCommand,
  GetServiceSettingsCommand,
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionsCommand,
  ListRegisteredSubscriptionProvidersCommand,
  ListTagsForResourceCommand,
  RegisterSubscriptionProviderCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServiceSettingsCommand,
};
const paginators = {
  paginateListLinuxSubscriptionInstances,
  paginateListLinuxSubscriptions,
  paginateListRegisteredSubscriptionProviders,
};

/**
 * @public
 */
export interface LicenseManagerLinuxSubscriptionsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LicenseManagerLinuxSubscriptions {
  /**
   * @see {@link DeregisterSubscriptionProviderCommand}
   */
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<DeregisterSubscriptionProviderCommandOutput>;
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    cb: (err: any, data?: DeregisterSubscriptionProviderCommandOutput) => void
  ): void;
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: DeregisterSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegisteredSubscriptionProviderCommand}
   */
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<GetRegisteredSubscriptionProviderCommandOutput>;
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    cb: (err: any, data?: GetRegisteredSubscriptionProviderCommandOutput) => void
  ): void;
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: GetRegisteredSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSettingsCommand}
   */
  getServiceSettings(): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinuxSubscriptionInstancesCommand}
   */
  listLinuxSubscriptionInstances(): Promise<ListLinuxSubscriptionInstancesCommandOutput>;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput>;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinuxSubscriptionsCommand}
   */
  listLinuxSubscriptions(): Promise<ListLinuxSubscriptionsCommandOutput>;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<ListLinuxSubscriptionsCommandOutput>;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegisteredSubscriptionProvidersCommand}
   */
  listRegisteredSubscriptionProviders(): Promise<ListRegisteredSubscriptionProvidersCommandOutput>;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<ListRegisteredSubscriptionProvidersCommandOutput>;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    cb: (err: any, data?: ListRegisteredSubscriptionProvidersCommandOutput) => void
  ): void;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: ListRegisteredSubscriptionProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterSubscriptionProviderCommand}
   */
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<RegisterSubscriptionProviderCommandOutput>;
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    cb: (err: any, data?: RegisterSubscriptionProviderCommandOutput) => void
  ): void;
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: RegisterSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSettingsCommand}
   */
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: LicenseManagerLinuxSubscriptionsRequestOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: LicenseManagerLinuxSubscriptionsRequestOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinuxSubscriptionInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLinuxSubscriptionInstancesCommandOutput}.
   */
  paginateListLinuxSubscriptionInstances(
    args?: ListLinuxSubscriptionInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLinuxSubscriptionInstancesCommandOutput>;

  /**
   * @see {@link ListLinuxSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLinuxSubscriptionsCommandOutput}.
   */
  paginateListLinuxSubscriptions(
    args?: ListLinuxSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLinuxSubscriptionsCommandOutput>;

  /**
   * @see {@link ListRegisteredSubscriptionProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegisteredSubscriptionProvidersCommandOutput}.
   */
  paginateListRegisteredSubscriptionProviders(
    args?: ListRegisteredSubscriptionProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegisteredSubscriptionProvidersCommandOutput>;
}

/**
 * <p>With License Manager, you can discover and track your commercial Linux subscriptions on running
 *       Amazon EC2 instances.</p>
 * @public
 */
export class LicenseManagerLinuxSubscriptions extends LicenseManagerLinuxSubscriptionsClient implements LicenseManagerLinuxSubscriptions {}
createAggregatedClient(commands, LicenseManagerLinuxSubscriptions, { paginators });
