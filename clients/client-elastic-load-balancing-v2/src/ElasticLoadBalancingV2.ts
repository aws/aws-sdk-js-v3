// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AddListenerCertificatesCommandInput,
  type AddListenerCertificatesCommandOutput,
  AddListenerCertificatesCommand,
} from "./commands/AddListenerCertificatesCommand";
import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type AddTrustStoreRevocationsCommandInput,
  type AddTrustStoreRevocationsCommandOutput,
  AddTrustStoreRevocationsCommand,
} from "./commands/AddTrustStoreRevocationsCommand";
import {
  type CreateListenerCommandInput,
  type CreateListenerCommandOutput,
  CreateListenerCommand,
} from "./commands/CreateListenerCommand";
import {
  type CreateLoadBalancerCommandInput,
  type CreateLoadBalancerCommandOutput,
  CreateLoadBalancerCommand,
} from "./commands/CreateLoadBalancerCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateTargetGroupCommandInput,
  type CreateTargetGroupCommandOutput,
  CreateTargetGroupCommand,
} from "./commands/CreateTargetGroupCommand";
import {
  type CreateTrustStoreCommandInput,
  type CreateTrustStoreCommandOutput,
  CreateTrustStoreCommand,
} from "./commands/CreateTrustStoreCommand";
import {
  type DeleteListenerCommandInput,
  type DeleteListenerCommandOutput,
  DeleteListenerCommand,
} from "./commands/DeleteListenerCommand";
import {
  type DeleteLoadBalancerCommandInput,
  type DeleteLoadBalancerCommandOutput,
  DeleteLoadBalancerCommand,
} from "./commands/DeleteLoadBalancerCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteSharedTrustStoreAssociationCommandInput,
  type DeleteSharedTrustStoreAssociationCommandOutput,
  DeleteSharedTrustStoreAssociationCommand,
} from "./commands/DeleteSharedTrustStoreAssociationCommand";
import {
  type DeleteTargetGroupCommandInput,
  type DeleteTargetGroupCommandOutput,
  DeleteTargetGroupCommand,
} from "./commands/DeleteTargetGroupCommand";
import {
  type DeleteTrustStoreCommandInput,
  type DeleteTrustStoreCommandOutput,
  DeleteTrustStoreCommand,
} from "./commands/DeleteTrustStoreCommand";
import {
  type DeregisterTargetsCommandInput,
  type DeregisterTargetsCommandOutput,
  DeregisterTargetsCommand,
} from "./commands/DeregisterTargetsCommand";
import {
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeAccountLimitsCommand,
} from "./commands/DescribeAccountLimitsCommand";
import {
  type DescribeCapacityReservationCommandInput,
  type DescribeCapacityReservationCommandOutput,
  DescribeCapacityReservationCommand,
} from "./commands/DescribeCapacityReservationCommand";
import {
  type DescribeListenerAttributesCommandInput,
  type DescribeListenerAttributesCommandOutput,
  DescribeListenerAttributesCommand,
} from "./commands/DescribeListenerAttributesCommand";
import {
  type DescribeListenerCertificatesCommandInput,
  type DescribeListenerCertificatesCommandOutput,
  DescribeListenerCertificatesCommand,
} from "./commands/DescribeListenerCertificatesCommand";
import {
  type DescribeListenersCommandInput,
  type DescribeListenersCommandOutput,
  DescribeListenersCommand,
} from "./commands/DescribeListenersCommand";
import {
  type DescribeLoadBalancerAttributesCommandInput,
  type DescribeLoadBalancerAttributesCommandOutput,
  DescribeLoadBalancerAttributesCommand,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeLoadBalancersCommand,
} from "./commands/DescribeLoadBalancersCommand";
import {
  type DescribeRulesCommandInput,
  type DescribeRulesCommandOutput,
  DescribeRulesCommand,
} from "./commands/DescribeRulesCommand";
import {
  type DescribeSSLPoliciesCommandInput,
  type DescribeSSLPoliciesCommandOutput,
  DescribeSSLPoliciesCommand,
} from "./commands/DescribeSSLPoliciesCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DescribeTargetGroupAttributesCommandInput,
  type DescribeTargetGroupAttributesCommandOutput,
  DescribeTargetGroupAttributesCommand,
} from "./commands/DescribeTargetGroupAttributesCommand";
import {
  type DescribeTargetGroupsCommandInput,
  type DescribeTargetGroupsCommandOutput,
  DescribeTargetGroupsCommand,
} from "./commands/DescribeTargetGroupsCommand";
import {
  type DescribeTargetHealthCommandInput,
  type DescribeTargetHealthCommandOutput,
  DescribeTargetHealthCommand,
} from "./commands/DescribeTargetHealthCommand";
import {
  type DescribeTrustStoreAssociationsCommandInput,
  type DescribeTrustStoreAssociationsCommandOutput,
  DescribeTrustStoreAssociationsCommand,
} from "./commands/DescribeTrustStoreAssociationsCommand";
import {
  type DescribeTrustStoreRevocationsCommandInput,
  type DescribeTrustStoreRevocationsCommandOutput,
  DescribeTrustStoreRevocationsCommand,
} from "./commands/DescribeTrustStoreRevocationsCommand";
import {
  type DescribeTrustStoresCommandInput,
  type DescribeTrustStoresCommandOutput,
  DescribeTrustStoresCommand,
} from "./commands/DescribeTrustStoresCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetTrustStoreCaCertificatesBundleCommandInput,
  type GetTrustStoreCaCertificatesBundleCommandOutput,
  GetTrustStoreCaCertificatesBundleCommand,
} from "./commands/GetTrustStoreCaCertificatesBundleCommand";
import {
  type GetTrustStoreRevocationContentCommandInput,
  type GetTrustStoreRevocationContentCommandOutput,
  GetTrustStoreRevocationContentCommand,
} from "./commands/GetTrustStoreRevocationContentCommand";
import {
  type ModifyCapacityReservationCommandInput,
  type ModifyCapacityReservationCommandOutput,
  ModifyCapacityReservationCommand,
} from "./commands/ModifyCapacityReservationCommand";
import {
  type ModifyIpPoolsCommandInput,
  type ModifyIpPoolsCommandOutput,
  ModifyIpPoolsCommand,
} from "./commands/ModifyIpPoolsCommand";
import {
  type ModifyListenerAttributesCommandInput,
  type ModifyListenerAttributesCommandOutput,
  ModifyListenerAttributesCommand,
} from "./commands/ModifyListenerAttributesCommand";
import {
  type ModifyListenerCommandInput,
  type ModifyListenerCommandOutput,
  ModifyListenerCommand,
} from "./commands/ModifyListenerCommand";
import {
  type ModifyLoadBalancerAttributesCommandInput,
  type ModifyLoadBalancerAttributesCommandOutput,
  ModifyLoadBalancerAttributesCommand,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import {
  type ModifyRuleCommandInput,
  type ModifyRuleCommandOutput,
  ModifyRuleCommand,
} from "./commands/ModifyRuleCommand";
import {
  type ModifyTargetGroupAttributesCommandInput,
  type ModifyTargetGroupAttributesCommandOutput,
  ModifyTargetGroupAttributesCommand,
} from "./commands/ModifyTargetGroupAttributesCommand";
import {
  type ModifyTargetGroupCommandInput,
  type ModifyTargetGroupCommandOutput,
  ModifyTargetGroupCommand,
} from "./commands/ModifyTargetGroupCommand";
import {
  type ModifyTrustStoreCommandInput,
  type ModifyTrustStoreCommandOutput,
  ModifyTrustStoreCommand,
} from "./commands/ModifyTrustStoreCommand";
import {
  type RegisterTargetsCommandInput,
  type RegisterTargetsCommandOutput,
  RegisterTargetsCommand,
} from "./commands/RegisterTargetsCommand";
import {
  type RemoveListenerCertificatesCommandInput,
  type RemoveListenerCertificatesCommandOutput,
  RemoveListenerCertificatesCommand,
} from "./commands/RemoveListenerCertificatesCommand";
import {
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTagsCommand,
} from "./commands/RemoveTagsCommand";
import {
  type RemoveTrustStoreRevocationsCommandInput,
  type RemoveTrustStoreRevocationsCommandOutput,
  RemoveTrustStoreRevocationsCommand,
} from "./commands/RemoveTrustStoreRevocationsCommand";
import {
  type SetIpAddressTypeCommandInput,
  type SetIpAddressTypeCommandOutput,
  SetIpAddressTypeCommand,
} from "./commands/SetIpAddressTypeCommand";
import {
  type SetRulePrioritiesCommandInput,
  type SetRulePrioritiesCommandOutput,
  SetRulePrioritiesCommand,
} from "./commands/SetRulePrioritiesCommand";
import {
  type SetSecurityGroupsCommandInput,
  type SetSecurityGroupsCommandOutput,
  SetSecurityGroupsCommand,
} from "./commands/SetSecurityGroupsCommand";
import {
  type SetSubnetsCommandInput,
  type SetSubnetsCommandOutput,
  SetSubnetsCommand,
} from "./commands/SetSubnetsCommand";
import { ElasticLoadBalancingV2Client } from "./ElasticLoadBalancingV2Client";
import type { ElasticLoadBalancingV2ServiceException } from "./models/ElasticLoadBalancingV2ServiceException";
import type { InvalidTargetException, LoadBalancerNotFoundException } from "./models/errors";
import { paginateDescribeAccountLimits } from "./pagination/DescribeAccountLimitsPaginator";
import { paginateDescribeListenerCertificates } from "./pagination/DescribeListenerCertificatesPaginator";
import { paginateDescribeListeners } from "./pagination/DescribeListenersPaginator";
import { paginateDescribeLoadBalancers } from "./pagination/DescribeLoadBalancersPaginator";
import { paginateDescribeRules } from "./pagination/DescribeRulesPaginator";
import { paginateDescribeTargetGroups } from "./pagination/DescribeTargetGroupsPaginator";
import { paginateDescribeTrustStoreAssociations } from "./pagination/DescribeTrustStoreAssociationsPaginator";
import { paginateDescribeTrustStoreRevocations } from "./pagination/DescribeTrustStoreRevocationsPaginator";
import { paginateDescribeTrustStores } from "./pagination/DescribeTrustStoresPaginator";
import { waitUntilLoadBalancerAvailable } from "./waiters/waitForLoadBalancerAvailable";
import { waitUntilLoadBalancerExists } from "./waiters/waitForLoadBalancerExists";
import { waitUntilLoadBalancersDeleted } from "./waiters/waitForLoadBalancersDeleted";
import { waitUntilTargetDeregistered } from "./waiters/waitForTargetDeregistered";
import { waitUntilTargetInService } from "./waiters/waitForTargetInService";

const commands = {
  AddListenerCertificatesCommand,
  AddTagsCommand,
  AddTrustStoreRevocationsCommand,
  CreateListenerCommand,
  CreateLoadBalancerCommand,
  CreateRuleCommand,
  CreateTargetGroupCommand,
  CreateTrustStoreCommand,
  DeleteListenerCommand,
  DeleteLoadBalancerCommand,
  DeleteRuleCommand,
  DeleteSharedTrustStoreAssociationCommand,
  DeleteTargetGroupCommand,
  DeleteTrustStoreCommand,
  DeregisterTargetsCommand,
  DescribeAccountLimitsCommand,
  DescribeCapacityReservationCommand,
  DescribeListenerAttributesCommand,
  DescribeListenerCertificatesCommand,
  DescribeListenersCommand,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancersCommand,
  DescribeRulesCommand,
  DescribeSSLPoliciesCommand,
  DescribeTagsCommand,
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupsCommand,
  DescribeTargetHealthCommand,
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoresCommand,
  GetResourcePolicyCommand,
  GetTrustStoreCaCertificatesBundleCommand,
  GetTrustStoreRevocationContentCommand,
  ModifyCapacityReservationCommand,
  ModifyIpPoolsCommand,
  ModifyListenerCommand,
  ModifyListenerAttributesCommand,
  ModifyLoadBalancerAttributesCommand,
  ModifyRuleCommand,
  ModifyTargetGroupCommand,
  ModifyTargetGroupAttributesCommand,
  ModifyTrustStoreCommand,
  RegisterTargetsCommand,
  RemoveListenerCertificatesCommand,
  RemoveTagsCommand,
  RemoveTrustStoreRevocationsCommand,
  SetIpAddressTypeCommand,
  SetRulePrioritiesCommand,
  SetSecurityGroupsCommand,
  SetSubnetsCommand,
};
const paginators = {
  paginateDescribeAccountLimits,
  paginateDescribeListenerCertificates,
  paginateDescribeListeners,
  paginateDescribeLoadBalancers,
  paginateDescribeRules,
  paginateDescribeTargetGroups,
  paginateDescribeTrustStoreAssociations,
  paginateDescribeTrustStoreRevocations,
  paginateDescribeTrustStores,
};
const waiters = {
  waitUntilLoadBalancerAvailable,
  waitUntilLoadBalancerExists,
  waitUntilLoadBalancersDeleted,
  waitUntilTargetDeregistered,
  waitUntilTargetInService,
};

/**
 * @public
 */
export interface ElasticLoadBalancingV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ElasticLoadBalancingV2 {
  /**
   * @see {@link AddListenerCertificatesCommand}
   */
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<AddListenerCertificatesCommandOutput>;
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTrustStoreRevocationsCommand}
   */
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<AddTrustStoreRevocationsCommandOutput>;
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: AddTrustStoreRevocationsCommandOutput) => void
  ): void;
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: AddTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListenerCommand}
   */
  createListener(
    args: CreateListenerCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<CreateListenerCommandOutput>;
  createListener(
    args: CreateListenerCommandInput,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;
  createListener(
    args: CreateListenerCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerCommand}
   */
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTargetGroupCommand}
   */
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<CreateTargetGroupCommandOutput>;
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListenerCommand}
   */
  deleteListener(
    args: DeleteListenerCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteListenerCommandOutput>;
  deleteListener(
    args: DeleteListenerCommandInput,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;
  deleteListener(
    args: DeleteListenerCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerCommand}
   */
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSharedTrustStoreAssociationCommand}
   */
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteSharedTrustStoreAssociationCommandOutput>;
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    cb: (err: any, data?: DeleteSharedTrustStoreAssociationCommandOutput) => void
  ): void;
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteSharedTrustStoreAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetGroupCommand}
   */
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteTargetGroupCommandOutput>;
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTargetsCommand}
   */
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DeregisterTargetsCommandOutput>;
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityReservationCommand}
   */
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeCapacityReservationCommandOutput>;
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationCommandOutput) => void
  ): void;
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenerAttributesCommand}
   */
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeListenerAttributesCommandOutput>;
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    cb: (err: any, data?: DescribeListenerAttributesCommandOutput) => void
  ): void;
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeListenerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenerCertificatesCommand}
   */
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeListenerCertificatesCommandOutput>;
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenersCommand}
   */
  describeListeners(): Promise<DescribeListenersCommandOutput>;
  describeListeners(
    args: DescribeListenersCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeListenersCommandOutput>;
  describeListeners(
    args: DescribeListenersCommandInput,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;
  describeListeners(
    args: DescribeListenersCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerAttributesCommand}
   */
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeLoadBalancerAttributesCommandOutput>;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRulesCommand}
   */
  describeRules(): Promise<DescribeRulesCommandOutput>;
  describeRules(
    args: DescribeRulesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeRulesCommandOutput>;
  describeRules(
    args: DescribeRulesCommandInput,
    cb: (err: any, data?: DescribeRulesCommandOutput) => void
  ): void;
  describeRules(
    args: DescribeRulesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSSLPoliciesCommand}
   */
  describeSSLPolicies(): Promise<DescribeSSLPoliciesCommandOutput>;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeSSLPoliciesCommandOutput>;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetGroupAttributesCommand}
   */
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTargetGroupAttributesCommandOutput>;
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetGroupsCommand}
   */
  describeTargetGroups(): Promise<DescribeTargetGroupsCommandOutput>;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTargetGroupsCommandOutput>;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetHealthCommand}
   */
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTargetHealthCommandOutput>;
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoreAssociationsCommand}
   */
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTrustStoreAssociationsCommandOutput>;
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    cb: (err: any, data?: DescribeTrustStoreAssociationsCommandOutput) => void
  ): void;
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTrustStoreAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoreRevocationsCommand}
   */
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTrustStoreRevocationsCommandOutput>;
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: DescribeTrustStoreRevocationsCommandOutput) => void
  ): void;
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoresCommand}
   */
  describeTrustStores(): Promise<DescribeTrustStoresCommandOutput>;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<DescribeTrustStoresCommandOutput>;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    cb: (err: any, data?: DescribeTrustStoresCommandOutput) => void
  ): void;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: DescribeTrustStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreCaCertificatesBundleCommand}
   */
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<GetTrustStoreCaCertificatesBundleCommandOutput>;
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    cb: (err: any, data?: GetTrustStoreCaCertificatesBundleCommandOutput) => void
  ): void;
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: GetTrustStoreCaCertificatesBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreRevocationContentCommand}
   */
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<GetTrustStoreRevocationContentCommandOutput>;
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    cb: (err: any, data?: GetTrustStoreRevocationContentCommandOutput) => void
  ): void;
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: GetTrustStoreRevocationContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyCapacityReservationCommandOutput>;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpPoolsCommand}
   */
  modifyIpPools(
    args: ModifyIpPoolsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyIpPoolsCommandOutput>;
  modifyIpPools(
    args: ModifyIpPoolsCommandInput,
    cb: (err: any, data?: ModifyIpPoolsCommandOutput) => void
  ): void;
  modifyIpPools(
    args: ModifyIpPoolsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyIpPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyListenerCommand}
   */
  modifyListener(
    args: ModifyListenerCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyListenerCommandOutput>;
  modifyListener(
    args: ModifyListenerCommandInput,
    cb: (err: any, data?: ModifyListenerCommandOutput) => void
  ): void;
  modifyListener(
    args: ModifyListenerCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyListenerAttributesCommand}
   */
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyListenerAttributesCommandOutput>;
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    cb: (err: any, data?: ModifyListenerAttributesCommandOutput) => void
  ): void;
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyListenerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLoadBalancerAttributesCommand}
   */
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyLoadBalancerAttributesCommandOutput>;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyRuleCommand}
   */
  modifyRule(
    args: ModifyRuleCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyRuleCommandOutput>;
  modifyRule(
    args: ModifyRuleCommandInput,
    cb: (err: any, data?: ModifyRuleCommandOutput) => void
  ): void;
  modifyRule(
    args: ModifyRuleCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTargetGroupCommand}
   */
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyTargetGroupCommandOutput>;
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTargetGroupAttributesCommand}
   */
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyTargetGroupAttributesCommandOutput>;
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTrustStoreCommand}
   */
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<ModifyTrustStoreCommandOutput>;
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    cb: (err: any, data?: ModifyTrustStoreCommandOutput) => void
  ): void;
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: ModifyTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTargetsCommand}
   */
  registerTargets(
    args: RegisterTargetsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<RegisterTargetsCommandOutput>;
  registerTargets(
    args: RegisterTargetsCommandInput,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;
  registerTargets(
    args: RegisterTargetsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveListenerCertificatesCommand}
   */
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<RemoveListenerCertificatesCommandOutput>;
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<RemoveTagsCommandOutput>;
  removeTags(
    args: RemoveTagsCommandInput,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTrustStoreRevocationsCommand}
   */
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<RemoveTrustStoreRevocationsCommandOutput>;
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: RemoveTrustStoreRevocationsCommandOutput) => void
  ): void;
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: RemoveTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIpAddressTypeCommand}
   */
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<SetIpAddressTypeCommandOutput>;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRulePrioritiesCommand}
   */
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<SetRulePrioritiesCommandOutput>;
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSecurityGroupsCommand}
   */
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<SetSecurityGroupsCommandOutput>;
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSubnetsCommand}
   */
  setSubnets(
    args: SetSubnetsCommandInput,
    options?: ElasticLoadBalancingV2RequestOptions
  ): Promise<SetSubnetsCommandOutput>;
  setSubnets(
    args: SetSubnetsCommandInput,
    cb: (err: any, data?: SetSubnetsCommandOutput) => void
  ): void;
  setSubnets(
    args: SetSubnetsCommandInput,
    options: ElasticLoadBalancingV2RequestOptions,
    cb: (err: any, data?: SetSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAccountLimitsCommandOutput}.
   */
  paginateDescribeAccountLimits(
    args?: DescribeAccountLimitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAccountLimitsCommandOutput>;

  /**
   * @see {@link DescribeListenerCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeListenerCertificatesCommandOutput}.
   */
  paginateDescribeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeListenerCertificatesCommandOutput>;

  /**
   * @see {@link DescribeListenersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeListenersCommandOutput}.
   */
  paginateDescribeListeners(
    args?: DescribeListenersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeListenersCommandOutput>;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLoadBalancersCommandOutput}.
   */
  paginateDescribeLoadBalancers(
    args?: DescribeLoadBalancersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLoadBalancersCommandOutput>;

  /**
   * @see {@link DescribeRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRulesCommandOutput}.
   */
  paginateDescribeRules(
    args?: DescribeRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRulesCommandOutput>;

  /**
   * @see {@link DescribeTargetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTargetGroupsCommandOutput}.
   */
  paginateDescribeTargetGroups(
    args?: DescribeTargetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTargetGroupsCommandOutput>;

  /**
   * @see {@link DescribeTrustStoreAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTrustStoreAssociationsCommandOutput}.
   */
  paginateDescribeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTrustStoreAssociationsCommandOutput>;

  /**
   * @see {@link DescribeTrustStoreRevocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTrustStoreRevocationsCommandOutput}.
   */
  paginateDescribeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTrustStoreRevocationsCommandOutput>;

  /**
   * @see {@link DescribeTrustStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTrustStoresCommandOutput}.
   */
  paginateDescribeTrustStores(
    args?: DescribeTrustStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTrustStoresCommandOutput>;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLoadBalancerAvailable(
    args: DescribeLoadBalancersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancingV2>, "client">
  ): Promise<WaiterResult<DescribeLoadBalancersCommandOutput>>;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLoadBalancerExists(
    args: DescribeLoadBalancersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancingV2>, "client">
  ): Promise<WaiterResult<DescribeLoadBalancersCommandOutput>>;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLoadBalancersDeleted(
    args: DescribeLoadBalancersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancingV2>, "client">
  ): Promise<WaiterResult<LoadBalancerNotFoundException>>;

  /**
   * @see {@link DescribeTargetHealthCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTargetDeregistered(
    args: DescribeTargetHealthCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancingV2>, "client">
  ): Promise<WaiterResult<DescribeTargetHealthCommandOutput | InvalidTargetException>>;

  /**
   * @see {@link DescribeTargetHealthCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTargetInService(
    args: DescribeTargetHealthCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancingV2>, "client">
  ): Promise<WaiterResult<DescribeTargetHealthCommandOutput>>;
}

/**
 * <fullname>Elastic Load Balancing</fullname>
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances.
 *       This enables you to increase the availability of your application. The load balancer also
 *       monitors the health of its registered targets and ensures that it routes traffic only to
 *       healthy targets. You configure your load balancer to accept incoming traffic by specifying one
 *       or more listeners, which are configured with a protocol and port number for connections from
 *       clients to the load balancer. You configure a target group with a protocol and port number for
 *       connections from the load balancer to the targets, and with health check settings to be used
 *       when checking the health status of the targets.</p>
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This
 *       reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports
 *           HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP,
 *           TLS, UDP, and QUIC.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 * @public
 */
export class ElasticLoadBalancingV2 extends ElasticLoadBalancingV2Client implements ElasticLoadBalancingV2 {}
createAggregatedClient(commands, ElasticLoadBalancingV2, { paginators, waiters });
