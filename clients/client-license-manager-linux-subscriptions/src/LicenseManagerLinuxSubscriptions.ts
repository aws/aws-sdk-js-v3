// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
import {
  LicenseManagerLinuxSubscriptionsClient,
  LicenseManagerLinuxSubscriptionsClientConfig,
} from "./LicenseManagerLinuxSubscriptionsClient";

const commands = {
  GetServiceSettingsCommand,
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionsCommand,
  UpdateServiceSettingsCommand,
};

export interface LicenseManagerLinuxSubscriptions {
  /**
   * @see {@link GetServiceSettingsCommand}
   */
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
 * @public
 * <p>With License Manager, you can discover and track your commercial Linux subscriptions on running
 *       Amazon EC2 instances.</p>
 */
export class LicenseManagerLinuxSubscriptions
  extends LicenseManagerLinuxSubscriptionsClient
  implements LicenseManagerLinuxSubscriptions {}
createAggregatedClient(commands, LicenseManagerLinuxSubscriptions);
