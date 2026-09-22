// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type ApplySecurityGroupsToLoadBalancerCommandInput,
  type ApplySecurityGroupsToLoadBalancerCommandOutput,
  ApplySecurityGroupsToLoadBalancerCommand,
} from "./commands/ApplySecurityGroupsToLoadBalancerCommand";
import {
  type AttachLoadBalancerToSubnetsCommandInput,
  type AttachLoadBalancerToSubnetsCommandOutput,
  AttachLoadBalancerToSubnetsCommand,
} from "./commands/AttachLoadBalancerToSubnetsCommand";
import {
  type ConfigureHealthCheckCommandInput,
  type ConfigureHealthCheckCommandOutput,
  ConfigureHealthCheckCommand,
} from "./commands/ConfigureHealthCheckCommand";
import {
  type CreateAppCookieStickinessPolicyCommandInput,
  type CreateAppCookieStickinessPolicyCommandOutput,
  CreateAppCookieStickinessPolicyCommand,
} from "./commands/CreateAppCookieStickinessPolicyCommand";
import {
  type CreateLBCookieStickinessPolicyCommandInput,
  type CreateLBCookieStickinessPolicyCommandOutput,
  CreateLBCookieStickinessPolicyCommand,
} from "./commands/CreateLBCookieStickinessPolicyCommand";
import {
  type CreateLoadBalancerCommandInput,
  type CreateLoadBalancerCommandOutput,
  CreateLoadBalancerCommand,
} from "./commands/CreateLoadBalancerCommand";
import {
  type CreateLoadBalancerListenersCommandInput,
  type CreateLoadBalancerListenersCommandOutput,
  CreateLoadBalancerListenersCommand,
} from "./commands/CreateLoadBalancerListenersCommand";
import {
  type CreateLoadBalancerPolicyCommandInput,
  type CreateLoadBalancerPolicyCommandOutput,
  CreateLoadBalancerPolicyCommand,
} from "./commands/CreateLoadBalancerPolicyCommand";
import {
  type DeleteLoadBalancerCommandInput,
  type DeleteLoadBalancerCommandOutput,
  DeleteLoadBalancerCommand,
} from "./commands/DeleteLoadBalancerCommand";
import {
  type DeleteLoadBalancerListenersCommandInput,
  type DeleteLoadBalancerListenersCommandOutput,
  DeleteLoadBalancerListenersCommand,
} from "./commands/DeleteLoadBalancerListenersCommand";
import {
  type DeleteLoadBalancerPolicyCommandInput,
  type DeleteLoadBalancerPolicyCommandOutput,
  DeleteLoadBalancerPolicyCommand,
} from "./commands/DeleteLoadBalancerPolicyCommand";
import {
  type DeregisterInstancesFromLoadBalancerCommandInput,
  type DeregisterInstancesFromLoadBalancerCommandOutput,
  DeregisterInstancesFromLoadBalancerCommand,
} from "./commands/DeregisterInstancesFromLoadBalancerCommand";
import {
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeAccountLimitsCommand,
} from "./commands/DescribeAccountLimitsCommand";
import {
  type DescribeInstanceHealthCommandInput,
  type DescribeInstanceHealthCommandOutput,
  DescribeInstanceHealthCommand,
} from "./commands/DescribeInstanceHealthCommand";
import {
  type DescribeLoadBalancerAttributesCommandInput,
  type DescribeLoadBalancerAttributesCommandOutput,
  DescribeLoadBalancerAttributesCommand,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  type DescribeLoadBalancerPoliciesCommandInput,
  type DescribeLoadBalancerPoliciesCommandOutput,
  DescribeLoadBalancerPoliciesCommand,
} from "./commands/DescribeLoadBalancerPoliciesCommand";
import {
  type DescribeLoadBalancerPolicyTypesCommandInput,
  type DescribeLoadBalancerPolicyTypesCommandOutput,
  DescribeLoadBalancerPolicyTypesCommand,
} from "./commands/DescribeLoadBalancerPolicyTypesCommand";
import {
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeLoadBalancersCommand,
} from "./commands/DescribeLoadBalancersCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DetachLoadBalancerFromSubnetsCommandInput,
  type DetachLoadBalancerFromSubnetsCommandOutput,
  DetachLoadBalancerFromSubnetsCommand,
} from "./commands/DetachLoadBalancerFromSubnetsCommand";
import {
  type DisableAvailabilityZonesForLoadBalancerCommandInput,
  type DisableAvailabilityZonesForLoadBalancerCommandOutput,
  DisableAvailabilityZonesForLoadBalancerCommand,
} from "./commands/DisableAvailabilityZonesForLoadBalancerCommand";
import {
  type EnableAvailabilityZonesForLoadBalancerCommandInput,
  type EnableAvailabilityZonesForLoadBalancerCommandOutput,
  EnableAvailabilityZonesForLoadBalancerCommand,
} from "./commands/EnableAvailabilityZonesForLoadBalancerCommand";
import {
  type ModifyLoadBalancerAttributesCommandInput,
  type ModifyLoadBalancerAttributesCommandOutput,
  ModifyLoadBalancerAttributesCommand,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import {
  type RegisterInstancesWithLoadBalancerCommandInput,
  type RegisterInstancesWithLoadBalancerCommandOutput,
  RegisterInstancesWithLoadBalancerCommand,
} from "./commands/RegisterInstancesWithLoadBalancerCommand";
import {
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTagsCommand,
} from "./commands/RemoveTagsCommand";
import {
  type SetLoadBalancerListenerSSLCertificateCommandInput,
  type SetLoadBalancerListenerSSLCertificateCommandOutput,
  SetLoadBalancerListenerSSLCertificateCommand,
} from "./commands/SetLoadBalancerListenerSSLCertificateCommand";
import {
  type SetLoadBalancerPoliciesForBackendServerCommandInput,
  type SetLoadBalancerPoliciesForBackendServerCommandOutput,
  SetLoadBalancerPoliciesForBackendServerCommand,
} from "./commands/SetLoadBalancerPoliciesForBackendServerCommand";
import {
  type SetLoadBalancerPoliciesOfListenerCommandInput,
  type SetLoadBalancerPoliciesOfListenerCommandOutput,
  SetLoadBalancerPoliciesOfListenerCommand,
} from "./commands/SetLoadBalancerPoliciesOfListenerCommand";
import { ElasticLoadBalancingClient } from "./ElasticLoadBalancingClient";
import type { ElasticLoadBalancingServiceException } from "./models/ElasticLoadBalancingServiceException";
import type { InvalidEndPointException } from "./models/errors";
import { paginateDescribeLoadBalancers } from "./pagination/DescribeLoadBalancersPaginator";
import { waitUntilAnyInstanceInService } from "./waiters/waitForAnyInstanceInService";
import { waitUntilInstanceDeregistered } from "./waiters/waitForInstanceDeregistered";
import { waitUntilInstanceInService } from "./waiters/waitForInstanceInService";

const commands = {
  AddTagsCommand,
  ApplySecurityGroupsToLoadBalancerCommand,
  AttachLoadBalancerToSubnetsCommand,
  ConfigureHealthCheckCommand,
  CreateAppCookieStickinessPolicyCommand,
  CreateLBCookieStickinessPolicyCommand,
  CreateLoadBalancerCommand,
  CreateLoadBalancerListenersCommand,
  CreateLoadBalancerPolicyCommand,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerListenersCommand,
  DeleteLoadBalancerPolicyCommand,
  DeregisterInstancesFromLoadBalancerCommand,
  DescribeAccountLimitsCommand,
  DescribeInstanceHealthCommand,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerPoliciesCommand,
  DescribeLoadBalancerPolicyTypesCommand,
  DescribeLoadBalancersCommand,
  DescribeTagsCommand,
  DetachLoadBalancerFromSubnetsCommand,
  DisableAvailabilityZonesForLoadBalancerCommand,
  EnableAvailabilityZonesForLoadBalancerCommand,
  ModifyLoadBalancerAttributesCommand,
  RegisterInstancesWithLoadBalancerCommand,
  RemoveTagsCommand,
  SetLoadBalancerListenerSSLCertificateCommand,
  SetLoadBalancerPoliciesForBackendServerCommand,
  SetLoadBalancerPoliciesOfListenerCommand,
};
const paginators = {
  paginateDescribeLoadBalancers,
};
const waiters = {
  waitUntilAnyInstanceInService,
  waitUntilInstanceDeregistered,
  waitUntilInstanceInService,
};

/**
 * @public
 */
export interface ElasticLoadBalancingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ElasticLoadBalancing {
  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplySecurityGroupsToLoadBalancerCommand}
   */
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput>;
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    cb: (err: any, data?: ApplySecurityGroupsToLoadBalancerCommandOutput) => void
  ): void;
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: ApplySecurityGroupsToLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancerToSubnetsCommand}
   */
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<AttachLoadBalancerToSubnetsCommandOutput>;
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    cb: (err: any, data?: AttachLoadBalancerToSubnetsCommandOutput) => void
  ): void;
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: AttachLoadBalancerToSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureHealthCheckCommand}
   */
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<ConfigureHealthCheckCommandOutput>;
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    cb: (err: any, data?: ConfigureHealthCheckCommandOutput) => void
  ): void;
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: ConfigureHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppCookieStickinessPolicyCommand}
   */
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<CreateAppCookieStickinessPolicyCommandOutput>;
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    cb: (err: any, data?: CreateAppCookieStickinessPolicyCommandOutput) => void
  ): void;
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: CreateAppCookieStickinessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLBCookieStickinessPolicyCommand}
   */
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<CreateLBCookieStickinessPolicyCommandOutput>;
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    cb: (err: any, data?: CreateLBCookieStickinessPolicyCommandOutput) => void
  ): void;
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: CreateLBCookieStickinessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerCommand}
   */
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerListenersCommand}
   */
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<CreateLoadBalancerListenersCommandOutput>;
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    cb: (err: any, data?: CreateLoadBalancerListenersCommandOutput) => void
  ): void;
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: CreateLoadBalancerListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerPolicyCommand}
   */
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<CreateLoadBalancerPolicyCommandOutput>;
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    cb: (err: any, data?: CreateLoadBalancerPolicyCommandOutput) => void
  ): void;
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: CreateLoadBalancerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerCommand}
   */
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerListenersCommand}
   */
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DeleteLoadBalancerListenersCommandOutput>;
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerListenersCommandOutput) => void
  ): void;
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DeleteLoadBalancerListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerPolicyCommand}
   */
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DeleteLoadBalancerPolicyCommandOutput>;
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerPolicyCommandOutput) => void
  ): void;
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DeleteLoadBalancerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterInstancesFromLoadBalancerCommand}
   */
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DeregisterInstancesFromLoadBalancerCommandOutput>;
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    cb: (err: any, data?: DeregisterInstancesFromLoadBalancerCommandOutput) => void
  ): void;
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DeregisterInstancesFromLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceHealthCommand}
   */
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeInstanceHealthCommandOutput>;
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    cb: (err: any, data?: DescribeInstanceHealthCommandOutput) => void
  ): void;
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeInstanceHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerAttributesCommand}
   */
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeLoadBalancerAttributesCommandOutput>;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerPoliciesCommand}
   */
  describeLoadBalancerPolicies(): Promise<DescribeLoadBalancerPoliciesCommandOutput>;
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeLoadBalancerPoliciesCommandOutput>;
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerPoliciesCommandOutput) => void
  ): void;
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancerPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerPolicyTypesCommand}
   */
  describeLoadBalancerPolicyTypes(): Promise<DescribeLoadBalancerPolicyTypesCommandOutput>;
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeLoadBalancerPolicyTypesCommandOutput>;
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerPolicyTypesCommandOutput) => void
  ): void;
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancerPolicyTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachLoadBalancerFromSubnetsCommand}
   */
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DetachLoadBalancerFromSubnetsCommandOutput>;
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    cb: (err: any, data?: DetachLoadBalancerFromSubnetsCommandOutput) => void
  ): void;
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DetachLoadBalancerFromSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAvailabilityZonesForLoadBalancerCommand}
   */
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput>;
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    cb: (err: any, data?: DisableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: DisableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAvailabilityZonesForLoadBalancerCommand}
   */
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput>;
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    cb: (err: any, data?: EnableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: EnableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLoadBalancerAttributesCommand}
   */
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<ModifyLoadBalancerAttributesCommandOutput>;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterInstancesWithLoadBalancerCommand}
   */
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<RegisterInstancesWithLoadBalancerCommandOutput>;
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    cb: (err: any, data?: RegisterInstancesWithLoadBalancerCommandOutput) => void
  ): void;
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: RegisterInstancesWithLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<RemoveTagsCommandOutput>;
  removeTags(
    args: RemoveTagsCommandInput,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBalancerListenerSSLCertificateCommand}
   */
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput>;
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    cb: (err: any, data?: SetLoadBalancerListenerSSLCertificateCommandOutput) => void
  ): void;
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: SetLoadBalancerListenerSSLCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBalancerPoliciesForBackendServerCommand}
   */
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput>;
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesForBackendServerCommandOutput) => void
  ): void;
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: SetLoadBalancerPoliciesForBackendServerCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBalancerPoliciesOfListenerCommand}
   */
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    options?: ElasticLoadBalancingRequestOptions
  ): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput>;
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesOfListenerCommandOutput) => void
  ): void;
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    options: ElasticLoadBalancingRequestOptions,
    cb: (err: any, data?: SetLoadBalancerPoliciesOfListenerCommandOutput) => void
  ): void;

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
   * @see {@link DescribeInstanceHealthCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnyInstanceInService(
    args: DescribeInstanceHealthCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancing>, "client">
  ): Promise<WaiterResult<DescribeInstanceHealthCommandOutput>>;

  /**
   * @see {@link DescribeInstanceHealthCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInstanceDeregistered(
    args: DescribeInstanceHealthCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancing>, "client">
  ): Promise<WaiterResult<DescribeInstanceHealthCommandOutput | InvalidEndPointException>>;

  /**
   * @see {@link DescribeInstanceHealthCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInstanceInService(
    args: DescribeInstanceHealthCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticLoadBalancing>, "client">
  ): Promise<WaiterResult<DescribeInstanceHealthCommandOutput>>;
}

/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *         <p>A load balancer can distribute incoming traffic across your EC2 instances.
 *             This enables you to increase the availability of your application. The load balancer
 *             also monitors the health of its registered instances and ensures that it routes traffic
 *             only to healthy instances. You configure your load balancer to accept incoming traffic
 *             by specifying one or more listeners, which are configured with a protocol and port
 *             number for connections from clients to the load balancer and a protocol and port number
 *             for connections from the load balancer to the instances.</p>
 *         <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
 *             and Classic Load Balancers. You can select a load balancer based on your application needs. For more
 *             information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *         <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
 *             The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>
 *
 *         <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
 *             Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>
 *
 *         <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
 *             that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
 *             response code.</p>
 * @public
 */
export class ElasticLoadBalancing extends ElasticLoadBalancingClient implements ElasticLoadBalancing {}
createAggregatedClient(commands, ElasticLoadBalancing, { paginators, waiters });
