// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  ApplySecurityGroupsToLoadBalancerCommand,
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput,
} from "./commands/ApplySecurityGroupsToLoadBalancerCommand";
import {
  AttachLoadBalancerToSubnetsCommand,
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
} from "./commands/AttachLoadBalancerToSubnetsCommand";
import {
  ConfigureHealthCheckCommand,
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
} from "./commands/ConfigureHealthCheckCommand";
import {
  CreateAppCookieStickinessPolicyCommand,
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput,
} from "./commands/CreateAppCookieStickinessPolicyCommand";
import {
  CreateLBCookieStickinessPolicyCommand,
  CreateLBCookieStickinessPolicyCommandInput,
  CreateLBCookieStickinessPolicyCommandOutput,
} from "./commands/CreateLBCookieStickinessPolicyCommand";
import {
  CreateLoadBalancerCommand,
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
} from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerListenersCommand,
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput,
} from "./commands/CreateLoadBalancerListenersCommand";
import {
  CreateLoadBalancerPolicyCommand,
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
} from "./commands/CreateLoadBalancerPolicyCommand";
import {
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
} from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerListenersCommand,
  DeleteLoadBalancerListenersCommandInput,
  DeleteLoadBalancerListenersCommandOutput,
} from "./commands/DeleteLoadBalancerListenersCommand";
import {
  DeleteLoadBalancerPolicyCommand,
  DeleteLoadBalancerPolicyCommandInput,
  DeleteLoadBalancerPolicyCommandOutput,
} from "./commands/DeleteLoadBalancerPolicyCommand";
import {
  DeregisterInstancesFromLoadBalancerCommand,
  DeregisterInstancesFromLoadBalancerCommandInput,
  DeregisterInstancesFromLoadBalancerCommandOutput,
} from "./commands/DeregisterInstancesFromLoadBalancerCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeInstanceHealthCommand,
  DescribeInstanceHealthCommandInput,
  DescribeInstanceHealthCommandOutput,
} from "./commands/DescribeInstanceHealthCommand";
import {
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancerPoliciesCommand,
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput,
} from "./commands/DescribeLoadBalancerPoliciesCommand";
import {
  DescribeLoadBalancerPolicyTypesCommand,
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
} from "./commands/DescribeLoadBalancerPolicyTypesCommand";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DetachLoadBalancerFromSubnetsCommand,
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput,
} from "./commands/DetachLoadBalancerFromSubnetsCommand";
import {
  DisableAvailabilityZonesForLoadBalancerCommand,
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput,
} from "./commands/DisableAvailabilityZonesForLoadBalancerCommand";
import {
  EnableAvailabilityZonesForLoadBalancerCommand,
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput,
} from "./commands/EnableAvailabilityZonesForLoadBalancerCommand";
import {
  ModifyLoadBalancerAttributesCommand,
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import {
  RegisterInstancesWithLoadBalancerCommand,
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput,
} from "./commands/RegisterInstancesWithLoadBalancerCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  SetLoadBalancerListenerSSLCertificateCommand,
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput,
} from "./commands/SetLoadBalancerListenerSSLCertificateCommand";
import {
  SetLoadBalancerPoliciesForBackendServerCommand,
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput,
} from "./commands/SetLoadBalancerPoliciesForBackendServerCommand";
import {
  SetLoadBalancerPoliciesOfListenerCommand,
  SetLoadBalancerPoliciesOfListenerCommandInput,
  SetLoadBalancerPoliciesOfListenerCommandOutput,
} from "./commands/SetLoadBalancerPoliciesOfListenerCommand";
import { ElasticLoadBalancingClient, ElasticLoadBalancingClientConfig } from "./ElasticLoadBalancingClient";

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

export interface ElasticLoadBalancing {
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
   * @see {@link ApplySecurityGroupsToLoadBalancerCommand}
   */
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput>;
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    cb: (err: any, data?: ApplySecurityGroupsToLoadBalancerCommandOutput) => void
  ): void;
  applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySecurityGroupsToLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancerToSubnetsCommand}
   */
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancerToSubnetsCommandOutput>;
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    cb: (err: any, data?: AttachLoadBalancerToSubnetsCommandOutput) => void
  ): void;
  attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancerToSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureHealthCheckCommand}
   */
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureHealthCheckCommandOutput>;
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    cb: (err: any, data?: ConfigureHealthCheckCommandOutput) => void
  ): void;
  configureHealthCheck(
    args: ConfigureHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppCookieStickinessPolicyCommand}
   */
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppCookieStickinessPolicyCommandOutput>;
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    cb: (err: any, data?: CreateAppCookieStickinessPolicyCommandOutput) => void
  ): void;
  createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCookieStickinessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLBCookieStickinessPolicyCommand}
   */
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLBCookieStickinessPolicyCommandOutput>;
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    cb: (err: any, data?: CreateLBCookieStickinessPolicyCommandOutput) => void
  ): void;
  createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLBCookieStickinessPolicyCommandOutput) => void
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
   * @see {@link CreateLoadBalancerListenersCommand}
   */
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerListenersCommandOutput>;
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    cb: (err: any, data?: CreateLoadBalancerListenersCommandOutput) => void
  ): void;
  createLoadBalancerListeners(
    args: CreateLoadBalancerListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerPolicyCommand}
   */
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerPolicyCommandOutput>;
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    cb: (err: any, data?: CreateLoadBalancerPolicyCommandOutput) => void
  ): void;
  createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerPolicyCommandOutput) => void
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
   * @see {@link DeleteLoadBalancerListenersCommand}
   */
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerListenersCommandOutput>;
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerListenersCommandOutput) => void
  ): void;
  deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerPolicyCommand}
   */
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerPolicyCommandOutput>;
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerPolicyCommandOutput) => void
  ): void;
  deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterInstancesFromLoadBalancerCommand}
   */
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstancesFromLoadBalancerCommandOutput>;
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    cb: (err: any, data?: DeregisterInstancesFromLoadBalancerCommandOutput) => void
  ): void;
  deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstancesFromLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
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
   * @see {@link DescribeInstanceHealthCommand}
   */
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceHealthCommandOutput>;
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    cb: (err: any, data?: DescribeInstanceHealthCommandOutput) => void
  ): void;
  describeInstanceHealth(
    args: DescribeInstanceHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceHealthCommandOutput) => void
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
   * @see {@link DescribeLoadBalancerPoliciesCommand}
   */
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerPoliciesCommandOutput>;
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerPoliciesCommandOutput) => void
  ): void;
  describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerPolicyTypesCommand}
   */
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerPolicyTypesCommandOutput>;
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerPolicyTypesCommandOutput) => void
  ): void;
  describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerPolicyTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
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
   * @see {@link DetachLoadBalancerFromSubnetsCommand}
   */
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachLoadBalancerFromSubnetsCommandOutput>;
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    cb: (err: any, data?: DetachLoadBalancerFromSubnetsCommandOutput) => void
  ): void;
  detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachLoadBalancerFromSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAvailabilityZonesForLoadBalancerCommand}
   */
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput>;
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    cb: (err: any, data?: DisableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;
  disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAvailabilityZonesForLoadBalancerCommand}
   */
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput>;
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    cb: (err: any, data?: EnableAvailabilityZonesForLoadBalancerCommandOutput) => void
  ): void;
  enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAvailabilityZonesForLoadBalancerCommandOutput) => void
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
   * @see {@link RegisterInstancesWithLoadBalancerCommand}
   */
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstancesWithLoadBalancerCommandOutput>;
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    cb: (err: any, data?: RegisterInstancesWithLoadBalancerCommandOutput) => void
  ): void;
  registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstancesWithLoadBalancerCommandOutput) => void
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
   * @see {@link SetLoadBalancerListenerSSLCertificateCommand}
   */
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput>;
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    cb: (err: any, data?: SetLoadBalancerListenerSSLCertificateCommandOutput) => void
  ): void;
  setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoadBalancerListenerSSLCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBalancerPoliciesForBackendServerCommand}
   */
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput>;
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesForBackendServerCommandOutput) => void
  ): void;
  setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoadBalancerPoliciesForBackendServerCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBalancerPoliciesOfListenerCommand}
   */
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput>;
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesOfListenerCommandOutput) => void
  ): void;
  setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoadBalancerPoliciesOfListenerCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class ElasticLoadBalancing extends ElasticLoadBalancingClient implements ElasticLoadBalancing {}
createAggregatedClient(commands, ElasticLoadBalancing);
