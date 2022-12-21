// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { LicenseManagerLinuxSubscriptionsClient } from "./LicenseManagerLinuxSubscriptionsClient";

/**
 * <p>With License Manager, you can discover and track your commercial Linux subscriptions on running
 *       Amazon EC2 instances.</p>
 */
export class LicenseManagerLinuxSubscriptions extends LicenseManagerLinuxSubscriptionsClient {
  /**
   * <p>Lists the Linux subscriptions service settings.</p>
   */
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): Promise<GetServiceSettingsCommandOutput> | void {
    const command = new GetServiceSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the running Amazon EC2 instances that were discovered with commercial Linux
   *       subscriptions.</p>
   */
  public listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput>;
  public listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;
  public listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): void;
  public listLinuxSubscriptionInstances(
    args: ListLinuxSubscriptionInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListLinuxSubscriptionInstancesCommandOutput) => void
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput> | void {
    const command = new ListLinuxSubscriptionInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Linux subscriptions that have been discovered. If you have linked your
   *       organization, the returned results will include data aggregated across your accounts in
   *       Organizations.</p>
   */
  public listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinuxSubscriptionsCommandOutput>;
  public listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;
  public listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): void;
  public listLinuxSubscriptions(
    args: ListLinuxSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLinuxSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListLinuxSubscriptionsCommandOutput) => void
  ): Promise<ListLinuxSubscriptionsCommandOutput> | void {
    const command = new ListLinuxSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the service settings for Linux subscriptions.</p>
   */
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): Promise<UpdateServiceSettingsCommandOutput> | void {
    const command = new UpdateServiceSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
