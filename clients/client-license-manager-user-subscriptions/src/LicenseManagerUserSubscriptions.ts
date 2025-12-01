// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateUserCommand,
  AssociateUserCommandInput,
  AssociateUserCommandOutput,
} from "./commands/AssociateUserCommand";
import {
  CreateLicenseServerEndpointCommand,
  CreateLicenseServerEndpointCommandInput,
  CreateLicenseServerEndpointCommandOutput,
} from "./commands/CreateLicenseServerEndpointCommand";
import {
  DeleteLicenseServerEndpointCommand,
  DeleteLicenseServerEndpointCommandInput,
  DeleteLicenseServerEndpointCommandOutput,
} from "./commands/DeleteLicenseServerEndpointCommand";
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
  ListLicenseServerEndpointsCommand,
  ListLicenseServerEndpointsCommandInput,
  ListLicenseServerEndpointsCommandOutput,
} from "./commands/ListLicenseServerEndpointsCommand";
import {
  ListProductSubscriptionsCommand,
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "./commands/ListProductSubscriptionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIdentityProviderSettingsCommand,
  UpdateIdentityProviderSettingsCommandInput,
  UpdateIdentityProviderSettingsCommandOutput,
} from "./commands/UpdateIdentityProviderSettingsCommand";
import { LicenseManagerUserSubscriptionsClient } from "./LicenseManagerUserSubscriptionsClient";

const commands = {
  AssociateUserCommand,
  CreateLicenseServerEndpointCommand,
  DeleteLicenseServerEndpointCommand,
  DeregisterIdentityProviderCommand,
  DisassociateUserCommand,
  ListIdentityProvidersCommand,
  ListInstancesCommand,
  ListLicenseServerEndpointsCommand,
  ListProductSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListUserAssociationsCommand,
  RegisterIdentityProviderCommand,
  StartProductSubscriptionCommand,
  StopProductSubscriptionCommand,
  TagResourceCommand,
  UntagResourceCommand,
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
   * @see {@link CreateLicenseServerEndpointCommand}
   */
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseServerEndpointCommandOutput>;
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    cb: (err: any, data?: CreateLicenseServerEndpointCommandOutput) => void
  ): void;
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseServerEndpointCommand}
   */
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseServerEndpointCommandOutput>;
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    cb: (err: any, data?: DeleteLicenseServerEndpointCommandOutput) => void
  ): void;
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterIdentityProviderCommand}
   */
  deregisterIdentityProvider(): Promise<DeregisterIdentityProviderCommandOutput>;
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
  disassociateUser(): Promise<DisassociateUserCommandOutput>;
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
  listIdentityProviders(): Promise<ListIdentityProvidersCommandOutput>;
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
  listInstances(): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseServerEndpointsCommand}
   */
  listLicenseServerEndpoints(): Promise<ListLicenseServerEndpointsCommandOutput>;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseServerEndpointsCommandOutput>;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    cb: (err: any, data?: ListLicenseServerEndpointsCommandOutput) => void
  ): void;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseServerEndpointsCommandOutput) => void
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
  stopProductSubscription(): Promise<StopProductSubscriptionCommandOutput>;
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
 * <p>With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.</p>
 * @public
 */
export class LicenseManagerUserSubscriptions
  extends LicenseManagerUserSubscriptionsClient
  implements LicenseManagerUserSubscriptions {}
createAggregatedClient(commands, LicenseManagerUserSubscriptions);
