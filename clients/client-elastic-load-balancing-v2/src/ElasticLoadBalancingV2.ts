// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddListenerCertificatesCommand,
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
} from "./commands/AddListenerCertificatesCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  AddTrustStoreRevocationsCommand,
  AddTrustStoreRevocationsCommandInput,
  AddTrustStoreRevocationsCommandOutput,
} from "./commands/AddTrustStoreRevocationsCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
} from "./commands/CreateListenerCommand";
import {
  CreateLoadBalancerCommand,
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
} from "./commands/CreateLoadBalancerCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateTargetGroupCommand,
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput,
} from "./commands/CreateTargetGroupCommand";
import {
  CreateTrustStoreCommand,
  CreateTrustStoreCommandInput,
  CreateTrustStoreCommandOutput,
} from "./commands/CreateTrustStoreCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput,
} from "./commands/DeleteListenerCommand";
import {
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
} from "./commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteSharedTrustStoreAssociationCommand,
  DeleteSharedTrustStoreAssociationCommandInput,
  DeleteSharedTrustStoreAssociationCommandOutput,
} from "./commands/DeleteSharedTrustStoreAssociationCommand";
import {
  DeleteTargetGroupCommand,
  DeleteTargetGroupCommandInput,
  DeleteTargetGroupCommandOutput,
} from "./commands/DeleteTargetGroupCommand";
import {
  DeleteTrustStoreCommand,
  DeleteTrustStoreCommandInput,
  DeleteTrustStoreCommandOutput,
} from "./commands/DeleteTrustStoreCommand";
import {
  DeregisterTargetsCommand,
  DeregisterTargetsCommandInput,
  DeregisterTargetsCommandOutput,
} from "./commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeCapacityReservationCommand,
  DescribeCapacityReservationCommandInput,
  DescribeCapacityReservationCommandOutput,
} from "./commands/DescribeCapacityReservationCommand";
import {
  DescribeListenerAttributesCommand,
  DescribeListenerAttributesCommandInput,
  DescribeListenerAttributesCommandOutput,
} from "./commands/DescribeListenerAttributesCommand";
import {
  DescribeListenerCertificatesCommand,
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "./commands/DescribeListenerCertificatesCommand";
import {
  DescribeListenersCommand,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput,
} from "./commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeRulesCommand,
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput,
} from "./commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommand,
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
} from "./commands/DescribeSSLPoliciesCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput,
} from "./commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "./commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommand,
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
} from "./commands/DescribeTargetHealthCommand";
import {
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput,
} from "./commands/DescribeTrustStoreAssociationsCommand";
import {
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoreRevocationsCommandInput,
  DescribeTrustStoreRevocationsCommandOutput,
} from "./commands/DescribeTrustStoreRevocationsCommand";
import {
  DescribeTrustStoresCommand,
  DescribeTrustStoresCommandInput,
  DescribeTrustStoresCommandOutput,
} from "./commands/DescribeTrustStoresCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetTrustStoreCaCertificatesBundleCommand,
  GetTrustStoreCaCertificatesBundleCommandInput,
  GetTrustStoreCaCertificatesBundleCommandOutput,
} from "./commands/GetTrustStoreCaCertificatesBundleCommand";
import {
  GetTrustStoreRevocationContentCommand,
  GetTrustStoreRevocationContentCommandInput,
  GetTrustStoreRevocationContentCommandOutput,
} from "./commands/GetTrustStoreRevocationContentCommand";
import {
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
} from "./commands/ModifyCapacityReservationCommand";
import {
  ModifyListenerAttributesCommand,
  ModifyListenerAttributesCommandInput,
  ModifyListenerAttributesCommandOutput,
} from "./commands/ModifyListenerAttributesCommand";
import {
  ModifyListenerCommand,
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput,
} from "./commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommand,
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommand, ModifyRuleCommandInput, ModifyRuleCommandOutput } from "./commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommand,
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
} from "./commands/ModifyTargetGroupAttributesCommand";
import {
  ModifyTargetGroupCommand,
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput,
} from "./commands/ModifyTargetGroupCommand";
import {
  ModifyTrustStoreCommand,
  ModifyTrustStoreCommandInput,
  ModifyTrustStoreCommandOutput,
} from "./commands/ModifyTrustStoreCommand";
import {
  RegisterTargetsCommand,
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
} from "./commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommand,
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
} from "./commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RemoveTrustStoreRevocationsCommand,
  RemoveTrustStoreRevocationsCommandInput,
  RemoveTrustStoreRevocationsCommandOutput,
} from "./commands/RemoveTrustStoreRevocationsCommand";
import {
  SetIpAddressTypeCommand,
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
} from "./commands/SetIpAddressTypeCommand";
import {
  SetRulePrioritiesCommand,
  SetRulePrioritiesCommandInput,
  SetRulePrioritiesCommandOutput,
} from "./commands/SetRulePrioritiesCommand";
import {
  SetSecurityGroupsCommand,
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput,
} from "./commands/SetSecurityGroupsCommand";
import { SetSubnetsCommand, SetSubnetsCommandInput, SetSubnetsCommandOutput } from "./commands/SetSubnetsCommand";
import { ElasticLoadBalancingV2Client, ElasticLoadBalancingV2ClientConfig } from "./ElasticLoadBalancingV2Client";

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

export interface ElasticLoadBalancingV2 {
  /**
   * @see {@link AddListenerCertificatesCommand}
   */
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddListenerCertificatesCommandOutput>;
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTrustStoreRevocationsCommand}
   */
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTrustStoreRevocationsCommandOutput>;
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: AddTrustStoreRevocationsCommandOutput) => void
  ): void;
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListenerCommand}
   */
  createListener(
    args: CreateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateListenerCommandOutput>;
  createListener(args: CreateListenerCommandInput, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
  createListener(
    args: CreateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerCommand}
   */
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
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
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListenerCommand}
   */
  deleteListener(
    args: DeleteListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteListenerCommandOutput>;
  deleteListener(args: DeleteListenerCommandInput, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
  deleteListener(
    args: DeleteListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerCommand}
   */
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSharedTrustStoreAssociationCommand}
   */
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSharedTrustStoreAssociationCommandOutput>;
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    cb: (err: any, data?: DeleteSharedTrustStoreAssociationCommandOutput) => void
  ): void;
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSharedTrustStoreAssociationCommandOutput) => void
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
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
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
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityReservationCommand}
   */
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityReservationCommandOutput>;
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationCommandOutput) => void
  ): void;
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenerAttributesCommand}
   */
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenerAttributesCommandOutput>;
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    cb: (err: any, data?: DescribeListenerAttributesCommandOutput) => void
  ): void;
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenerCertificatesCommand}
   */
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenerCertificatesCommandOutput>;
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenersCommand}
   */
  describeListeners(): Promise<DescribeListenersCommandOutput>;
  describeListeners(
    args: DescribeListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenersCommandOutput>;
  describeListeners(
    args: DescribeListenersCommandInput,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;
  describeListeners(
    args: DescribeListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerAttributesCommand}
   */
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerAttributesCommandOutput>;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRulesCommand}
   */
  describeRules(): Promise<DescribeRulesCommandOutput>;
  describeRules(args: DescribeRulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRulesCommandOutput>;
  describeRules(args: DescribeRulesCommandInput, cb: (err: any, data?: DescribeRulesCommandOutput) => void): void;
  describeRules(
    args: DescribeRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSSLPoliciesCommand}
   */
  describeSSLPolicies(): Promise<DescribeSSLPoliciesCommandOutput>;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSSLPoliciesCommandOutput>;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetGroupAttributesCommand}
   */
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetGroupAttributesCommandOutput>;
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetGroupsCommand}
   */
  describeTargetGroups(): Promise<DescribeTargetGroupsCommandOutput>;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetGroupsCommandOutput>;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetHealthCommand}
   */
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetHealthCommandOutput>;
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoreAssociationsCommand}
   */
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustStoreAssociationsCommandOutput>;
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    cb: (err: any, data?: DescribeTrustStoreAssociationsCommandOutput) => void
  ): void;
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustStoreAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoreRevocationsCommand}
   */
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustStoreRevocationsCommandOutput>;
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: DescribeTrustStoreRevocationsCommandOutput) => void
  ): void;
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustStoresCommand}
   */
  describeTrustStores(): Promise<DescribeTrustStoresCommandOutput>;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustStoresCommandOutput>;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    cb: (err: any, data?: DescribeTrustStoresCommandOutput) => void
  ): void;
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustStoresCommandOutput) => void
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
   * @see {@link GetTrustStoreCaCertificatesBundleCommand}
   */
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreCaCertificatesBundleCommandOutput>;
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    cb: (err: any, data?: GetTrustStoreCaCertificatesBundleCommandOutput) => void
  ): void;
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCaCertificatesBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreRevocationContentCommand}
   */
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreRevocationContentCommandOutput>;
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    cb: (err: any, data?: GetTrustStoreRevocationContentCommandOutput) => void
  ): void;
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreRevocationContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCapacityReservationCommandOutput>;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyListenerCommand}
   */
  modifyListener(
    args: ModifyListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyListenerCommandOutput>;
  modifyListener(args: ModifyListenerCommandInput, cb: (err: any, data?: ModifyListenerCommandOutput) => void): void;
  modifyListener(
    args: ModifyListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyListenerAttributesCommand}
   */
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyListenerAttributesCommandOutput>;
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    cb: (err: any, data?: ModifyListenerAttributesCommandOutput) => void
  ): void;
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyListenerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLoadBalancerAttributesCommand}
   */
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLoadBalancerAttributesCommandOutput>;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyRuleCommand}
   */
  modifyRule(args: ModifyRuleCommandInput, options?: __HttpHandlerOptions): Promise<ModifyRuleCommandOutput>;
  modifyRule(args: ModifyRuleCommandInput, cb: (err: any, data?: ModifyRuleCommandOutput) => void): void;
  modifyRule(
    args: ModifyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTargetGroupCommand}
   */
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTargetGroupCommandOutput>;
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTargetGroupAttributesCommand}
   */
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTargetGroupAttributesCommandOutput>;
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTrustStoreCommand}
   */
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrustStoreCommandOutput>;
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    cb: (err: any, data?: ModifyTrustStoreCommandOutput) => void
  ): void;
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTargetsCommand}
   */
  registerTargets(
    args: RegisterTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTargetsCommandOutput>;
  registerTargets(args: RegisterTargetsCommandInput, cb: (err: any, data?: RegisterTargetsCommandOutput) => void): void;
  registerTargets(
    args: RegisterTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveListenerCertificatesCommand}
   */
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveListenerCertificatesCommandOutput>;
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTrustStoreRevocationsCommand}
   */
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTrustStoreRevocationsCommandOutput>;
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    cb: (err: any, data?: RemoveTrustStoreRevocationsCommandOutput) => void
  ): void;
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTrustStoreRevocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIpAddressTypeCommand}
   */
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIpAddressTypeCommandOutput>;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRulePrioritiesCommand}
   */
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRulePrioritiesCommandOutput>;
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSecurityGroupsCommand}
   */
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSecurityGroupsCommandOutput>;
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSubnetsCommand}
   */
  setSubnets(args: SetSubnetsCommandInput, options?: __HttpHandlerOptions): Promise<SetSubnetsCommandOutput>;
  setSubnets(args: SetSubnetsCommandInput, cb: (err: any, data?: SetSubnetsCommandOutput) => void): void;
  setSubnets(
    args: SetSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSubnetsCommandOutput) => void
  ): void;
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
 *           TLS, and UDP.</p>
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
createAggregatedClient(commands, ElasticLoadBalancingV2);
