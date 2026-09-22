// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateUserCommandInput,
  type AssociateUserCommandOutput,
  AssociateUserCommand,
} from "./commands/AssociateUserCommand";
import {
  type CreateLicenseServerEndpointCommandInput,
  type CreateLicenseServerEndpointCommandOutput,
  CreateLicenseServerEndpointCommand,
} from "./commands/CreateLicenseServerEndpointCommand";
import {
  type DeleteLicenseServerEndpointCommandInput,
  type DeleteLicenseServerEndpointCommandOutput,
  DeleteLicenseServerEndpointCommand,
} from "./commands/DeleteLicenseServerEndpointCommand";
import {
  type DeregisterIdentityProviderCommandInput,
  type DeregisterIdentityProviderCommandOutput,
  DeregisterIdentityProviderCommand,
} from "./commands/DeregisterIdentityProviderCommand";
import {
  type DisassociateUserCommandInput,
  type DisassociateUserCommandOutput,
  DisassociateUserCommand,
} from "./commands/DisassociateUserCommand";
import {
  type ListIdentityProvidersCommandInput,
  type ListIdentityProvidersCommandOutput,
  ListIdentityProvidersCommand,
} from "./commands/ListIdentityProvidersCommand";
import {
  type ListInstancesCommandInput,
  type ListInstancesCommandOutput,
  ListInstancesCommand,
} from "./commands/ListInstancesCommand";
import {
  type ListLicenseServerEndpointsCommandInput,
  type ListLicenseServerEndpointsCommandOutput,
  ListLicenseServerEndpointsCommand,
} from "./commands/ListLicenseServerEndpointsCommand";
import {
  type ListProductSubscriptionsCommandInput,
  type ListProductSubscriptionsCommandOutput,
  ListProductSubscriptionsCommand,
} from "./commands/ListProductSubscriptionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListUserAssociationsCommandInput,
  type ListUserAssociationsCommandOutput,
  ListUserAssociationsCommand,
} from "./commands/ListUserAssociationsCommand";
import {
  type RegisterIdentityProviderCommandInput,
  type RegisterIdentityProviderCommandOutput,
  RegisterIdentityProviderCommand,
} from "./commands/RegisterIdentityProviderCommand";
import {
  type StartProductSubscriptionCommandInput,
  type StartProductSubscriptionCommandOutput,
  StartProductSubscriptionCommand,
} from "./commands/StartProductSubscriptionCommand";
import {
  type StopProductSubscriptionCommandInput,
  type StopProductSubscriptionCommandOutput,
  StopProductSubscriptionCommand,
} from "./commands/StopProductSubscriptionCommand";
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
  type UpdateIdentityProviderSettingsCommandInput,
  type UpdateIdentityProviderSettingsCommandOutput,
  UpdateIdentityProviderSettingsCommand,
} from "./commands/UpdateIdentityProviderSettingsCommand";
import { LicenseManagerUserSubscriptionsClient } from "./LicenseManagerUserSubscriptionsClient";
import { paginateListIdentityProviders } from "./pagination/ListIdentityProvidersPaginator";
import { paginateListInstances } from "./pagination/ListInstancesPaginator";
import { paginateListLicenseServerEndpoints } from "./pagination/ListLicenseServerEndpointsPaginator";
import { paginateListProductSubscriptions } from "./pagination/ListProductSubscriptionsPaginator";
import { paginateListUserAssociations } from "./pagination/ListUserAssociationsPaginator";

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
const paginators = {
  paginateListIdentityProviders,
  paginateListInstances,
  paginateListLicenseServerEndpoints,
  paginateListProductSubscriptions,
  paginateListUserAssociations,
};

/**
 * @public
 */
export interface LicenseManagerUserSubscriptionsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LicenseManagerUserSubscriptions {
  /**
   * @see {@link AssociateUserCommand}
   */
  associateUser(
    args: AssociateUserCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<AssociateUserCommandOutput>;
  associateUser(
    args: AssociateUserCommandInput,
    cb: (err: any, data?: AssociateUserCommandOutput) => void
  ): void;
  associateUser(
    args: AssociateUserCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: AssociateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseServerEndpointCommand}
   */
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<CreateLicenseServerEndpointCommandOutput>;
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    cb: (err: any, data?: CreateLicenseServerEndpointCommandOutput) => void
  ): void;
  createLicenseServerEndpoint(
    args: CreateLicenseServerEndpointCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: CreateLicenseServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseServerEndpointCommand}
   */
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<DeleteLicenseServerEndpointCommandOutput>;
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    cb: (err: any, data?: DeleteLicenseServerEndpointCommandOutput) => void
  ): void;
  deleteLicenseServerEndpoint(
    args: DeleteLicenseServerEndpointCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: DeleteLicenseServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterIdentityProviderCommand}
   */
  deregisterIdentityProvider(): Promise<DeregisterIdentityProviderCommandOutput>;
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<DeregisterIdentityProviderCommandOutput>;
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;
  deregisterIdentityProvider(
    args: DeregisterIdentityProviderCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: DeregisterIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateUserCommand}
   */
  disassociateUser(): Promise<DisassociateUserCommandOutput>;
  disassociateUser(
    args: DisassociateUserCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<DisassociateUserCommandOutput>;
  disassociateUser(
    args: DisassociateUserCommandInput,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;
  disassociateUser(
    args: DisassociateUserCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: DisassociateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseServerEndpointsCommand}
   */
  listLicenseServerEndpoints(): Promise<ListLicenseServerEndpointsCommandOutput>;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListLicenseServerEndpointsCommandOutput>;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    cb: (err: any, data?: ListLicenseServerEndpointsCommandOutput) => void
  ): void;
  listLicenseServerEndpoints(
    args: ListLicenseServerEndpointsCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListLicenseServerEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProductSubscriptionsCommand}
   */
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListProductSubscriptionsCommandOutput>;
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;
  listProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListProductSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserAssociationsCommand}
   */
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<ListUserAssociationsCommandOutput>;
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;
  listUserAssociations(
    args: ListUserAssociationsCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: ListUserAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterIdentityProviderCommand}
   */
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<RegisterIdentityProviderCommandOutput>;
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;
  registerIdentityProvider(
    args: RegisterIdentityProviderCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: RegisterIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProductSubscriptionCommand}
   */
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<StartProductSubscriptionCommandOutput>;
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;
  startProductSubscription(
    args: StartProductSubscriptionCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: StartProductSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopProductSubscriptionCommand}
   */
  stopProductSubscription(): Promise<StopProductSubscriptionCommandOutput>;
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<StopProductSubscriptionCommandOutput>;
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;
  stopProductSubscription(
    args: StopProductSubscriptionCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: StopProductSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderSettingsCommand}
   */
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options?: LicenseManagerUserSubscriptionsRequestOptions
  ): Promise<UpdateIdentityProviderSettingsCommandOutput>;
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;
  updateIdentityProviderSettings(
    args: UpdateIdentityProviderSettingsCommandInput,
    options: LicenseManagerUserSubscriptionsRequestOptions,
    cb: (err: any, data?: UpdateIdentityProviderSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentityProvidersCommandOutput}.
   */
  paginateListIdentityProviders(
    args?: ListIdentityProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentityProvidersCommandOutput>;

  /**
   * @see {@link ListInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstancesCommandOutput}.
   */
  paginateListInstances(
    args?: ListInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstancesCommandOutput>;

  /**
   * @see {@link ListLicenseServerEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLicenseServerEndpointsCommandOutput}.
   */
  paginateListLicenseServerEndpoints(
    args?: ListLicenseServerEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLicenseServerEndpointsCommandOutput>;

  /**
   * @see {@link ListProductSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProductSubscriptionsCommandOutput}.
   */
  paginateListProductSubscriptions(
    args: ListProductSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProductSubscriptionsCommandOutput>;

  /**
   * @see {@link ListUserAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserAssociationsCommandOutput}.
   */
  paginateListUserAssociations(
    args: ListUserAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserAssociationsCommandOutput>;
}

/**
 * <p>With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.</p>
 * @public
 */
export class LicenseManagerUserSubscriptions extends LicenseManagerUserSubscriptionsClient implements LicenseManagerUserSubscriptions {}
createAggregatedClient(commands, LicenseManagerUserSubscriptions, { paginators });
