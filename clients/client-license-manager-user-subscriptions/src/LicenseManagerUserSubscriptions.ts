// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateUserCommand,
  AssociateUserCommandInput,
  AssociateUserCommandOutput,
} from "./commands/AssociateUserCommand";
import {
  DeregisterIdentityProviderCommand,
  DeregisterIdentityProviderCommandInput,
  DeregisterIdentityProviderCommandOutput,
} from "./commands/DeregisterIdentityProviderCommand";
import {
  DisassociateUserCommand,
  DisassociateUserCommandInput,
  DisassociateUserCommandOutput,
} from "./commands/DisassociateUserCommand";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListProductSubscriptionsCommand,
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "./commands/ListProductSubscriptionsCommand";
import {
  ListUserAssociationsCommand,
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
} from "./commands/ListUserAssociationsCommand";
import {
  RegisterIdentityProviderCommand,
  RegisterIdentityProviderCommandInput,
  RegisterIdentityProviderCommandOutput,
} from "./commands/RegisterIdentityProviderCommand";
import {
  StartProductSubscriptionCommand,
  StartProductSubscriptionCommandInput,
  StartProductSubscriptionCommandOutput,
} from "./commands/StartProductSubscriptionCommand";
import {
  StopProductSubscriptionCommand,
  StopProductSubscriptionCommandInput,
  StopProductSubscriptionCommandOutput,
} from "./commands/StopProductSubscriptionCommand";
import {
  UpdateIdentityProviderSettingsCommand,
  UpdateIdentityProviderSettingsCommandInput,
  UpdateIdentityProviderSettingsCommandOutput,
} from "./commands/UpdateIdentityProviderSettingsCommand";
import { LicenseManagerUserSubscriptionsClient } from "./LicenseManagerUserSubscriptionsClient";

/**
 * <p>With License Manager, you can create user-based subscriptions to utilize licensed software with
 *       a per user subscription fee on Amazon EC2 instances.</p>
 */
export class LicenseManagerUserSubscriptions extends LicenseManagerUserSubscriptionsClient {
  /**
   * <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p>
   *          <note>
   *             <p>Your estimated bill for charges on the number of users and related costs will take 48
   *         hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your
   *           monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p>
   *          </note>
   */
  public associateUser(
    args: AssociateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserCommandOutput>;
  public associateUser(
    args: AssociateUserCommandInput,
    cb: (err: any, data?: AssociateUserCommandOutput) => void
  ): void;
  public associateUser(
    args: AssociateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserCommandOutput) => void
  ): void;
  public associateUser(
    args: AssociateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateUserCommandOutput) => void),
    cb?: (err: any, data?: AssociateUserCommandOutput) => void
  ): Promise<AssociateUserCommandOutput> | void {
    const command = new AssociateUserCommand(args);
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
   * <p>Deregisters the identity provider from providing user-based subscriptions.</p>
   */
  public deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterIdentityProviderCommandOutput>;
  public deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;
  public deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;
  public deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): Promise<DeregisterIdentityProviderCommandOutput> | void {
    const command = new DeregisterIdentityProviderCommand(args);
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
   * <p>Disassociates the user from an EC2 instance providing user-based subscriptions.</p>
   */
  public disassociateUser(
    args: DisassociateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserCommandOutput>;
  public disassociateUser(
    args: DisassociateUserCommandInput,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;
  public disassociateUser(
    args: DisassociateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;
  public disassociateUser(
    args: DisassociateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateUserCommandOutput) => void),
    cb?: (err: any, data?: DisassociateUserCommandOutput) => void
  ): Promise<DisassociateUserCommandOutput> | void {
    const command = new DisassociateUserCommand(args);
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
   * <p>Lists the identity providers for user-based subscriptions.</p>
   */
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): Promise<ListIdentityProvidersCommandOutput> | void {
    const command = new ListIdentityProvidersCommand(args);
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
   * <p>Lists the EC2 instances providing user-based subscriptions.</p>
   */
  public listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  public listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListInstancesCommandOutput) => void
  ): Promise<ListInstancesCommandOutput> | void {
    const command = new ListInstancesCommand(args);
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
   * <p>Lists the user-based subscription products available from an identity provider.</p>
   */
  public listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProductSubscriptionsCommandOutput>;
  public listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;
  public listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;
  public listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProductSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): Promise<ListProductSubscriptionsCommandOutput> | void {
    const command = new ListProductSubscriptionsCommand(args);
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
   * <p>Lists user associations for an identity provider.</p>
   */
  public listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserAssociationsCommandOutput>;
  public listUserAssociations(
    args: ListUserAssociationsCommandInput,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;
  public listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;
  public listUserAssociations(
    args: ListUserAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): Promise<ListUserAssociationsCommandOutput> | void {
    const command = new ListUserAssociationsCommand(args);
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
   * <p>Registers an identity provider for user-based subscriptions.</p>
   */
  public registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterIdentityProviderCommandOutput>;
  public registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;
  public registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;
  public registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): Promise<RegisterIdentityProviderCommandOutput> | void {
    const command = new RegisterIdentityProviderCommand(args);
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
   * <p>Starts a product subscription for a user with the specified identity provider.</p>
   *          <note>
   *             <p>Your estimated bill for charges on the number of users and related costs will take 48
   *         hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your
   *           monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p>
   *          </note>
   */
  public startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProductSubscriptionCommandOutput>;
  public startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;
  public startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;
  public startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartProductSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): Promise<StartProductSubscriptionCommandOutput> | void {
    const command = new StartProductSubscriptionCommand(args);
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
   * <p>Stops a product subscription for a user with the specified identity provider.</p>
   */
  public stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopProductSubscriptionCommandOutput>;
  public stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;
  public stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;
  public stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopProductSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): Promise<StopProductSubscriptionCommandOutput> | void {
    const command = new StopProductSubscriptionCommand(args);
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
   * <p>Updates additional product configuration settings for the registered identity
   *       provider.</p>
   */
  public updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderSettingsCommandOutput>;
  public updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;
  public updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;
  public updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): Promise<UpdateIdentityProviderSettingsCommandOutput> | void {
    const command = new UpdateIdentityProviderSettingsCommand(args);
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
