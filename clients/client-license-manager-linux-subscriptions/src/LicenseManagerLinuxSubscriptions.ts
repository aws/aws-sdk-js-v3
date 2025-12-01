// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeregisterSubscriptionProviderCommand,
  DeregisterSubscriptionProviderCommandInput,
  DeregisterSubscriptionProviderCommandOutput,
} from "./commands/DeregisterSubscriptionProviderCommand";
import {
  GetRegisteredSubscriptionProviderCommand,
  GetRegisteredSubscriptionProviderCommandInput,
  GetRegisteredSubscriptionProviderCommandOutput,
} from "./commands/GetRegisteredSubscriptionProviderCommand";
import {
  GetServiceSettingsCommand,
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
} from "./commands/GetServiceSettingsCommand";
import {
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
} from "./commands/ListLinuxSubscriptionInstancesCommand";
import {
  ListLinuxSubscriptionsCommand,
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput,
} from "./commands/ListLinuxSubscriptionsCommand";
import {
  ListRegisteredSubscriptionProvidersCommand,
  ListRegisteredSubscriptionProvidersCommandInput,
  ListRegisteredSubscriptionProvidersCommandOutput,
} from "./commands/ListRegisteredSubscriptionProvidersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterSubscriptionProviderCommand,
  RegisterSubscriptionProviderCommandInput,
  RegisterSubscriptionProviderCommandOutput,
} from "./commands/RegisterSubscriptionProviderCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "./LicenseManagerLinuxSubscriptionsClient";

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

export interface LicenseManagerLinuxSubscriptions {
  /**
   * @see {@link DeregisterSubscriptionProviderCommand}
   */
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterSubscriptionProviderCommandOutput>;
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    cb: (err: any, data?: DeregisterSubscriptionProviderCommandOutput) => void
  ): void;
  deregisterSubscriptionProvider(
    args: DeregisterSubscriptionProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegisteredSubscriptionProviderCommand}
   */
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegisteredSubscriptionProviderCommandOutput>;
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    cb: (err: any, data?: GetRegisteredSubscriptionProviderCommandOutput) => void
  ): void;
  getRegisteredSubscriptionProvider(
    args: GetRegisteredSubscriptionProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegisteredSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSettingsCommand}
   */
  getServiceSettings(): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinuxSubscriptionInstancesCommand}
   */
  listLinuxSubscriptionInstances(): Promise<ListLinuxSubscriptionInstancesCommandOutput>;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput>;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;
  listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinuxSubscriptionsCommand}
   */
  listLinuxSubscriptions(): Promise<ListLinuxSubscriptionsCommandOutput>;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinuxSubscriptionsCommandOutput>;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;
  listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegisteredSubscriptionProvidersCommand}
   */
  listRegisteredSubscriptionProviders(): Promise<ListRegisteredSubscriptionProvidersCommandOutput>;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegisteredSubscriptionProvidersCommandOutput>;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    cb: (err: any, data?: ListRegisteredSubscriptionProvidersCommandOutput) => void
  ): void;
  listRegisteredSubscriptionProviders(
    args: ListRegisteredSubscriptionProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegisteredSubscriptionProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterSubscriptionProviderCommand}
   */
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterSubscriptionProviderCommandOutput>;
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    cb: (err: any, data?: RegisterSubscriptionProviderCommandOutput) => void
  ): void;
  registerSubscriptionProvider(
    args: RegisterSubscriptionProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterSubscriptionProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSettingsCommand}
   */
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
}

/**
 * <p>With License Manager, you can discover and track your commercial Linux subscriptions on running
 *       Amazon EC2 instances.</p>
 * @public
 */
export class LicenseManagerLinuxSubscriptions
  extends LicenseManagerLinuxSubscriptionsClient
  implements LicenseManagerLinuxSubscriptions {}
createAggregatedClient(commands, LicenseManagerLinuxSubscriptions);
