// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchUpdateRuleCommandInput,
  type BatchUpdateRuleCommandOutput,
  BatchUpdateRuleCommand,
} from "./commands/BatchUpdateRuleCommand";
import {
  type CreateAccessLogSubscriptionCommandInput,
  type CreateAccessLogSubscriptionCommandOutput,
  CreateAccessLogSubscriptionCommand,
} from "./commands/CreateAccessLogSubscriptionCommand";
import {
  type CreateListenerCommandInput,
  type CreateListenerCommandOutput,
  CreateListenerCommand,
} from "./commands/CreateListenerCommand";
import {
  type CreateResourceConfigurationCommandInput,
  type CreateResourceConfigurationCommandOutput,
  CreateResourceConfigurationCommand,
} from "./commands/CreateResourceConfigurationCommand";
import {
  type CreateResourceGatewayCommandInput,
  type CreateResourceGatewayCommandOutput,
  CreateResourceGatewayCommand,
} from "./commands/CreateResourceGatewayCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateServiceCommandInput,
  type CreateServiceCommandOutput,
  CreateServiceCommand,
} from "./commands/CreateServiceCommand";
import {
  type CreateServiceNetworkCommandInput,
  type CreateServiceNetworkCommandOutput,
  CreateServiceNetworkCommand,
} from "./commands/CreateServiceNetworkCommand";
import {
  type CreateServiceNetworkResourceAssociationCommandInput,
  type CreateServiceNetworkResourceAssociationCommandOutput,
  CreateServiceNetworkResourceAssociationCommand,
} from "./commands/CreateServiceNetworkResourceAssociationCommand";
import {
  type CreateServiceNetworkServiceAssociationCommandInput,
  type CreateServiceNetworkServiceAssociationCommandOutput,
  CreateServiceNetworkServiceAssociationCommand,
} from "./commands/CreateServiceNetworkServiceAssociationCommand";
import {
  type CreateServiceNetworkVpcAssociationCommandInput,
  type CreateServiceNetworkVpcAssociationCommandOutput,
  CreateServiceNetworkVpcAssociationCommand,
} from "./commands/CreateServiceNetworkVpcAssociationCommand";
import {
  type CreateTargetGroupCommandInput,
  type CreateTargetGroupCommandOutput,
  CreateTargetGroupCommand,
} from "./commands/CreateTargetGroupCommand";
import {
  type DeleteAccessLogSubscriptionCommandInput,
  type DeleteAccessLogSubscriptionCommandOutput,
  DeleteAccessLogSubscriptionCommand,
} from "./commands/DeleteAccessLogSubscriptionCommand";
import {
  type DeleteAuthPolicyCommandInput,
  type DeleteAuthPolicyCommandOutput,
  DeleteAuthPolicyCommand,
} from "./commands/DeleteAuthPolicyCommand";
import {
  type DeleteDomainVerificationCommandInput,
  type DeleteDomainVerificationCommandOutput,
  DeleteDomainVerificationCommand,
} from "./commands/DeleteDomainVerificationCommand";
import {
  type DeleteListenerCommandInput,
  type DeleteListenerCommandOutput,
  DeleteListenerCommand,
} from "./commands/DeleteListenerCommand";
import {
  type DeleteResourceConfigurationCommandInput,
  type DeleteResourceConfigurationCommandOutput,
  DeleteResourceConfigurationCommand,
} from "./commands/DeleteResourceConfigurationCommand";
import {
  type DeleteResourceEndpointAssociationCommandInput,
  type DeleteResourceEndpointAssociationCommandOutput,
  DeleteResourceEndpointAssociationCommand,
} from "./commands/DeleteResourceEndpointAssociationCommand";
import {
  type DeleteResourceGatewayCommandInput,
  type DeleteResourceGatewayCommandOutput,
  DeleteResourceGatewayCommand,
} from "./commands/DeleteResourceGatewayCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteServiceCommandInput,
  type DeleteServiceCommandOutput,
  DeleteServiceCommand,
} from "./commands/DeleteServiceCommand";
import {
  type DeleteServiceNetworkCommandInput,
  type DeleteServiceNetworkCommandOutput,
  DeleteServiceNetworkCommand,
} from "./commands/DeleteServiceNetworkCommand";
import {
  type DeleteServiceNetworkResourceAssociationCommandInput,
  type DeleteServiceNetworkResourceAssociationCommandOutput,
  DeleteServiceNetworkResourceAssociationCommand,
} from "./commands/DeleteServiceNetworkResourceAssociationCommand";
import {
  type DeleteServiceNetworkServiceAssociationCommandInput,
  type DeleteServiceNetworkServiceAssociationCommandOutput,
  DeleteServiceNetworkServiceAssociationCommand,
} from "./commands/DeleteServiceNetworkServiceAssociationCommand";
import {
  type DeleteServiceNetworkVpcAssociationCommandInput,
  type DeleteServiceNetworkVpcAssociationCommandOutput,
  DeleteServiceNetworkVpcAssociationCommand,
} from "./commands/DeleteServiceNetworkVpcAssociationCommand";
import {
  type DeleteTargetGroupCommandInput,
  type DeleteTargetGroupCommandOutput,
  DeleteTargetGroupCommand,
} from "./commands/DeleteTargetGroupCommand";
import {
  type DeregisterTargetsCommandInput,
  type DeregisterTargetsCommandOutput,
  DeregisterTargetsCommand,
} from "./commands/DeregisterTargetsCommand";
import {
  type GetAccessLogSubscriptionCommandInput,
  type GetAccessLogSubscriptionCommandOutput,
  GetAccessLogSubscriptionCommand,
} from "./commands/GetAccessLogSubscriptionCommand";
import {
  type GetAuthPolicyCommandInput,
  type GetAuthPolicyCommandOutput,
  GetAuthPolicyCommand,
} from "./commands/GetAuthPolicyCommand";
import {
  type GetDomainVerificationCommandInput,
  type GetDomainVerificationCommandOutput,
  GetDomainVerificationCommand,
} from "./commands/GetDomainVerificationCommand";
import {
  type GetListenerCommandInput,
  type GetListenerCommandOutput,
  GetListenerCommand,
} from "./commands/GetListenerCommand";
import {
  type GetResourceConfigurationCommandInput,
  type GetResourceConfigurationCommandOutput,
  GetResourceConfigurationCommand,
} from "./commands/GetResourceConfigurationCommand";
import {
  type GetResourceGatewayCommandInput,
  type GetResourceGatewayCommandOutput,
  GetResourceGatewayCommand,
} from "./commands/GetResourceGatewayCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import { type GetRuleCommandInput, type GetRuleCommandOutput, GetRuleCommand } from "./commands/GetRuleCommand";
import {
  type GetServiceCommandInput,
  type GetServiceCommandOutput,
  GetServiceCommand,
} from "./commands/GetServiceCommand";
import {
  type GetServiceNetworkCommandInput,
  type GetServiceNetworkCommandOutput,
  GetServiceNetworkCommand,
} from "./commands/GetServiceNetworkCommand";
import {
  type GetServiceNetworkResourceAssociationCommandInput,
  type GetServiceNetworkResourceAssociationCommandOutput,
  GetServiceNetworkResourceAssociationCommand,
} from "./commands/GetServiceNetworkResourceAssociationCommand";
import {
  type GetServiceNetworkServiceAssociationCommandInput,
  type GetServiceNetworkServiceAssociationCommandOutput,
  GetServiceNetworkServiceAssociationCommand,
} from "./commands/GetServiceNetworkServiceAssociationCommand";
import {
  type GetServiceNetworkVpcAssociationCommandInput,
  type GetServiceNetworkVpcAssociationCommandOutput,
  GetServiceNetworkVpcAssociationCommand,
} from "./commands/GetServiceNetworkVpcAssociationCommand";
import {
  type GetTargetGroupCommandInput,
  type GetTargetGroupCommandOutput,
  GetTargetGroupCommand,
} from "./commands/GetTargetGroupCommand";
import {
  type ListAccessLogSubscriptionsCommandInput,
  type ListAccessLogSubscriptionsCommandOutput,
  ListAccessLogSubscriptionsCommand,
} from "./commands/ListAccessLogSubscriptionsCommand";
import {
  type ListDomainVerificationsCommandInput,
  type ListDomainVerificationsCommandOutput,
  ListDomainVerificationsCommand,
} from "./commands/ListDomainVerificationsCommand";
import {
  type ListListenersCommandInput,
  type ListListenersCommandOutput,
  ListListenersCommand,
} from "./commands/ListListenersCommand";
import {
  type ListResourceConfigurationsCommandInput,
  type ListResourceConfigurationsCommandOutput,
  ListResourceConfigurationsCommand,
} from "./commands/ListResourceConfigurationsCommand";
import {
  type ListResourceEndpointAssociationsCommandInput,
  type ListResourceEndpointAssociationsCommandOutput,
  ListResourceEndpointAssociationsCommand,
} from "./commands/ListResourceEndpointAssociationsCommand";
import {
  type ListResourceGatewaysCommandInput,
  type ListResourceGatewaysCommandOutput,
  ListResourceGatewaysCommand,
} from "./commands/ListResourceGatewaysCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListServiceNetworkResourceAssociationsCommandInput,
  type ListServiceNetworkResourceAssociationsCommandOutput,
  ListServiceNetworkResourceAssociationsCommand,
} from "./commands/ListServiceNetworkResourceAssociationsCommand";
import {
  type ListServiceNetworksCommandInput,
  type ListServiceNetworksCommandOutput,
  ListServiceNetworksCommand,
} from "./commands/ListServiceNetworksCommand";
import {
  type ListServiceNetworkServiceAssociationsCommandInput,
  type ListServiceNetworkServiceAssociationsCommandOutput,
  ListServiceNetworkServiceAssociationsCommand,
} from "./commands/ListServiceNetworkServiceAssociationsCommand";
import {
  type ListServiceNetworkVpcAssociationsCommandInput,
  type ListServiceNetworkVpcAssociationsCommandOutput,
  ListServiceNetworkVpcAssociationsCommand,
} from "./commands/ListServiceNetworkVpcAssociationsCommand";
import {
  type ListServiceNetworkVpcEndpointAssociationsCommandInput,
  type ListServiceNetworkVpcEndpointAssociationsCommandOutput,
  ListServiceNetworkVpcEndpointAssociationsCommand,
} from "./commands/ListServiceNetworkVpcEndpointAssociationsCommand";
import {
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListServicesCommand,
} from "./commands/ListServicesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTargetGroupsCommandInput,
  type ListTargetGroupsCommandOutput,
  ListTargetGroupsCommand,
} from "./commands/ListTargetGroupsCommand";
import {
  type ListTargetsCommandInput,
  type ListTargetsCommandOutput,
  ListTargetsCommand,
} from "./commands/ListTargetsCommand";
import {
  type PutAuthPolicyCommandInput,
  type PutAuthPolicyCommandOutput,
  PutAuthPolicyCommand,
} from "./commands/PutAuthPolicyCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RegisterTargetsCommandInput,
  type RegisterTargetsCommandOutput,
  RegisterTargetsCommand,
} from "./commands/RegisterTargetsCommand";
import {
  type StartDomainVerificationCommandInput,
  type StartDomainVerificationCommandOutput,
  StartDomainVerificationCommand,
} from "./commands/StartDomainVerificationCommand";
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
  type UpdateAccessLogSubscriptionCommandInput,
  type UpdateAccessLogSubscriptionCommandOutput,
  UpdateAccessLogSubscriptionCommand,
} from "./commands/UpdateAccessLogSubscriptionCommand";
import {
  type UpdateListenerCommandInput,
  type UpdateListenerCommandOutput,
  UpdateListenerCommand,
} from "./commands/UpdateListenerCommand";
import {
  type UpdateResourceConfigurationCommandInput,
  type UpdateResourceConfigurationCommandOutput,
  UpdateResourceConfigurationCommand,
} from "./commands/UpdateResourceConfigurationCommand";
import {
  type UpdateResourceGatewayCommandInput,
  type UpdateResourceGatewayCommandOutput,
  UpdateResourceGatewayCommand,
} from "./commands/UpdateResourceGatewayCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import {
  type UpdateServiceCommandInput,
  type UpdateServiceCommandOutput,
  UpdateServiceCommand,
} from "./commands/UpdateServiceCommand";
import {
  type UpdateServiceNetworkCommandInput,
  type UpdateServiceNetworkCommandOutput,
  UpdateServiceNetworkCommand,
} from "./commands/UpdateServiceNetworkCommand";
import {
  type UpdateServiceNetworkVpcAssociationCommandInput,
  type UpdateServiceNetworkVpcAssociationCommandOutput,
  UpdateServiceNetworkVpcAssociationCommand,
} from "./commands/UpdateServiceNetworkVpcAssociationCommand";
import {
  type UpdateTargetGroupCommandInput,
  type UpdateTargetGroupCommandOutput,
  UpdateTargetGroupCommand,
} from "./commands/UpdateTargetGroupCommand";
import { paginateListAccessLogSubscriptions } from "./pagination/ListAccessLogSubscriptionsPaginator";
import { paginateListDomainVerifications } from "./pagination/ListDomainVerificationsPaginator";
import { paginateListListeners } from "./pagination/ListListenersPaginator";
import { paginateListResourceConfigurations } from "./pagination/ListResourceConfigurationsPaginator";
import { paginateListResourceEndpointAssociations } from "./pagination/ListResourceEndpointAssociationsPaginator";
import { paginateListResourceGateways } from "./pagination/ListResourceGatewaysPaginator";
import { paginateListRules } from "./pagination/ListRulesPaginator";
import {
  paginateListServiceNetworkResourceAssociations,
} from "./pagination/ListServiceNetworkResourceAssociationsPaginator";
import {
  paginateListServiceNetworkServiceAssociations,
} from "./pagination/ListServiceNetworkServiceAssociationsPaginator";
import { paginateListServiceNetworks } from "./pagination/ListServiceNetworksPaginator";
import { paginateListServiceNetworkVpcAssociations } from "./pagination/ListServiceNetworkVpcAssociationsPaginator";
import {
  paginateListServiceNetworkVpcEndpointAssociations,
} from "./pagination/ListServiceNetworkVpcEndpointAssociationsPaginator";
import { paginateListServices } from "./pagination/ListServicesPaginator";
import { paginateListTargetGroups } from "./pagination/ListTargetGroupsPaginator";
import { paginateListTargets } from "./pagination/ListTargetsPaginator";
import { VPCLatticeClient } from "./VPCLatticeClient";

const commands = {
  BatchUpdateRuleCommand,
  CreateAccessLogSubscriptionCommand,
  CreateListenerCommand,
  CreateResourceConfigurationCommand,
  CreateResourceGatewayCommand,
  CreateRuleCommand,
  CreateServiceCommand,
  CreateServiceNetworkCommand,
  CreateServiceNetworkResourceAssociationCommand,
  CreateServiceNetworkServiceAssociationCommand,
  CreateServiceNetworkVpcAssociationCommand,
  CreateTargetGroupCommand,
  DeleteAccessLogSubscriptionCommand,
  DeleteAuthPolicyCommand,
  DeleteDomainVerificationCommand,
  DeleteListenerCommand,
  DeleteResourceConfigurationCommand,
  DeleteResourceEndpointAssociationCommand,
  DeleteResourceGatewayCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleCommand,
  DeleteServiceCommand,
  DeleteServiceNetworkCommand,
  DeleteServiceNetworkResourceAssociationCommand,
  DeleteServiceNetworkServiceAssociationCommand,
  DeleteServiceNetworkVpcAssociationCommand,
  DeleteTargetGroupCommand,
  DeregisterTargetsCommand,
  GetAccessLogSubscriptionCommand,
  GetAuthPolicyCommand,
  GetDomainVerificationCommand,
  GetListenerCommand,
  GetResourceConfigurationCommand,
  GetResourceGatewayCommand,
  GetResourcePolicyCommand,
  GetRuleCommand,
  GetServiceCommand,
  GetServiceNetworkCommand,
  GetServiceNetworkResourceAssociationCommand,
  GetServiceNetworkServiceAssociationCommand,
  GetServiceNetworkVpcAssociationCommand,
  GetTargetGroupCommand,
  ListAccessLogSubscriptionsCommand,
  ListDomainVerificationsCommand,
  ListListenersCommand,
  ListResourceConfigurationsCommand,
  ListResourceEndpointAssociationsCommand,
  ListResourceGatewaysCommand,
  ListRulesCommand,
  ListServiceNetworkResourceAssociationsCommand,
  ListServiceNetworksCommand,
  ListServiceNetworkServiceAssociationsCommand,
  ListServiceNetworkVpcAssociationsCommand,
  ListServiceNetworkVpcEndpointAssociationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  ListTargetGroupsCommand,
  ListTargetsCommand,
  PutAuthPolicyCommand,
  PutResourcePolicyCommand,
  RegisterTargetsCommand,
  StartDomainVerificationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessLogSubscriptionCommand,
  UpdateListenerCommand,
  UpdateResourceConfigurationCommand,
  UpdateResourceGatewayCommand,
  UpdateRuleCommand,
  UpdateServiceCommand,
  UpdateServiceNetworkCommand,
  UpdateServiceNetworkVpcAssociationCommand,
  UpdateTargetGroupCommand,
};
const paginators = {
  paginateListAccessLogSubscriptions,
  paginateListDomainVerifications,
  paginateListListeners,
  paginateListResourceConfigurations,
  paginateListResourceEndpointAssociations,
  paginateListResourceGateways,
  paginateListRules,
  paginateListServiceNetworkResourceAssociations,
  paginateListServiceNetworks,
  paginateListServiceNetworkServiceAssociations,
  paginateListServiceNetworkVpcAssociations,
  paginateListServiceNetworkVpcEndpointAssociations,
  paginateListServices,
  paginateListTargetGroups,
  paginateListTargets,
};

export interface VPCLattice {
  /**
   * @see {@link BatchUpdateRuleCommand}
   */
  batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateRuleCommandOutput>;
  batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    cb: (err: any, data?: BatchUpdateRuleCommandOutput) => void
  ): void;
  batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessLogSubscriptionCommand}
   */
  createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessLogSubscriptionCommandOutput>;
  createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void
  ): void;
  createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListenerCommand}
   */
  createListener(
    args: CreateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateListenerCommandOutput>;
  createListener(
    args: CreateListenerCommandInput,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;
  createListener(
    args: CreateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceConfigurationCommand}
   */
  createResourceConfiguration(
    args: CreateResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceConfigurationCommandOutput>;
  createResourceConfiguration(
    args: CreateResourceConfigurationCommandInput,
    cb: (err: any, data?: CreateResourceConfigurationCommandOutput) => void
  ): void;
  createResourceConfiguration(
    args: CreateResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceGatewayCommand}
   */
  createResourceGateway(
    args: CreateResourceGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceGatewayCommandOutput>;
  createResourceGateway(
    args: CreateResourceGatewayCommandInput,
    cb: (err: any, data?: CreateResourceGatewayCommandOutput) => void
  ): void;
  createResourceGateway(
    args: CreateResourceGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(
    args: CreateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceCommandOutput>;
  createService(
    args: CreateServiceCommandInput,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceNetworkCommand}
   */
  createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkCommandOutput>;
  createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    cb: (err: any, data?: CreateServiceNetworkCommandOutput) => void
  ): void;
  createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceNetworkResourceAssociationCommand}
   */
  createServiceNetworkResourceAssociation(
    args: CreateServiceNetworkResourceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkResourceAssociationCommandOutput>;
  createServiceNetworkResourceAssociation(
    args: CreateServiceNetworkResourceAssociationCommandInput,
    cb: (err: any, data?: CreateServiceNetworkResourceAssociationCommandOutput) => void
  ): void;
  createServiceNetworkResourceAssociation(
    args: CreateServiceNetworkResourceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkResourceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceNetworkServiceAssociationCommand}
   */
  createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkServiceAssociationCommandOutput>;
  createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceNetworkVpcAssociationCommand}
   */
  createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkVpcAssociationCommandOutput>;
  createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTargetGroupCommand}
   */
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTargetGroupCommandOutput>;
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessLogSubscriptionCommand}
   */
  deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessLogSubscriptionCommandOutput>;
  deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void
  ): void;
  deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuthPolicyCommand}
   */
  deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthPolicyCommandOutput>;
  deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    cb: (err: any, data?: DeleteAuthPolicyCommandOutput) => void
  ): void;
  deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainVerificationCommand}
   */
  deleteDomainVerification(
    args: DeleteDomainVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainVerificationCommandOutput>;
  deleteDomainVerification(
    args: DeleteDomainVerificationCommandInput,
    cb: (err: any, data?: DeleteDomainVerificationCommandOutput) => void
  ): void;
  deleteDomainVerification(
    args: DeleteDomainVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListenerCommand}
   */
  deleteListener(
    args: DeleteListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteListenerCommandOutput>;
  deleteListener(
    args: DeleteListenerCommandInput,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;
  deleteListener(
    args: DeleteListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceConfigurationCommand}
   */
  deleteResourceConfiguration(
    args: DeleteResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceConfigurationCommandOutput>;
  deleteResourceConfiguration(
    args: DeleteResourceConfigurationCommandInput,
    cb: (err: any, data?: DeleteResourceConfigurationCommandOutput) => void
  ): void;
  deleteResourceConfiguration(
    args: DeleteResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceEndpointAssociationCommand}
   */
  deleteResourceEndpointAssociation(
    args: DeleteResourceEndpointAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceEndpointAssociationCommandOutput>;
  deleteResourceEndpointAssociation(
    args: DeleteResourceEndpointAssociationCommandInput,
    cb: (err: any, data?: DeleteResourceEndpointAssociationCommandOutput) => void
  ): void;
  deleteResourceEndpointAssociation(
    args: DeleteResourceEndpointAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceGatewayCommand}
   */
  deleteResourceGateway(
    args: DeleteResourceGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceGatewayCommandOutput>;
  deleteResourceGateway(
    args: DeleteResourceGatewayCommandInput,
    cb: (err: any, data?: DeleteResourceGatewayCommandOutput) => void
  ): void;
  deleteResourceGateway(
    args: DeleteResourceGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(
    args: DeleteServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceCommandOutput>;
  deleteService(
    args: DeleteServiceCommandInput,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceNetworkCommand}
   */
  deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkCommandOutput>;
  deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkCommandOutput) => void
  ): void;
  deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceNetworkResourceAssociationCommand}
   */
  deleteServiceNetworkResourceAssociation(
    args: DeleteServiceNetworkResourceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkResourceAssociationCommandOutput>;
  deleteServiceNetworkResourceAssociation(
    args: DeleteServiceNetworkResourceAssociationCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkResourceAssociationCommandOutput) => void
  ): void;
  deleteServiceNetworkResourceAssociation(
    args: DeleteServiceNetworkResourceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkResourceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceNetworkServiceAssociationCommand}
   */
  deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkServiceAssociationCommandOutput>;
  deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceNetworkVpcAssociationCommand}
   */
  deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkVpcAssociationCommandOutput>;
  deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetGroupCommand}
   */
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTargetGroupCommandOutput>;
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTargetsCommand}
   */
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTargetsCommandOutput>;
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessLogSubscriptionCommand}
   */
  getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessLogSubscriptionCommandOutput>;
  getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: GetAccessLogSubscriptionCommandOutput) => void
  ): void;
  getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthPolicyCommand}
   */
  getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthPolicyCommandOutput>;
  getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    cb: (err: any, data?: GetAuthPolicyCommandOutput) => void
  ): void;
  getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainVerificationCommand}
   */
  getDomainVerification(
    args: GetDomainVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainVerificationCommandOutput>;
  getDomainVerification(
    args: GetDomainVerificationCommandInput,
    cb: (err: any, data?: GetDomainVerificationCommandOutput) => void
  ): void;
  getDomainVerification(
    args: GetDomainVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListenerCommand}
   */
  getListener(
    args: GetListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetListenerCommandOutput>;
  getListener(
    args: GetListenerCommandInput,
    cb: (err: any, data?: GetListenerCommandOutput) => void
  ): void;
  getListener(
    args: GetListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceConfigurationCommand}
   */
  getResourceConfiguration(
    args: GetResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceConfigurationCommandOutput>;
  getResourceConfiguration(
    args: GetResourceConfigurationCommandInput,
    cb: (err: any, data?: GetResourceConfigurationCommandOutput) => void
  ): void;
  getResourceConfiguration(
    args: GetResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceGatewayCommand}
   */
  getResourceGateway(
    args: GetResourceGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceGatewayCommandOutput>;
  getResourceGateway(
    args: GetResourceGatewayCommandInput,
    cb: (err: any, data?: GetResourceGatewayCommandOutput) => void
  ): void;
  getResourceGateway(
    args: GetResourceGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleCommand}
   */
  getRule(
    args: GetRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleCommandOutput>;
  getRule(
    args: GetRuleCommandInput,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(
    args: GetServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceCommandOutput>;
  getService(
    args: GetServiceCommandInput,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceNetworkCommand}
   */
  getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkCommandOutput>;
  getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    cb: (err: any, data?: GetServiceNetworkCommandOutput) => void
  ): void;
  getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceNetworkResourceAssociationCommand}
   */
  getServiceNetworkResourceAssociation(
    args: GetServiceNetworkResourceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkResourceAssociationCommandOutput>;
  getServiceNetworkResourceAssociation(
    args: GetServiceNetworkResourceAssociationCommandInput,
    cb: (err: any, data?: GetServiceNetworkResourceAssociationCommandOutput) => void
  ): void;
  getServiceNetworkResourceAssociation(
    args: GetServiceNetworkResourceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkResourceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceNetworkServiceAssociationCommand}
   */
  getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkServiceAssociationCommandOutput>;
  getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceNetworkVpcAssociationCommand}
   */
  getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkVpcAssociationCommandOutput>;
  getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTargetGroupCommand}
   */
  getTargetGroup(
    args: GetTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTargetGroupCommandOutput>;
  getTargetGroup(
    args: GetTargetGroupCommandInput,
    cb: (err: any, data?: GetTargetGroupCommandOutput) => void
  ): void;
  getTargetGroup(
    args: GetTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessLogSubscriptionsCommand}
   */
  listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessLogSubscriptionsCommandOutput>;
  listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    cb: (err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void
  ): void;
  listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainVerificationsCommand}
   */
  listDomainVerifications(): Promise<ListDomainVerificationsCommandOutput>;
  listDomainVerifications(
    args: ListDomainVerificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainVerificationsCommandOutput>;
  listDomainVerifications(
    args: ListDomainVerificationsCommandInput,
    cb: (err: any, data?: ListDomainVerificationsCommandOutput) => void
  ): void;
  listDomainVerifications(
    args: ListDomainVerificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainVerificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListListenersCommand}
   */
  listListeners(
    args: ListListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListListenersCommandOutput>;
  listListeners(
    args: ListListenersCommandInput,
    cb: (err: any, data?: ListListenersCommandOutput) => void
  ): void;
  listListeners(
    args: ListListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceConfigurationsCommand}
   */
  listResourceConfigurations(): Promise<ListResourceConfigurationsCommandOutput>;
  listResourceConfigurations(
    args: ListResourceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceConfigurationsCommandOutput>;
  listResourceConfigurations(
    args: ListResourceConfigurationsCommandInput,
    cb: (err: any, data?: ListResourceConfigurationsCommandOutput) => void
  ): void;
  listResourceConfigurations(
    args: ListResourceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceEndpointAssociationsCommand}
   */
  listResourceEndpointAssociations(
    args: ListResourceEndpointAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceEndpointAssociationsCommandOutput>;
  listResourceEndpointAssociations(
    args: ListResourceEndpointAssociationsCommandInput,
    cb: (err: any, data?: ListResourceEndpointAssociationsCommandOutput) => void
  ): void;
  listResourceEndpointAssociations(
    args: ListResourceEndpointAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceEndpointAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceGatewaysCommand}
   */
  listResourceGateways(): Promise<ListResourceGatewaysCommandOutput>;
  listResourceGateways(
    args: ListResourceGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceGatewaysCommandOutput>;
  listResourceGateways(
    args: ListResourceGatewaysCommandInput,
    cb: (err: any, data?: ListResourceGatewaysCommandOutput) => void
  ): void;
  listResourceGateways(
    args: ListResourceGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceNetworkResourceAssociationsCommand}
   */
  listServiceNetworkResourceAssociations(): Promise<ListServiceNetworkResourceAssociationsCommandOutput>;
  listServiceNetworkResourceAssociations(
    args: ListServiceNetworkResourceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkResourceAssociationsCommandOutput>;
  listServiceNetworkResourceAssociations(
    args: ListServiceNetworkResourceAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkResourceAssociationsCommandOutput) => void
  ): void;
  listServiceNetworkResourceAssociations(
    args: ListServiceNetworkResourceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkResourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceNetworksCommand}
   */
  listServiceNetworks(): Promise<ListServiceNetworksCommandOutput>;
  listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworksCommandOutput>;
  listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    cb: (err: any, data?: ListServiceNetworksCommandOutput) => void
  ): void;
  listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceNetworkServiceAssociationsCommand}
   */
  listServiceNetworkServiceAssociations(): Promise<ListServiceNetworkServiceAssociationsCommandOutput>;
  listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkServiceAssociationsCommandOutput>;
  listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void
  ): void;
  listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceNetworkVpcAssociationsCommand}
   */
  listServiceNetworkVpcAssociations(): Promise<ListServiceNetworkVpcAssociationsCommandOutput>;
  listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkVpcAssociationsCommandOutput>;
  listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void
  ): void;
  listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceNetworkVpcEndpointAssociationsCommand}
   */
  listServiceNetworkVpcEndpointAssociations(
    args: ListServiceNetworkVpcEndpointAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkVpcEndpointAssociationsCommandOutput>;
  listServiceNetworkVpcEndpointAssociations(
    args: ListServiceNetworkVpcEndpointAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkVpcEndpointAssociationsCommandOutput) => void
  ): void;
  listServiceNetworkVpcEndpointAssociations(
    args: ListServiceNetworkVpcEndpointAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkVpcEndpointAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
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
   * @see {@link ListTargetGroupsCommand}
   */
  listTargetGroups(): Promise<ListTargetGroupsCommandOutput>;
  listTargetGroups(
    args: ListTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetGroupsCommandOutput>;
  listTargetGroups(
    args: ListTargetGroupsCommandInput,
    cb: (err: any, data?: ListTargetGroupsCommandOutput) => void
  ): void;
  listTargetGroups(
    args: ListTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetsCommand}
   */
  listTargets(
    args: ListTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsCommandOutput>;
  listTargets(
    args: ListTargetsCommandInput,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;
  listTargets(
    args: ListTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAuthPolicyCommand}
   */
  putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAuthPolicyCommandOutput>;
  putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    cb: (err: any, data?: PutAuthPolicyCommandOutput) => void
  ): void;
  putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAuthPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTargetsCommand}
   */
  registerTargets(
    args: RegisterTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTargetsCommandOutput>;
  registerTargets(
    args: RegisterTargetsCommandInput,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;
  registerTargets(
    args: RegisterTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDomainVerificationCommand}
   */
  startDomainVerification(
    args: StartDomainVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDomainVerificationCommandOutput>;
  startDomainVerification(
    args: StartDomainVerificationCommandInput,
    cb: (err: any, data?: StartDomainVerificationCommandOutput) => void
  ): void;
  startDomainVerification(
    args: StartDomainVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDomainVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessLogSubscriptionCommand}
   */
  updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessLogSubscriptionCommandOutput>;
  updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void
  ): void;
  updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateListenerCommand}
   */
  updateListener(
    args: UpdateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateListenerCommandOutput>;
  updateListener(
    args: UpdateListenerCommandInput,
    cb: (err: any, data?: UpdateListenerCommandOutput) => void
  ): void;
  updateListener(
    args: UpdateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceConfigurationCommand}
   */
  updateResourceConfiguration(
    args: UpdateResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceConfigurationCommandOutput>;
  updateResourceConfiguration(
    args: UpdateResourceConfigurationCommandInput,
    cb: (err: any, data?: UpdateResourceConfigurationCommandOutput) => void
  ): void;
  updateResourceConfiguration(
    args: UpdateResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceGatewayCommand}
   */
  updateResourceGateway(
    args: UpdateResourceGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceGatewayCommandOutput>;
  updateResourceGateway(
    args: UpdateResourceGatewayCommandInput,
    cb: (err: any, data?: UpdateResourceGatewayCommandOutput) => void
  ): void;
  updateResourceGateway(
    args: UpdateResourceGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleCommand}
   */
  updateRule(
    args: UpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(
    args: UpdateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceCommandOutput>;
  updateService(
    args: UpdateServiceCommandInput,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceNetworkCommand}
   */
  updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceNetworkCommandOutput>;
  updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    cb: (err: any, data?: UpdateServiceNetworkCommandOutput) => void
  ): void;
  updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceNetworkVpcAssociationCommand}
   */
  updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceNetworkVpcAssociationCommandOutput>;
  updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTargetGroupCommand}
   */
  updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTargetGroupCommandOutput>;
  updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    cb: (err: any, data?: UpdateTargetGroupCommandOutput) => void
  ): void;
  updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessLogSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessLogSubscriptionsCommandOutput}.
   */
  paginateListAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessLogSubscriptionsCommandOutput>;

  /**
   * @see {@link ListDomainVerificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainVerificationsCommandOutput}.
   */
  paginateListDomainVerifications(
    args?: ListDomainVerificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainVerificationsCommandOutput>;

  /**
   * @see {@link ListListenersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListListenersCommandOutput}.
   */
  paginateListListeners(
    args: ListListenersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListListenersCommandOutput>;

  /**
   * @see {@link ListResourceConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceConfigurationsCommandOutput}.
   */
  paginateListResourceConfigurations(
    args?: ListResourceConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceConfigurationsCommandOutput>;

  /**
   * @see {@link ListResourceEndpointAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceEndpointAssociationsCommandOutput}.
   */
  paginateListResourceEndpointAssociations(
    args: ListResourceEndpointAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceEndpointAssociationsCommandOutput>;

  /**
   * @see {@link ListResourceGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceGatewaysCommandOutput}.
   */
  paginateListResourceGateways(
    args?: ListResourceGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceGatewaysCommandOutput>;

  /**
   * @see {@link ListRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesCommandOutput}.
   */
  paginateListRules(
    args: ListRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesCommandOutput>;

  /**
   * @see {@link ListServiceNetworkResourceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceNetworkResourceAssociationsCommandOutput}.
   */
  paginateListServiceNetworkResourceAssociations(
    args?: ListServiceNetworkResourceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceNetworkResourceAssociationsCommandOutput>;

  /**
   * @see {@link ListServiceNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceNetworksCommandOutput}.
   */
  paginateListServiceNetworks(
    args?: ListServiceNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceNetworksCommandOutput>;

  /**
   * @see {@link ListServiceNetworkServiceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceNetworkServiceAssociationsCommandOutput}.
   */
  paginateListServiceNetworkServiceAssociations(
    args?: ListServiceNetworkServiceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceNetworkServiceAssociationsCommandOutput>;

  /**
   * @see {@link ListServiceNetworkVpcAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceNetworkVpcAssociationsCommandOutput}.
   */
  paginateListServiceNetworkVpcAssociations(
    args?: ListServiceNetworkVpcAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceNetworkVpcAssociationsCommandOutput>;

  /**
   * @see {@link ListServiceNetworkVpcEndpointAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceNetworkVpcEndpointAssociationsCommandOutput}.
   */
  paginateListServiceNetworkVpcEndpointAssociations(
    args: ListServiceNetworkVpcEndpointAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceNetworkVpcEndpointAssociationsCommandOutput>;

  /**
   * @see {@link ListServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServicesCommandOutput}.
   */
  paginateListServices(
    args?: ListServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServicesCommandOutput>;

  /**
   * @see {@link ListTargetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTargetGroupsCommandOutput}.
   */
  paginateListTargetGroups(
    args?: ListTargetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTargetGroupsCommandOutput>;

  /**
   * @see {@link ListTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTargetsCommandOutput}.
   */
  paginateListTargets(
    args: ListTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTargetsCommandOutput>;
}

/**
 * <p>Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs). Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a> </p>
 * @public
 */
export class VPCLattice extends VPCLatticeClient implements VPCLattice {}
createAggregatedClient(commands, VPCLattice, { paginators });
