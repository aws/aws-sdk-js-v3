import { Route53Client } from "./Route53Client";
import {
  ActivateKeySigningKeyCommand,
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "./commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommand,
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeResourceRecordSetsCommand,
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommand,
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand";
import {
  CreateHealthCheckCommand,
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
} from "./commands/CreateHealthCheckCommand";
import {
  CreateHostedZoneCommand,
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
} from "./commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommand,
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "./commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommand,
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommand,
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommand,
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommand,
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommand,
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommand,
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "./commands/DeactivateKeySigningKeyCommand";
import {
  DeleteHealthCheckCommand,
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
} from "./commands/DeleteHealthCheckCommand";
import {
  DeleteHostedZoneCommand,
  DeleteHostedZoneCommandInput,
  DeleteHostedZoneCommandOutput,
} from "./commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommand,
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "./commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommand,
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommand,
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommand,
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommand,
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommand,
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "./commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommand,
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommand,
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "./commands/EnableHostedZoneDNSSECCommand";
import {
  GetAccountLimitCommand,
  GetAccountLimitCommandInput,
  GetAccountLimitCommandOutput,
} from "./commands/GetAccountLimitCommand";
import { GetChangeCommand, GetChangeCommandInput, GetChangeCommandOutput } from "./commands/GetChangeCommand";
import {
  GetCheckerIpRangesCommand,
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "./commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommand, GetDNSSECCommandInput, GetDNSSECCommandOutput } from "./commands/GetDNSSECCommand";
import {
  GetGeoLocationCommand,
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
} from "./commands/GetGeoLocationCommand";
import {
  GetHealthCheckCommand,
  GetHealthCheckCommandInput,
  GetHealthCheckCommandOutput,
} from "./commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommand,
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommand,
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommand,
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand";
import {
  GetHostedZoneCommand,
  GetHostedZoneCommandInput,
  GetHostedZoneCommandOutput,
} from "./commands/GetHostedZoneCommand";
import {
  GetHostedZoneCountCommand,
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "./commands/GetHostedZoneCountCommand";
import {
  GetHostedZoneLimitCommand,
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "./commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommand,
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommand,
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommand,
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand";
import {
  GetTrafficPolicyCommand,
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
} from "./commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommand,
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommand,
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import {
  ListGeoLocationsCommand,
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
} from "./commands/ListGeoLocationsCommand";
import {
  ListHealthChecksCommand,
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "./commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommand,
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommand,
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand";
import {
  ListHostedZonesCommand,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "./commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommand,
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommand,
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommand,
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommand,
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommand,
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommand,
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommand,
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommand,
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import {
  TestDNSAnswerCommand,
  TestDNSAnswerCommandInput,
  TestDNSAnswerCommandOutput,
} from "./commands/TestDNSAnswerCommand";
import {
  UpdateHealthCheckCommand,
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
} from "./commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand";
import {
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommand,
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>
 */
export class Route53 extends Route53Client {
  /**
   * <p>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the
   * 			KSK status to <code>ACTIVE</code>.</p>
   */
  public activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateKeySigningKeyCommandOutput>;
  public activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;
  public activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): void;
  public activateKeySigningKey(
    args: ActivateKeySigningKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateKeySigningKeyCommandOutput) => void),
    cb?: (err: any, data?: ActivateKeySigningKeyCommandOutput) => void
  ): Promise<ActivateKeySigningKeyCommandOutput> | void {
    const command = new ActivateKeySigningKeyCommand(args);
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
   * <p>Associates an Amazon VPC with a private hosted zone. </p>
   * 		       <important>
   *             <p>To perform the association, the VPC and the private hosted zone must already exist.
   * 			You can't convert a public hosted zone into a private hosted zone.</p>
   *          </important>
   * 		       <note>
   *             <p>If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created
   * 			by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a
   * 			<code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an
   * 			<code>AssociateVPCWithHostedZone</code> request.</p>
   *          </note>
   */
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVPCWithHostedZoneCommandOutput>;
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): void;
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: AssociateVPCWithHostedZoneCommandOutput) => void
  ): Promise<AssociateVPCWithHostedZoneCommandOutput> | void {
    const command = new AssociateVPCWithHostedZoneCommand(args);
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
   * <p>Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified
   * 			domain name or subdomain name. For example, you can use <code>ChangeResourceRecordSets</code> to create a resource record set that
   * 			routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.</p>
   *
   * 		       <p>
   *             <b>Deleting Resource Record Sets</b>
   *          </p>
   * 		       <p>To delete a resource record set, you must specify all the same values that you specified when you created it.</p>
   *
   * 		       <p>
   *             <b>Change Batches and Transactional Changes</b>
   *          </p>
   * 		       <p>The request body must include a document with a <code>ChangeResourceRecordSetsRequest</code> element.
   * 			The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes.
   * 			Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request.
   * 			This ensures that DNS routing isn't adversely affected by partial changes to the resource record sets in a hosted zone. </p>
   * 		       <p>For example, suppose a change batch request contains two changes: it deletes the <code>CNAME</code> resource record set for www.example.com and
   * 			creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and
   * 			creates the second resource record set in a single operation. If validation for either the <code>DELETE</code> or the <code>CREATE</code> action fails,
   * 			then the request is canceled, and the original <code>CNAME</code> record continues to exist.</p>
   * 		       <note>
   * 			         <p>If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an <code>InvalidChangeBatch</code> error.</p>
   * 		       </note>
   *
   * 		       <p>
   *             <b>Traffic Flow</b>
   *          </p>
   * 		       <p>To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the
   * 			Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy,
   * 			then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com),
   * 			in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing
   * 			as expected. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route DNS Traffic</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *
   * 		       <p>
   *             <b>Create, Delete, and Upsert</b>
   *          </p>
   * 		       <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following actions:</p>
   * 			      <ul>
   *             <li>
   * 					          <p>
   *                   <code>CREATE</code>: Creates a resource record set that has the specified values.</p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <code>DELETE</code>: Deletes an existing resource record set that has the specified values.</p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <code>UPSERT</code>: If a resource record set does not already exist, Amazon Web Services creates it.
   * 						If a resource set does exist, Route 53 updates it with the values in the request. </p>
   * 				        </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Syntaxes for Creating, Updating, and Deleting Resource Record Sets</b>
   *          </p>
   * 		       <p>The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as
   * 			weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. </p>
   *
   *
   * 		       <p>For an example for each type of resource record set, see "Examples."</p>
   *
   *
   * 		       <p>Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of
   * 			resource record set that you can create, delete, or update by using <code>ChangeResourceRecordSets</code>. </p>
   *
   * 		       <p>
   *             <b>Change Propagation to Route 53 DNS Servers</b>
   *          </p>
   * 		       <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates your changes to all of the
   * 			Route 53 authoritative DNS servers. While your changes are propagating, <code>GetChange</code> returns a status of
   * 			<code>PENDING</code>. When propagation is complete, <code>GetChange</code> returns a status of <code>INSYNC</code>.
   * 			Changes generally propagate to all Route 53 name servers within 60 seconds. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p>
   *
   * 		       <p>
   *             <b>Limits on ChangeResourceRecordSets Requests</b>
   *          </p>
   * 		       <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   */
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeResourceRecordSetsCommandOutput>;
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): void;
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ChangeResourceRecordSetsCommandOutput) => void),
    cb?: (err: any, data?: ChangeResourceRecordSetsCommandOutput) => void
  ): Promise<ChangeResourceRecordSetsCommandOutput> | void {
    const command = new ChangeResourceRecordSetsCommand(args);
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
   * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p>
   * 		       <p>For information about using tags for cost allocation, see
   * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
   * 			in the <i>Billing and Cost Management User Guide</i>.</p>
   */
  public changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeTagsForResourceCommandOutput>;
  public changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;
  public changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): void;
  public changeTagsForResource(
    args: ChangeTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ChangeTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ChangeTagsForResourceCommandOutput) => void
  ): Promise<ChangeTagsForResourceCommandOutput> | void {
    const command = new ChangeTagsForResourceCommand(args);
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
   * <p>Creates a new health check.</p>
   * 		       <p>For information about adding health checks to resource record sets, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a>
   * 			in
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p>
   *
   * 		       <p>
   *             <b>ELB Load Balancers</b>
   *          </p>
   * 		       <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the
   * 			EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a
   * 			similar function to a Route 53 health check.</p>
   *
   * 		       <p>
   *             <b>Private Hosted Zones</b>
   *          </p>
   * 		       <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must
   * 					assign a public IP address to the instance in the VPC.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a
   * 					database server.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the
   * 					state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric,
   * 					add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating
   * 					CloudWatch metrics and alarms by using the CloudWatch console, see the
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>
   * 			         </li>
   *          </ul>
   */
  public createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHealthCheckCommandOutput>;
  public createHealthCheck(
    args: CreateHealthCheckCommandInput,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;
  public createHealthCheck(
    args: CreateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): void;
  public createHealthCheck(
    args: CreateHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: CreateHealthCheckCommandOutput) => void
  ): Promise<CreateHealthCheckCommandOutput> | void {
    const command = new CreateHealthCheckCommand(args);
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
   * <p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic
   * 			on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a
   * 			private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more
   * 			Amazon Virtual Private Clouds (Amazon VPCs). </p>
   * 		       <important>
   * 			         <p>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone
   * 				with the same name and create new resource record sets.</p>
   * 		       </important>
   * 		       <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You can't create a hosted zone for a top-level domain (TLD) such as .com.</p>
   * 			         </li>
   *             <li>
   * 				           <p>For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone.
   * 					For more information about SOA and NS records, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the
   * 					<i>Amazon Route 53 Developer Guide</i>.</p>
   * 				           <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set
   * 					with the hosted zone. See the <code>DelegationSetId</code> element.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make
   * 					Route 53 the DNS service for the domain. For more information, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the
   * 					<i>Amazon Route 53 Developer Guide</i>. </p>
   * 			         </li>
   *          </ul>
   * 		       <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>.
   * 			For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the
   * 			NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p>
   * 		       <p>The <code>CreateHostedZone</code> request requires the caller to have an <code>ec2:DescribeVpcs</code> permission.</p>
   */
  public createHostedZone(
    args: CreateHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHostedZoneCommandOutput>;
  public createHostedZone(
    args: CreateHostedZoneCommandInput,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;
  public createHostedZone(
    args: CreateHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): void;
  public createHostedZone(
    args: CreateHostedZoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: CreateHostedZoneCommandOutput) => void
  ): Promise<CreateHostedZoneCommandOutput> | void {
    const command = new CreateHostedZoneCommand(args);
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
   * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.</p>
   */
  public createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeySigningKeyCommandOutput>;
  public createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;
  public createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): void;
  public createKeySigningKey(
    args: CreateKeySigningKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKeySigningKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateKeySigningKeyCommandOutput) => void
  ): Promise<CreateKeySigningKeyCommandOutput> | void {
    const command = new CreateKeySigningKeyCommand(args);
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
   * <p>Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish
   * 			log data to an Amazon CloudWatch Logs log group.</p>
   * 		       <p>DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>Route 53 edge location that responded to the DNS query</p>
   *             </li>
   *             <li>
   *                <p>Domain or subdomain that was requested</p>
   *             </li>
   *             <li>
   *                <p>DNS record type, such as A or AAAA</p>
   *             </li>
   *             <li>
   *                <p>DNS response code, such as <code>NoError</code> or <code>ServFail</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   * 		       <dl>
   *             <dt>Log Group and Resource Policy</dt>
   *             <dd>
   *                <p>Before you create a query logging configuration, perform the following operations.</p>
   * 					          <note>
   *                   <p>If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.</p>
   *                </note>
   * 					          <ol>
   *                   <li>
   *                      <p>Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a
   * 							query logging configuration. Note the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>You must create the log group in the us-east-1 region.</p>
   *                         </li>
   *                         <li>
   *                            <p>You must use the same Amazon Web Services account to create the log group and the hosted zone that you want to
   * 									configure query logging for.</p>
   *                         </li>
   *                         <li>
   *                            <p>When you create log groups for query logging, we recommend that you use a consistent prefix, for example:</p>
   * 									                  <p>
   *                               <code>/aws/route53/<i>hosted zone name</i>
   *                               </code>
   *                            </p>
   * 									                  <p>In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated
   * 										Amazon Web Services resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so
   * 										we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create
   * 										for query logging.</p>
   * 								                </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to
   * 							send query logs to log streams. For the value of <code>Resource</code>, specify the ARN for the log group that you created
   * 							in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations,
   * 							replace the hosted zone name with <code>*</code>, for example:</p>
   * 							              <p>
   *                         <code>arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*</code>
   *                      </p>
   * 							              <note>
   *                         <p>You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the Amazon Web Services SDKs,
   * 								or the CLI.</p>
   *                      </note>
   * 						            </li>
   *                </ol>
   * 				        </dd>
   *             <dt>Log Streams and Edge Locations</dt>
   *             <dd>
   *                <p>When Route 53 finishes creating the configuration for DNS query logging, it does the following:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the
   * 							specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.</p>
   *                   </li>
   *                   <li>
   *                      <p>Begins to send query logs to the applicable log stream.</p>
   *                   </li>
   *                </ul>
   * 					          <p>The name of each log stream is in the following format:</p>
   * 					          <p>
   *                   <code>
   *                      <i>hosted zone ID</i>/<i>edge location code</i>
   *                   </code>
   *                </p>
   * 					          <p>The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code
   * 						typically corresponds with the International Air Transport Association airport code for an airport near the edge location.
   * 						(These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the
   * 						<a href="http://aws.amazon.com/route53/details/">Route 53 Product Details</a> page.</p>
   * 				        </dd>
   *             <dt>Queries That Are Logged</dt>
   *             <dd>
   *                <p>Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached
   * 					the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return
   * 					the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires.
   * 					Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set,
   * 					query logs might contain information about only one query out of every several thousand queries that are submitted to DNS.
   * 					For more information about how DNS works, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">Routing Internet Traffic to Your Website or Web Application</a>
   * 					in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 				        </dd>
   *             <dt>Log File Format</dt>
   *             <dd>
   *                <p>For a list of the values in each query log and the format of each value, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the
   * 					<i>Amazon Route 53 Developer Guide</i>.</p>
   * 				        </dd>
   *             <dt>Pricing</dt>
   *             <dd>
   *                <p>For information about charges for query logs, see
   * 					<a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *             </dd>
   *             <dt>How to Stop Logging</dt>
   *             <dd>
   *                <p>If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html">DeleteQueryLoggingConfig</a>.</p>
   * 				        </dd>
   *          </dl>
   */
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueryLoggingConfigCommandOutput>;
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): void;
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQueryLoggingConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateQueryLoggingConfigCommandOutput) => void
  ): Promise<CreateQueryLoggingConfigCommandOutput> | void {
    const command = new CreateQueryLoggingConfigCommand(args);
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
   * <p>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by
   * 			the same Amazon Web Services account. </p>
   * 		       <p>You can also create a reusable delegation set that uses the four name servers that are associated
   * 			with an existing hosted zone. Specify the hosted zone ID in the <code>CreateReusableDelegationSet</code> request.</p>
   * 		       <note>
   * 			         <p>You can't associate a reusable delegation set with a private hosted zone.</p>
   * 		       </note>
   * 		       <p>For information about using a reusable delegation set to configure white label name servers, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White Label Name Servers</a>.</p>
   *
   * 		       <p>The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for
   * 			configuring white label name servers. You need to perform the following steps:</p>
   * 		       <ol>
   *             <li>
   *                <p>Create a reusable delegation set.</p>
   *             </li>
   *             <li>
   *                <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p>
   *             </li>
   *             <li>
   *                <p>Recreate resource record sets in the new hosted zones.</p>
   *             </li>
   *             <li>
   *                <p>Change the registrar's name servers to use the name servers for the new hosted zones.</p>
   *             </li>
   *             <li>
   *                <p>Monitor traffic for the website or application.</p>
   *             </li>
   *             <li>
   *                <p>Change TTLs back to their original values.</p>
   *             </li>
   *          </ol>
   *
   * 		       <p>If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use
   * 			any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more
   * 			name servers that are assigned to the reusable delegation set, you can do one of the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>For small numbers of hosted zones—up to a few hundred—it's relatively easy to create
   * 				reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers
   * 				in your hosted zones.</p>
   *             </li>
   *             <li>
   *                <p>For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.</p>
   *             </li>
   *             <li>
   *                <p>For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers
   * 				to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the
   * 				reusable delegation set.</p>
   *             </li>
   *          </ul>
   */
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReusableDelegationSetCommandOutput>;
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): void;
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReusableDelegationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateReusableDelegationSetCommandOutput) => void
  ): Promise<CreateReusableDelegationSetCommandOutput> | void {
    const command = new CreateReusableDelegationSetCommand(args);
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
   * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or
   * 			one subdomain name (such as www.example.com).</p>
   */
  public createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyCommandOutput>;
  public createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;
  public createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;
  public createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): Promise<CreateTrafficPolicyCommandOutput> | void {
    const command = new CreateTrafficPolicyCommand(args);
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
   * <p>Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version.
   * 			In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or
   * 			subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets
   * 			that <code>CreateTrafficPolicyInstance</code> created.</p>
   */
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyInstanceCommandOutput>;
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficPolicyInstanceCommandOutput) => void
  ): Promise<CreateTrafficPolicyInstanceCommandOutput> | void {
    const command = new CreateTrafficPolicyInstanceCommand(args);
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
   * <p>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the
   * 			traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create
   * 			multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can
   * 			create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new
   * 			traffic policy.</p>
   */
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyVersionCommandOutput>;
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): void;
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficPolicyVersionCommandOutput) => void
  ): Promise<CreateTrafficPolicyVersionCommandOutput> | void {
    const command = new CreateTrafficPolicyVersionCommand(args);
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
   * <p>Authorizes the Amazon Web Services account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code>
   * 			request to associate the VPC with a specified hosted zone that was created by a different account.
   * 			To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the
   * 			hosted zone. After you authorize the association, use the account that created the VPC to submit an
   * 			<code>AssociateVPCWithHostedZone</code> request.</p>
   * 		       <note>
   *             <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone
   * 			that you created by using a different account, you must submit one authorization request for each VPC.</p>
   *          </note>
   */
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput>;
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: CreateVPCAssociationAuthorizationCommandOutput) => void
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput> | void {
    const command = new CreateVPCAssociationAuthorizationCommand(args);
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
   * <p>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the
   * 			KSK status to <code>INACTIVE</code>.</p>
   */
  public deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateKeySigningKeyCommandOutput>;
  public deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;
  public deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): void;
  public deactivateKeySigningKey(
    args: DeactivateKeySigningKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateKeySigningKeyCommandOutput) => void),
    cb?: (err: any, data?: DeactivateKeySigningKeyCommandOutput) => void
  ): Promise<DeactivateKeySigningKeyCommandOutput> | void {
    const command = new DeactivateKeySigningKeyCommand(args);
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
   * <p>Deletes a health check.</p>
   * 		       <important>
   * 			         <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more
   * 				resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status
   * 				of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover
   * 				configuration. For more information, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a>
   * 				in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       </important>
   *
   * 		       <p>If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance,
   * 			you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted
   * 			automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted
   * 			from Route 53. </p>
   */
  public deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHealthCheckCommandOutput>;
  public deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;
  public deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): void;
  public deleteHealthCheck(
    args: DeleteHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: DeleteHealthCheckCommandOutput) => void
  ): Promise<DeleteHealthCheckCommandOutput> | void {
    const command = new DeleteHealthCheckCommand(args);
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
   * <p>Deletes a hosted zone.</p>
   *
   * 		       <p>If the hosted zone was created by another service, such as Cloud Map, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting
   * 			Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it.
   * 			(The process is the same for public and private hosted zones that were created by another service.)</p>
   *
   * 		       <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application,
   * 			we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p>
   *
   * 		       <important>
   * 			         <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your
   * 				domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone
   * 				and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone,
   * 				someone could hijack the domain and route traffic to their own resources using your domain name.</p>
   * 		       </important>
   *
   * 		       <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service.
   * 			When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a>
   * 			for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with
   * 			another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information,
   * 			perform an internet search on "free DNS service."</p>
   *
   * 		       <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets.
   * 			If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone.
   * 			If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a
   * 			<code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p>
   * 		       <p>To verify that the hosted zone has been deleted, do one of the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p>
   *             </li>
   *             <li>
   *                <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current
   * 				Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  public deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostedZoneCommandOutput>;
  public deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;
  public deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): void;
  public deleteHostedZone(
    args: DeleteHostedZoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: DeleteHostedZoneCommandOutput) => void
  ): Promise<DeleteHostedZoneCommandOutput> | void {
    const command = new DeleteHostedZoneCommand(args);
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
   * <p>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be
   * 		deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing.</p>
   */
  public deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeySigningKeyCommandOutput>;
  public deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;
  public deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): void;
  public deleteKeySigningKey(
    args: DeleteKeySigningKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKeySigningKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeySigningKeyCommandOutput) => void
  ): Promise<DeleteKeySigningKeyCommandOutput> | void {
    const command = new DeleteKeySigningKeyCommand(args);
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
   * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs.
   * 			Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p>
   *
   * 		       <p>For more information about DNS query logs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
   */
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueryLoggingConfigCommandOutput>;
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): void;
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteQueryLoggingConfigCommandOutput) => void
  ): Promise<DeleteQueryLoggingConfigCommandOutput> | void {
    const command = new DeleteQueryLoggingConfigCommand(args);
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
   * <p>Deletes a reusable delegation set.</p>
   * 		       <important>
   * 			         <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p>
   * 		       </important>
   * 		       <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a>
   * 			request and specify the ID of the reusable delegation set that you want to delete.</p>
   */
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReusableDelegationSetCommandOutput>;
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): void;
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReusableDelegationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteReusableDelegationSetCommandOutput) => void
  ): Promise<DeleteReusableDelegationSetCommandOutput> | void {
    const command = new DeleteReusableDelegationSetCommand(args);
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
   * <p>Deletes a traffic policy.</p>
   * 		       <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes
   * 			the traffic policy. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
   *             </li>
   *             <li>
   *                <p>	There's no way to get a list of deleted policies.</p>
   *             </li>
   *             <li>
   *                <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
   *             </li>
   *          </ul>
   */
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficPolicyCommandOutput>;
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): Promise<DeleteTrafficPolicyCommandOutput> | void {
    const command = new DeleteTrafficPolicyCommand(args);
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
   * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p>
   * 		       <note>
   * 			         <p>In the Route 53 console, traffic policy instances are known as policy records.</p>
   * 		       </note>
   */
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficPolicyInstanceCommandOutput>;
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficPolicyInstanceCommandOutput) => void
  ): Promise<DeleteTrafficPolicyInstanceCommandOutput> | void {
    const command = new DeleteTrafficPolicyInstanceCommand(args);
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
   * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC
   * 			with a hosted zone that was created by a different account. You must use the account that created the hosted zone
   * 			to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p>
   * 		       <important>
   * 			         <p>Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC
   * 				with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone,
   * 				<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone.
   * 				If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p>
   * 		       </important>
   */
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput>;
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): void;
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVPCAssociationAuthorizationCommandOutput) => void
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput> | void {
    const command = new DeleteVPCAssociationAuthorizationCommand(args);
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
   * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs)
   * 		that are active in the hosted zone.</p>
   */
  public disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableHostedZoneDNSSECCommandOutput>;
  public disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;
  public disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): void;
  public disableHostedZoneDNSSEC(
    args: DisableHostedZoneDNSSECCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void),
    cb?: (err: any, data?: DisableHostedZoneDNSSECCommandOutput) => void
  ): Promise<DisableHostedZoneDNSSECCommandOutput> | void {
    const command = new DisableHostedZoneDNSSECCommand(args);
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
   * <p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p>
   *             </li>
   *             <li>
   *                <p>You can't convert a private hosted zone into a public hosted zone.</p>
   *             </li>
   *             <li>
   *                <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account
   * 				that created the hosted zone or the account that created the Amazon VPC.</p>
   *             </li>
   *             <li>
   *                <p>Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate
   * 				VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account.
   * 				You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.</p>
   * 				           <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>,
   * 					if the hosted zone has a value for <code>OwningAccount</code>, you can use <code>DisassociateVPCFromHostedZone</code>.
   * 					If the hosted zone has a value for <code>OwningService</code>, you can't use <code>DisassociateVPCFromHostedZone</code>.</p>
   * 			         </li>
   *          </ul>
   */
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput>;
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): void;
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: DisassociateVPCFromHostedZoneCommandOutput) => void
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput> | void {
    const command = new DisassociateVPCFromHostedZoneCommand(args);
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
   * <p>Enables DNSSEC signing in a specific hosted zone.</p>
   */
  public enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableHostedZoneDNSSECCommandOutput>;
  public enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;
  public enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): void;
  public enableHostedZoneDNSSEC(
    args: EnableHostedZoneDNSSECCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void),
    cb?: (err: any, data?: EnableHostedZoneDNSSECCommandOutput) => void
  ): Promise<EnableHostedZoneDNSSECCommandOutput> | void {
    const command = new EnableHostedZoneDNSSECCommand(args);
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
   * <p>Gets the specified limit for the current account, for example, the maximum number of health checks that you
   * 			can create using the account.</p>
   * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
   * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
   * 		       <note>
   *             <p>You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at
   * 			<a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose
   * 			<b>Service limits</b> in the navigation pane.</p>
   * 		       </note>
   */
  public getAccountLimit(
    args: GetAccountLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountLimitCommandOutput>;
  public getAccountLimit(
    args: GetAccountLimitCommandInput,
    cb: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): void;
  public getAccountLimit(
    args: GetAccountLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): void;
  public getAccountLimit(
    args: GetAccountLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountLimitCommandOutput) => void),
    cb?: (err: any, data?: GetAccountLimitCommandOutput) => void
  ): Promise<GetAccountLimitCommandOutput> | void {
    const command = new GetAccountLimitCommand(args);
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
   * <p>Returns the current status of a change batch request. The status is one of the
   * 			following values:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers.
   * 					This is the initial status of all change batch requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p>
   * 			         </li>
   *          </ul>
   */
  public getChange(args: GetChangeCommandInput, options?: __HttpHandlerOptions): Promise<GetChangeCommandOutput>;
  public getChange(args: GetChangeCommandInput, cb: (err: any, data?: GetChangeCommandOutput) => void): void;
  public getChange(
    args: GetChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeCommandOutput) => void
  ): void;
  public getChange(
    args: GetChangeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChangeCommandOutput) => void),
    cb?: (err: any, data?: GetChangeCommandOutput) => void
  ): Promise<GetChangeCommandOutput> | void {
    const command = new GetChangeCommand(args);
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
   * <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
   * 	        <important>
   * 			         <p>
   *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
   * 				ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       </important>
   */
  public getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCheckerIpRangesCommandOutput>;
  public getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;
  public getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): void;
  public getCheckerIpRanges(
    args: GetCheckerIpRangesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCheckerIpRangesCommandOutput) => void),
    cb?: (err: any, data?: GetCheckerIpRangesCommandOutput) => void
  ): Promise<GetCheckerIpRangesCommandOutput> | void {
    const command = new GetCheckerIpRangesCommand(args);
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
   * <p>Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone.</p>
   */
  public getDNSSEC(args: GetDNSSECCommandInput, options?: __HttpHandlerOptions): Promise<GetDNSSECCommandOutput>;
  public getDNSSEC(args: GetDNSSECCommandInput, cb: (err: any, data?: GetDNSSECCommandOutput) => void): void;
  public getDNSSEC(
    args: GetDNSSECCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDNSSECCommandOutput) => void
  ): void;
  public getDNSSEC(
    args: GetDNSSECCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDNSSECCommandOutput) => void),
    cb?: (err: any, data?: GetDNSSECCommandOutput) => void
  ): Promise<GetDNSSECCommandOutput> | void {
    const command = new GetDNSSECCommand(args);
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
   * <p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation
   * 			resource record sets.</p>
   * 	        <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
   *
   * 		       <p>Use the following syntax to determine whether a continent is supported for geolocation:</p>
   * 		       <p>
   *             <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i>
   *             </code>
   *          </p>
   *
   * 		       <p>Use the following syntax to determine whether a country is supported for geolocation:</p>
   * 		       <p>
   *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>
   *             </code>
   *          </p>
   *
   * 		       <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p>
   * 		       <p>
   *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&subdivisioncode=<i>subdivision code</i>
   *             </code>
   *          </p>
   */
  public getGeoLocation(
    args: GetGeoLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeoLocationCommandOutput>;
  public getGeoLocation(
    args: GetGeoLocationCommandInput,
    cb: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): void;
  public getGeoLocation(
    args: GetGeoLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): void;
  public getGeoLocation(
    args: GetGeoLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGeoLocationCommandOutput) => void),
    cb?: (err: any, data?: GetGeoLocationCommandOutput) => void
  ): Promise<GetGeoLocationCommandOutput> | void {
    const command = new GetGeoLocationCommand(args);
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
   * <p>Gets information about a specified health check.</p>
   */
  public getHealthCheck(
    args: GetHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckCommandOutput>;
  public getHealthCheck(
    args: GetHealthCheckCommandInput,
    cb: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): void;
  public getHealthCheck(
    args: GetHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): void;
  public getHealthCheck(
    args: GetHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: GetHealthCheckCommandOutput) => void
  ): Promise<GetHealthCheckCommandOutput> | void {
    const command = new GetHealthCheckCommand(args);
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
   * <p>Retrieves the number of health checks that are associated with the current Amazon Web Services account.</p>
   */
  public getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckCountCommandOutput>;
  public getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;
  public getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): void;
  public getHealthCheckCount(
    args: GetHealthCheckCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHealthCheckCountCommandOutput) => void),
    cb?: (err: any, data?: GetHealthCheckCountCommandOutput) => void
  ): Promise<GetHealthCheckCountCommandOutput> | void {
    const command = new GetHealthCheckCountCommand(args);
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
   * <p>Gets the reason that a specified health check failed most recently.</p>
   */
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput>;
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): void;
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void),
    cb?: (err: any, data?: GetHealthCheckLastFailureReasonCommandOutput) => void
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput> | void {
    const command = new GetHealthCheckLastFailureReasonCommand(args);
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
   * <p>Gets status of a specified health check. </p>
   * 		       <important>
   *             <p>This API is intended for use during development to diagnose behavior. It doesn’t support production use-cases with high query rates that require immediate and actionable responses.</p>
   *          </important>
   */
  public getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthCheckStatusCommandOutput>;
  public getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;
  public getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): void;
  public getHealthCheckStatus(
    args: GetHealthCheckStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHealthCheckStatusCommandOutput) => void),
    cb?: (err: any, data?: GetHealthCheckStatusCommandOutput) => void
  ): Promise<GetHealthCheckStatusCommandOutput> | void {
    const command = new GetHealthCheckStatusCommand(args);
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
   * <p>Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.</p>
   */
  public getHostedZone(
    args: GetHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneCommandOutput>;
  public getHostedZone(
    args: GetHostedZoneCommandInput,
    cb: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): void;
  public getHostedZone(
    args: GetHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): void;
  public getHostedZone(
    args: GetHostedZoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: GetHostedZoneCommandOutput) => void
  ): Promise<GetHostedZoneCommandOutput> | void {
    const command = new GetHostedZoneCommand(args);
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
   * <p>Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.</p>
   */
  public getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneCountCommandOutput>;
  public getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;
  public getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): void;
  public getHostedZoneCount(
    args: GetHostedZoneCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostedZoneCountCommandOutput) => void),
    cb?: (err: any, data?: GetHostedZoneCountCommandOutput) => void
  ): Promise<GetHostedZoneCountCommandOutput> | void {
    const command = new GetHostedZoneCountCommand(args);
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
   * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you
   * 			can create in the hosted zone. </p>
   * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
   * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
   */
  public getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneLimitCommandOutput>;
  public getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;
  public getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): void;
  public getHostedZoneLimit(
    args: GetHostedZoneLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostedZoneLimitCommandOutput) => void),
    cb?: (err: any, data?: GetHostedZoneLimitCommandOutput) => void
  ): Promise<GetHostedZoneLimitCommandOutput> | void {
    const command = new GetHostedZoneLimitCommand(args);
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
   * <p>Gets information about a specified configuration for DNS query logging.</p>
   *
   * 		       <p>For more information about DNS query logs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>
   * 			and
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>
   */
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryLoggingConfigCommandOutput>;
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): void;
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueryLoggingConfigCommandOutput) => void),
    cb?: (err: any, data?: GetQueryLoggingConfigCommandOutput) => void
  ): Promise<GetQueryLoggingConfigCommandOutput> | void {
    const command = new GetQueryLoggingConfigCommand(args);
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
   * <p>Retrieves information about a specified reusable delegation set, including the four name servers that are assigned
   * 			to the delegation set.</p>
   */
  public getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReusableDelegationSetCommandOutput>;
  public getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;
  public getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): void;
  public getReusableDelegationSet(
    args: GetReusableDelegationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReusableDelegationSetCommandOutput) => void),
    cb?: (err: any, data?: GetReusableDelegationSetCommandOutput) => void
  ): Promise<GetReusableDelegationSetCommandOutput> | void {
    const command = new GetReusableDelegationSetCommand(args);
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
   * <p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p>
   * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
   * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
   */
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReusableDelegationSetLimitCommandOutput>;
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): void;
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void),
    cb?: (err: any, data?: GetReusableDelegationSetLimitCommandOutput) => void
  ): Promise<GetReusableDelegationSetLimitCommandOutput> | void {
    const command = new GetReusableDelegationSetLimitCommand(args);
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
   * <p>Gets information about a specific traffic policy version.</p>
   * 		       <p>For information about how of deleting a traffic policy affects the response from <code>GetTrafficPolicy</code>, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
   * 		</p>
   */
  public getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyCommandOutput>;
  public getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;
  public getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;
  public getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrafficPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): Promise<GetTrafficPolicyCommandOutput> | void {
    const command = new GetTrafficPolicyCommand(args);
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
   * <p>Gets information about a specified traffic policy instance.</p>
   * 		       <note>
   * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
   * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
   * 				more information, see the <code>State</code> response element.</p>
   * 		       </note>
   * 		       <note>
   * 			         <p>In the Route 53 console, traffic policy instances are known as policy records.</p>
   * 		       </note>
   */
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyInstanceCommandOutput>;
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetTrafficPolicyInstanceCommandOutput) => void
  ): Promise<GetTrafficPolicyInstanceCommandOutput> | void {
    const command = new GetTrafficPolicyInstanceCommand(args);
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
   * <p>Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.</p>
   */
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput>;
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): void;
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void),
    cb?: (err: any, data?: GetTrafficPolicyInstanceCountCommandOutput) => void
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput> | void {
    const command = new GetTrafficPolicyInstanceCountCommand(args);
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
   * <p>Retrieves a list of supported geographic locations.</p>
   * 		       <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces),
   * 			the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p>
   * 	        <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
   * 	        <p>For a list of supported geolocation codes, see the
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>
   */
  public listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeoLocationsCommandOutput>;
  public listGeoLocations(
    args: ListGeoLocationsCommandInput,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;
  public listGeoLocations(
    args: ListGeoLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): void;
  public listGeoLocations(
    args: ListGeoLocationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGeoLocationsCommandOutput) => void),
    cb?: (err: any, data?: ListGeoLocationsCommandOutput) => void
  ): Promise<ListGeoLocationsCommandOutput> | void {
    const command = new ListGeoLocationsCommand(args);
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
   * <p>Retrieve a list of the health checks that are associated with the current Amazon Web Services account. </p>
   */
  public listHealthChecks(
    args: ListHealthChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHealthChecksCommandOutput>;
  public listHealthChecks(
    args: ListHealthChecksCommandInput,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;
  public listHealthChecks(
    args: ListHealthChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): void;
  public listHealthChecks(
    args: ListHealthChecksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHealthChecksCommandOutput) => void),
    cb?: (err: any, data?: ListHealthChecksCommandOutput) => void
  ): Promise<ListHealthChecksCommandOutput> | void {
    const command = new ListHealthChecksCommand(args);
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
   * <p>Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response
   * 			includes a <code>HostedZones</code> child element for each hosted zone.</p>
   * 		       <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the
   * 			<code>maxitems</code> parameter to list them in groups of up to 100.</p>
   */
  public listHostedZones(
    args: ListHostedZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesCommandOutput>;
  public listHostedZones(
    args: ListHostedZonesCommandInput,
    cb: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): void;
  public listHostedZones(
    args: ListHostedZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): void;
  public listHostedZones(
    args: ListHostedZonesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostedZonesCommandOutput) => void),
    cb?: (err: any, data?: ListHostedZonesCommandOutput) => void
  ): Promise<ListHostedZonesCommandOutput> | void {
    const command = new ListHostedZonesCommand(args);
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
   * <p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element
   * 			for each hosted zone created by the current Amazon Web Services account. </p>
   * 		       <p>
   *             <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p>
   *
   * 		       <p>
   *             <code>com.example.www.</code>
   *          </p>
   *
   * 		       <p>Note the trailing dot, which can change the sort order in some circumstances.</p>
   * 		       <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name
   * 			using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone
   * 			for exämple.com, you specify ex\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p>
   *
   * 		       <p>
   *             <code>com.ex\344mple.</code>
   *          </p>
   *
   * 		       <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats,
   * 			including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list
   * 			them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the
   * 					<code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code>
   * 					parameter in the request that produced the current response.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the
   * 					current Amazon Web Services account. </p>
   * 				           <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account.
   * 					The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the
   * 					hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones,
   * 					make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and
   * 					<code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p>
   * 			         </li>
   *          </ul>
   */
  public listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesByNameCommandOutput>;
  public listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;
  public listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): void;
  public listHostedZonesByName(
    args: ListHostedZonesByNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostedZonesByNameCommandOutput) => void),
    cb?: (err: any, data?: ListHostedZonesByNameCommandOutput) => void
  ): Promise<ListHostedZonesByNameCommandOutput> | void {
    const command = new ListHostedZonesByNameCommand(args);
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
   * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the
   * 			hosted zones. The <code>HostedZoneOwner</code> structure in the response contains one of the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>An <code>OwningAccount</code> element, which contains the account number of either the current Amazon Web Services account or
   * 				another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account. </p>
   * 			         </li>
   *             <li>
   *                <p>An <code>OwningService</code> element, which identifies the Amazon Web Services service that created and owns the hosted zone.
   * 				For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of <code>Owner</code> is
   * 				<code>efs.amazonaws.com</code>. </p>
   * 			         </li>
   *          </ul>
   */
  public listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZonesByVPCCommandOutput>;
  public listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;
  public listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): void;
  public listHostedZonesByVPC(
    args: ListHostedZonesByVPCCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostedZonesByVPCCommandOutput) => void),
    cb?: (err: any, data?: ListHostedZonesByVPCCommandOutput) => void
  ): Promise<ListHostedZonesByVPCCommandOutput> | void {
    const command = new ListHostedZonesByVPCCommand(args);
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
   * <p>Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration
   * 			that is associated with a specified hosted zone.</p>
   *
   * 		       <p>For more information about DNS query logs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.
   * 			Additional information, including the format of DNS query logs, appears in
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueryLoggingConfigsCommandOutput>;
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): void;
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueryLoggingConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListQueryLoggingConfigsCommandOutput) => void
  ): Promise<ListQueryLoggingConfigsCommandOutput> | void {
    const command = new ListQueryLoggingConfigsCommand(args);
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
   * <p>Lists the resource record sets in a specified hosted zone.</p>
   * 		       <p>
   *             <code>ListResourceRecordSets</code> returns up to 300 resource record sets at a time in ASCII order,
   * 			beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p>
   *
   * 		       <p>
   *             <b>Sort order</b>
   *          </p>
   * 			      <p>
   *             <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p>
   * 			      <p>
   *             <code>com.example.www.</code>
   *          </p>
   * 			      <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before
   * 				<code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! " # $ % & ' ( ) * + , -</code>
   *          </p>
   * 			      <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p>
   *
   * 		       <p>
   *             <b>Specifying where to start listing records</b>
   *          </p>
   * 			      <p>You can use the name and type elements to specify the resource record set that the list begins with:</p>
   * 			      <dl>
   *             <dt>If you do not specify Name or Type</dt>
   *             <dd>
   *                <p>The results begin with the first resource record set that the hosted zone contains.</p>
   *             </dd>
   *             <dt>If you specify Name but not Type</dt>
   *             <dd>
   *                <p>The results begin with the first resource record set in the list whose name is greater than or equal to
   * 						<code>Name</code>.</p>
   *             </dd>
   *             <dt>If you specify Type but not Name</dt>
   *             <dd>
   *                <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p>
   *             </dd>
   *             <dt>If you specify both Name and Type</dt>
   *             <dd>
   *                <p>The results begin with the first resource record set in the list whose name is greater than or equal to
   * 						<code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p>
   *             </dd>
   *          </dl>
   *
   * 		       <p>
   *             <b>Resource record sets that are PENDING</b>
   *          </p>
   * 			      <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>,
   * 				and that are not yet available on all Route 53 DNS servers.</p>
   *
   * 		       <p>
   *             <b>Changing resource record sets</b>
   *          </p>
   * 			      <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time,
   * 				do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a
   * 				<code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes
   * 				while other pages display results with the latest changes.</p>
   *
   * 		       <p>
   *             <b>Displaying the next page of results</b>
   *          </p>
   * 			      <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code>
   * 				is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>,
   * 				and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and
   * 				specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>
   */
  public listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceRecordSetsCommandOutput>;
  public listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;
  public listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): void;
  public listResourceRecordSets(
    args: ListResourceRecordSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceRecordSetsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceRecordSetsCommandOutput) => void
  ): Promise<ListResourceRecordSetsCommandOutput> | void {
    const command = new ListResourceRecordSetsCommand(args);
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
   * <p>Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account.</p>
   */
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReusableDelegationSetsCommandOutput>;
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): void;
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReusableDelegationSetsCommandOutput) => void),
    cb?: (err: any, data?: ListReusableDelegationSetsCommandOutput) => void
  ): Promise<ListReusableDelegationSetsCommandOutput> | void {
    const command = new ListReusableDelegationSetsCommand(args);
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
   * <p>Lists tags for one health check or hosted zone. </p>
   * 		       <p>For information about using tags for cost allocation, see
   * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
   * 			in the <i>Billing and Cost Management User Guide</i>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Lists tags for up to 10 health checks or hosted zones.</p>
   * 		       <p>For information about using tags for cost allocation, see
   * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
   * 			in the <i>Billing and Cost Management User Guide</i>.</p>
   */
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourcesCommandOutput>;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  public listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): Promise<ListTagsForResourcesCommandOutput> | void {
    const command = new ListTagsForResourcesCommand(args);
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
   * <p>Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account.
   * 			Policies are listed in the order that they were created in. </p>
   *
   * 		       <p>For information about how of deleting a traffic policy affects the response from <code>ListTrafficPolicies</code>, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>.
   *
   * 		</p>
   */
  public listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPoliciesCommandOutput>;
  public listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;
  public listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;
  public listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrafficPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): Promise<ListTrafficPoliciesCommandOutput> | void {
    const command = new ListTrafficPoliciesCommand(args);
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
   * <p>Gets information about the traffic policy instances that you created by using the current Amazon Web Services account.</p>
   * 		       <note>
   * 			         <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the
   * 				resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p>
   * 		       </note>
   * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
   * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   */
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesCommandOutput>;
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): void;
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListTrafficPolicyInstancesCommandOutput) => void
  ): Promise<ListTrafficPolicyInstancesCommandOutput> | void {
    const command = new ListTrafficPolicyInstancesCommand(args);
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
   * <p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p>
   * 		       <note>
   * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a
   * 				brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information,
   * 				see the <code>State</code> response element.</p>
   * 		       </note>
   * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
   * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   */
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput>;
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): void;
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void),
    cb?: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneCommandOutput) => void
  ): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> | void {
    const command = new ListTrafficPolicyInstancesByHostedZoneCommand(args);
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
   * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p>
   * 		       <note>
   * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
   * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
   * 				more information, see the <code>State</code> response element.</p>
   * 		       </note>
   * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
   * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   */
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput>;
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): void;
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void),
    cb?: (err: any, data?: ListTrafficPolicyInstancesByPolicyCommandOutput) => void
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> | void {
    const command = new ListTrafficPolicyInstancesByPolicyCommand(args);
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
   * <p>Gets information about all of the versions for a specified traffic policy.</p>
   * 		       <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
   */
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPolicyVersionsCommandOutput>;
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): void;
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListTrafficPolicyVersionsCommandOutput) => void
  ): Promise<ListTrafficPolicyVersionsCommandOutput> | void {
    const command = new ListTrafficPolicyVersionsCommand(args);
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
   * <p>Gets a list of the VPCs that were created by other accounts and that can be associated with a
   * 			specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p>
   * 		       <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC
   * 			that can be associated with the hosted zone.</p>
   */
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVPCAssociationAuthorizationsCommandOutput>;
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): void;
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void),
    cb?: (err: any, data?: ListVPCAssociationAuthorizationsCommandOutput) => void
  ): Promise<ListVPCAssociationAuthorizationsCommandOutput> | void {
    const command = new ListVPCAssociationAuthorizationsCommand(args);
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
   * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
   * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
   * 		       <p>This call only supports querying public hosted zones.</p>
   */
  public testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestDNSAnswerCommandOutput>;
  public testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    cb: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): void;
  public testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): void;
  public testDNSAnswer(
    args: TestDNSAnswerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestDNSAnswerCommandOutput) => void),
    cb?: (err: any, data?: TestDNSAnswerCommandOutput) => void
  ): Promise<TestDNSAnswerCommandOutput> | void {
    const command = new TestDNSAnswerCommand(args);
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
   * <p>Updates an existing health check. Note that some values can't be updated. </p>
   * 		       <p>For more information about updating health checks, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  public updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHealthCheckCommandOutput>;
  public updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;
  public updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): void;
  public updateHealthCheck(
    args: UpdateHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: UpdateHealthCheckCommandOutput) => void
  ): Promise<UpdateHealthCheckCommandOutput> | void {
    const command = new UpdateHealthCheckCommand(args);
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
   * <p>Updates the comment for a specified hosted zone.</p>
   */
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHostedZoneCommentCommandOutput>;
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): void;
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHostedZoneCommentCommandOutput) => void),
    cb?: (err: any, data?: UpdateHostedZoneCommentCommandOutput) => void
  ): Promise<UpdateHostedZoneCommentCommandOutput> | void {
    const command = new UpdateHostedZoneCommentCommand(args);
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
   * <p>Updates the comment for a specified traffic policy version.</p>
   */
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficPolicyCommentCommandOutput>;
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): void;
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrafficPolicyCommentCommandOutput) => void
  ): Promise<UpdateTrafficPolicyCommentCommandOutput> | void {
    const command = new UpdateTrafficPolicyCommentCommand(args);
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
   * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p>
   * 		       <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name
   * 			(such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant
   * 					the differences are between the existing resource record sets and the new resource record sets. </p>
   * 			         </li>
   *             <li>
   * 				           <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name
   * 					(such as example.com) by using the new resource record sets.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p>
   * 			         </li>
   *          </ol>
   */
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput>;
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): void;
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrafficPolicyInstanceCommandOutput) => void
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput> | void {
    const command = new UpdateTrafficPolicyInstanceCommand(args);
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
