// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  LicenseManagerUserSubscriptionsClient,
  LicenseManagerUserSubscriptionsClientConfig,
} from "./LicenseManagerUserSubscriptionsClient";

const commands = {
  AssociateUserCommand,
  DeregisterIdentityProviderCommand,
  DisassociateUserCommand,
  ListIdentityProvidersCommand,
  ListInstancesCommand,
  ListProductSubscriptionsCommand,
  ListUserAssociationsCommand,
  RegisterIdentityProviderCommand,
  StartProductSubscriptionCommand,
  StopProductSubscriptionCommand,
  UpdateIdentityProviderSettingsCommand,
};

export interface LicenseManagerUserSubscriptions {
  /**
   * @see {@link AssociateUserCommand}
   */
  associateUser(args: AssociateUserCommandInput, options?: __HttpHandlerOptions): Promise<AssociateUserCommandOutput>;
  associateUser(args: AssociateUserCommandInput, cb: (err: any, data?: AssociateUserCommandOutput) => void): void;
  associateUser(
    args: AssociateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterIdentityProviderCommand}
   */
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterIdentityProviderCommandOutput>;
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateUserCommand}
   */
  disassociateUser(
    args: DisassociateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserCommandOutput>;
  disassociateUser(
    args: DisassociateUserCommandInput,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;
  disassociateUser(
    args: DisassociateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductSubscriptionsCommand}
   */
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProductSubscriptionsCommandOutput>;
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserAssociationsCommand}
   */
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserAssociationsCommandOutput>;
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterIdentityProviderCommand}
   */
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterIdentityProviderCommandOutput>;
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProductSubscriptionCommand}
   */
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProductSubscriptionCommandOutput>;
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopProductSubscriptionCommand}
   */
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopProductSubscriptionCommandOutput>;
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderSettingsCommand}
   */
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderSettingsCommandOutput>;
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>With License Manager, you can create user-based subscriptions to utilize licensed software with
 *       a per user subscription fee on Amazon EC2 instances.</p>
 */
export class LicenseManagerUserSubscriptions
  extends LicenseManagerUserSubscriptionsClient
  implements LicenseManagerUserSubscriptions {}
createAggregatedClient(commands, LicenseManagerUserSubscriptions);
