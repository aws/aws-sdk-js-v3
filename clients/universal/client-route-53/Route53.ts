import { Route53Client } from "./Route53Client";
import { AssociateVPCWithHostedZoneInput } from "./types/AssociateVPCWithHostedZoneInput";
import { AssociateVPCWithHostedZoneOutput } from "./types/AssociateVPCWithHostedZoneOutput";
import { ChangeResourceRecordSetsInput } from "./types/ChangeResourceRecordSetsInput";
import { ChangeResourceRecordSetsOutput } from "./types/ChangeResourceRecordSetsOutput";
import { ChangeTagsForResourceInput } from "./types/ChangeTagsForResourceInput";
import { ChangeTagsForResourceOutput } from "./types/ChangeTagsForResourceOutput";
import { ConcurrentModification } from "./types/ConcurrentModification";
import { ConflictingDomainExists } from "./types/ConflictingDomainExists";
import { ConflictingTypes } from "./types/ConflictingTypes";
import { CreateHealthCheckInput } from "./types/CreateHealthCheckInput";
import { CreateHealthCheckOutput } from "./types/CreateHealthCheckOutput";
import { CreateHostedZoneInput } from "./types/CreateHostedZoneInput";
import { CreateHostedZoneOutput } from "./types/CreateHostedZoneOutput";
import { CreateQueryLoggingConfigInput } from "./types/CreateQueryLoggingConfigInput";
import { CreateQueryLoggingConfigOutput } from "./types/CreateQueryLoggingConfigOutput";
import { CreateReusableDelegationSetInput } from "./types/CreateReusableDelegationSetInput";
import { CreateReusableDelegationSetOutput } from "./types/CreateReusableDelegationSetOutput";
import { CreateTrafficPolicyInput } from "./types/CreateTrafficPolicyInput";
import { CreateTrafficPolicyInstanceInput } from "./types/CreateTrafficPolicyInstanceInput";
import { CreateTrafficPolicyInstanceOutput } from "./types/CreateTrafficPolicyInstanceOutput";
import { CreateTrafficPolicyOutput } from "./types/CreateTrafficPolicyOutput";
import { CreateTrafficPolicyVersionInput } from "./types/CreateTrafficPolicyVersionInput";
import { CreateTrafficPolicyVersionOutput } from "./types/CreateTrafficPolicyVersionOutput";
import { CreateVPCAssociationAuthorizationInput } from "./types/CreateVPCAssociationAuthorizationInput";
import { CreateVPCAssociationAuthorizationOutput } from "./types/CreateVPCAssociationAuthorizationOutput";
import { DelegationSetAlreadyCreated } from "./types/DelegationSetAlreadyCreated";
import { DelegationSetAlreadyReusable } from "./types/DelegationSetAlreadyReusable";
import { DelegationSetInUse } from "./types/DelegationSetInUse";
import { DelegationSetNotAvailable } from "./types/DelegationSetNotAvailable";
import { DelegationSetNotReusable } from "./types/DelegationSetNotReusable";
import { DeleteHealthCheckInput } from "./types/DeleteHealthCheckInput";
import { DeleteHealthCheckOutput } from "./types/DeleteHealthCheckOutput";
import { DeleteHostedZoneInput } from "./types/DeleteHostedZoneInput";
import { DeleteHostedZoneOutput } from "./types/DeleteHostedZoneOutput";
import { DeleteQueryLoggingConfigInput } from "./types/DeleteQueryLoggingConfigInput";
import { DeleteQueryLoggingConfigOutput } from "./types/DeleteQueryLoggingConfigOutput";
import { DeleteReusableDelegationSetInput } from "./types/DeleteReusableDelegationSetInput";
import { DeleteReusableDelegationSetOutput } from "./types/DeleteReusableDelegationSetOutput";
import { DeleteTrafficPolicyInput } from "./types/DeleteTrafficPolicyInput";
import { DeleteTrafficPolicyInstanceInput } from "./types/DeleteTrafficPolicyInstanceInput";
import { DeleteTrafficPolicyInstanceOutput } from "./types/DeleteTrafficPolicyInstanceOutput";
import { DeleteTrafficPolicyOutput } from "./types/DeleteTrafficPolicyOutput";
import { DeleteVPCAssociationAuthorizationInput } from "./types/DeleteVPCAssociationAuthorizationInput";
import { DeleteVPCAssociationAuthorizationOutput } from "./types/DeleteVPCAssociationAuthorizationOutput";
import { DisassociateVPCFromHostedZoneInput } from "./types/DisassociateVPCFromHostedZoneInput";
import { DisassociateVPCFromHostedZoneOutput } from "./types/DisassociateVPCFromHostedZoneOutput";
import { GetAccountLimitInput } from "./types/GetAccountLimitInput";
import { GetAccountLimitOutput } from "./types/GetAccountLimitOutput";
import { GetChangeInput } from "./types/GetChangeInput";
import { GetChangeOutput } from "./types/GetChangeOutput";
import { GetCheckerIpRangesInput } from "./types/GetCheckerIpRangesInput";
import { GetCheckerIpRangesOutput } from "./types/GetCheckerIpRangesOutput";
import { GetGeoLocationInput } from "./types/GetGeoLocationInput";
import { GetGeoLocationOutput } from "./types/GetGeoLocationOutput";
import { GetHealthCheckCountInput } from "./types/GetHealthCheckCountInput";
import { GetHealthCheckCountOutput } from "./types/GetHealthCheckCountOutput";
import { GetHealthCheckInput } from "./types/GetHealthCheckInput";
import { GetHealthCheckLastFailureReasonInput } from "./types/GetHealthCheckLastFailureReasonInput";
import { GetHealthCheckLastFailureReasonOutput } from "./types/GetHealthCheckLastFailureReasonOutput";
import { GetHealthCheckOutput } from "./types/GetHealthCheckOutput";
import { GetHealthCheckStatusInput } from "./types/GetHealthCheckStatusInput";
import { GetHealthCheckStatusOutput } from "./types/GetHealthCheckStatusOutput";
import { GetHostedZoneCountInput } from "./types/GetHostedZoneCountInput";
import { GetHostedZoneCountOutput } from "./types/GetHostedZoneCountOutput";
import { GetHostedZoneInput } from "./types/GetHostedZoneInput";
import { GetHostedZoneLimitInput } from "./types/GetHostedZoneLimitInput";
import { GetHostedZoneLimitOutput } from "./types/GetHostedZoneLimitOutput";
import { GetHostedZoneOutput } from "./types/GetHostedZoneOutput";
import { GetQueryLoggingConfigInput } from "./types/GetQueryLoggingConfigInput";
import { GetQueryLoggingConfigOutput } from "./types/GetQueryLoggingConfigOutput";
import { GetReusableDelegationSetInput } from "./types/GetReusableDelegationSetInput";
import { GetReusableDelegationSetLimitInput } from "./types/GetReusableDelegationSetLimitInput";
import { GetReusableDelegationSetLimitOutput } from "./types/GetReusableDelegationSetLimitOutput";
import { GetReusableDelegationSetOutput } from "./types/GetReusableDelegationSetOutput";
import { GetTrafficPolicyInput } from "./types/GetTrafficPolicyInput";
import { GetTrafficPolicyInstanceCountInput } from "./types/GetTrafficPolicyInstanceCountInput";
import { GetTrafficPolicyInstanceCountOutput } from "./types/GetTrafficPolicyInstanceCountOutput";
import { GetTrafficPolicyInstanceInput } from "./types/GetTrafficPolicyInstanceInput";
import { GetTrafficPolicyInstanceOutput } from "./types/GetTrafficPolicyInstanceOutput";
import { GetTrafficPolicyOutput } from "./types/GetTrafficPolicyOutput";
import { HealthCheckAlreadyExists } from "./types/HealthCheckAlreadyExists";
import { HealthCheckInUse } from "./types/HealthCheckInUse";
import { HealthCheckVersionMismatch } from "./types/HealthCheckVersionMismatch";
import { HostedZoneAlreadyExists } from "./types/HostedZoneAlreadyExists";
import { HostedZoneNotEmpty } from "./types/HostedZoneNotEmpty";
import { HostedZoneNotFound } from "./types/HostedZoneNotFound";
import { HostedZoneNotPrivate } from "./types/HostedZoneNotPrivate";
import { IncompatibleVersion } from "./types/IncompatibleVersion";
import { InsufficientCloudWatchLogsResourcePolicy } from "./types/InsufficientCloudWatchLogsResourcePolicy";
import { InvalidArgument } from "./types/InvalidArgument";
import { InvalidChangeBatch } from "./types/InvalidChangeBatch";
import { InvalidDomainName } from "./types/InvalidDomainName";
import { InvalidInput } from "./types/InvalidInput";
import { InvalidPaginationToken } from "./types/InvalidPaginationToken";
import { InvalidTrafficPolicyDocument } from "./types/InvalidTrafficPolicyDocument";
import { InvalidVPCId } from "./types/InvalidVPCId";
import { LastVPCAssociation } from "./types/LastVPCAssociation";
import { LimitsExceeded } from "./types/LimitsExceeded";
import { ListGeoLocationsInput } from "./types/ListGeoLocationsInput";
import { ListGeoLocationsOutput } from "./types/ListGeoLocationsOutput";
import { ListHealthChecksInput } from "./types/ListHealthChecksInput";
import { ListHealthChecksOutput } from "./types/ListHealthChecksOutput";
import { ListHostedZonesByNameInput } from "./types/ListHostedZonesByNameInput";
import { ListHostedZonesByNameOutput } from "./types/ListHostedZonesByNameOutput";
import { ListHostedZonesInput } from "./types/ListHostedZonesInput";
import { ListHostedZonesOutput } from "./types/ListHostedZonesOutput";
import { ListQueryLoggingConfigsInput } from "./types/ListQueryLoggingConfigsInput";
import { ListQueryLoggingConfigsOutput } from "./types/ListQueryLoggingConfigsOutput";
import { ListResourceRecordSetsInput } from "./types/ListResourceRecordSetsInput";
import { ListResourceRecordSetsOutput } from "./types/ListResourceRecordSetsOutput";
import { ListReusableDelegationSetsInput } from "./types/ListReusableDelegationSetsInput";
import { ListReusableDelegationSetsOutput } from "./types/ListReusableDelegationSetsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTagsForResourcesInput } from "./types/ListTagsForResourcesInput";
import { ListTagsForResourcesOutput } from "./types/ListTagsForResourcesOutput";
import { ListTrafficPoliciesInput } from "./types/ListTrafficPoliciesInput";
import { ListTrafficPoliciesOutput } from "./types/ListTrafficPoliciesOutput";
import { ListTrafficPolicyInstancesByHostedZoneInput } from "./types/ListTrafficPolicyInstancesByHostedZoneInput";
import { ListTrafficPolicyInstancesByHostedZoneOutput } from "./types/ListTrafficPolicyInstancesByHostedZoneOutput";
import { ListTrafficPolicyInstancesByPolicyInput } from "./types/ListTrafficPolicyInstancesByPolicyInput";
import { ListTrafficPolicyInstancesByPolicyOutput } from "./types/ListTrafficPolicyInstancesByPolicyOutput";
import { ListTrafficPolicyInstancesInput } from "./types/ListTrafficPolicyInstancesInput";
import { ListTrafficPolicyInstancesOutput } from "./types/ListTrafficPolicyInstancesOutput";
import { ListTrafficPolicyVersionsInput } from "./types/ListTrafficPolicyVersionsInput";
import { ListTrafficPolicyVersionsOutput } from "./types/ListTrafficPolicyVersionsOutput";
import { ListVPCAssociationAuthorizationsInput } from "./types/ListVPCAssociationAuthorizationsInput";
import { ListVPCAssociationAuthorizationsOutput } from "./types/ListVPCAssociationAuthorizationsOutput";
import { NoSuchChange } from "./types/NoSuchChange";
import { NoSuchCloudWatchLogsLogGroup } from "./types/NoSuchCloudWatchLogsLogGroup";
import { NoSuchDelegationSet } from "./types/NoSuchDelegationSet";
import { NoSuchGeoLocation } from "./types/NoSuchGeoLocation";
import { NoSuchHealthCheck } from "./types/NoSuchHealthCheck";
import { NoSuchHostedZone } from "./types/NoSuchHostedZone";
import { NoSuchQueryLoggingConfig } from "./types/NoSuchQueryLoggingConfig";
import { NoSuchTrafficPolicy } from "./types/NoSuchTrafficPolicy";
import { NoSuchTrafficPolicyInstance } from "./types/NoSuchTrafficPolicyInstance";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { PriorRequestNotComplete } from "./types/PriorRequestNotComplete";
import { PublicZoneVPCAssociation } from "./types/PublicZoneVPCAssociation";
import { QueryLoggingConfigAlreadyExists } from "./types/QueryLoggingConfigAlreadyExists";
import { TestDNSAnswerInput } from "./types/TestDNSAnswerInput";
import { TestDNSAnswerOutput } from "./types/TestDNSAnswerOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { TooManyHealthChecks } from "./types/TooManyHealthChecks";
import { TooManyHostedZones } from "./types/TooManyHostedZones";
import { TooManyTrafficPolicies } from "./types/TooManyTrafficPolicies";
import { TooManyTrafficPolicyInstances } from "./types/TooManyTrafficPolicyInstances";
import { TooManyTrafficPolicyVersionsForCurrentPolicy } from "./types/TooManyTrafficPolicyVersionsForCurrentPolicy";
import { TooManyVPCAssociationAuthorizations } from "./types/TooManyVPCAssociationAuthorizations";
import { TrafficPolicyAlreadyExists } from "./types/TrafficPolicyAlreadyExists";
import { TrafficPolicyInUse } from "./types/TrafficPolicyInUse";
import { TrafficPolicyInstanceAlreadyExists } from "./types/TrafficPolicyInstanceAlreadyExists";
import { UpdateHealthCheckInput } from "./types/UpdateHealthCheckInput";
import { UpdateHealthCheckOutput } from "./types/UpdateHealthCheckOutput";
import { UpdateHostedZoneCommentInput } from "./types/UpdateHostedZoneCommentInput";
import { UpdateHostedZoneCommentOutput } from "./types/UpdateHostedZoneCommentOutput";
import { UpdateTrafficPolicyCommentInput } from "./types/UpdateTrafficPolicyCommentInput";
import { UpdateTrafficPolicyCommentOutput } from "./types/UpdateTrafficPolicyCommentOutput";
import { UpdateTrafficPolicyInstanceInput } from "./types/UpdateTrafficPolicyInstanceInput";
import { UpdateTrafficPolicyInstanceOutput } from "./types/UpdateTrafficPolicyInstanceOutput";
import { VPCAssociationAuthorizationNotFound } from "./types/VPCAssociationAuthorizationNotFound";
import { VPCAssociationNotFound } from "./types/VPCAssociationNotFound";
import { AssociateVPCWithHostedZoneCommand } from "./commands/AssociateVPCWithHostedZoneCommand";
import { ChangeResourceRecordSetsCommand } from "./commands/ChangeResourceRecordSetsCommand";
import { ChangeTagsForResourceCommand } from "./commands/ChangeTagsForResourceCommand";
import { CreateHealthCheckCommand } from "./commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommand } from "./commands/CreateHostedZoneCommand";
import { CreateQueryLoggingConfigCommand } from "./commands/CreateQueryLoggingConfigCommand";
import { CreateReusableDelegationSetCommand } from "./commands/CreateReusableDelegationSetCommand";
import { CreateTrafficPolicyCommand } from "./commands/CreateTrafficPolicyCommand";
import { CreateTrafficPolicyInstanceCommand } from "./commands/CreateTrafficPolicyInstanceCommand";
import { CreateTrafficPolicyVersionCommand } from "./commands/CreateTrafficPolicyVersionCommand";
import { CreateVPCAssociationAuthorizationCommand } from "./commands/CreateVPCAssociationAuthorizationCommand";
import { DeleteHealthCheckCommand } from "./commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommand } from "./commands/DeleteHostedZoneCommand";
import { DeleteQueryLoggingConfigCommand } from "./commands/DeleteQueryLoggingConfigCommand";
import { DeleteReusableDelegationSetCommand } from "./commands/DeleteReusableDelegationSetCommand";
import { DeleteTrafficPolicyCommand } from "./commands/DeleteTrafficPolicyCommand";
import { DeleteTrafficPolicyInstanceCommand } from "./commands/DeleteTrafficPolicyInstanceCommand";
import { DeleteVPCAssociationAuthorizationCommand } from "./commands/DeleteVPCAssociationAuthorizationCommand";
import { DisassociateVPCFromHostedZoneCommand } from "./commands/DisassociateVPCFromHostedZoneCommand";
import { GetAccountLimitCommand } from "./commands/GetAccountLimitCommand";
import { GetChangeCommand } from "./commands/GetChangeCommand";
import { GetCheckerIpRangesCommand } from "./commands/GetCheckerIpRangesCommand";
import { GetGeoLocationCommand } from "./commands/GetGeoLocationCommand";
import { GetHealthCheckCommand } from "./commands/GetHealthCheckCommand";
import { GetHealthCheckCountCommand } from "./commands/GetHealthCheckCountCommand";
import { GetHealthCheckLastFailureReasonCommand } from "./commands/GetHealthCheckLastFailureReasonCommand";
import { GetHealthCheckStatusCommand } from "./commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommand } from "./commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommand } from "./commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommand } from "./commands/GetHostedZoneLimitCommand";
import { GetQueryLoggingConfigCommand } from "./commands/GetQueryLoggingConfigCommand";
import { GetReusableDelegationSetCommand } from "./commands/GetReusableDelegationSetCommand";
import { GetReusableDelegationSetLimitCommand } from "./commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommand } from "./commands/GetTrafficPolicyCommand";
import { GetTrafficPolicyInstanceCommand } from "./commands/GetTrafficPolicyInstanceCommand";
import { GetTrafficPolicyInstanceCountCommand } from "./commands/GetTrafficPolicyInstanceCountCommand";
import { ListGeoLocationsCommand } from "./commands/ListGeoLocationsCommand";
import { ListHealthChecksCommand } from "./commands/ListHealthChecksCommand";
import { ListHostedZonesByNameCommand } from "./commands/ListHostedZonesByNameCommand";
import { ListHostedZonesCommand } from "./commands/ListHostedZonesCommand";
import { ListQueryLoggingConfigsCommand } from "./commands/ListQueryLoggingConfigsCommand";
import { ListResourceRecordSetsCommand } from "./commands/ListResourceRecordSetsCommand";
import { ListReusableDelegationSetsCommand } from "./commands/ListReusableDelegationSetsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTagsForResourcesCommand } from "./commands/ListTagsForResourcesCommand";
import { ListTrafficPoliciesCommand } from "./commands/ListTrafficPoliciesCommand";
import { ListTrafficPolicyInstancesByHostedZoneCommand } from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import { ListTrafficPolicyInstancesByPolicyCommand } from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import { ListTrafficPolicyInstancesCommand } from "./commands/ListTrafficPolicyInstancesCommand";
import { ListTrafficPolicyVersionsCommand } from "./commands/ListTrafficPolicyVersionsCommand";
import { ListVPCAssociationAuthorizationsCommand } from "./commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommand } from "./commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommand } from "./commands/UpdateHealthCheckCommand";
import { UpdateHostedZoneCommentCommand } from "./commands/UpdateHostedZoneCommentCommand";
import { UpdateTrafficPolicyCommentCommand } from "./commands/UpdateTrafficPolicyCommentCommand";
import { UpdateTrafficPolicyInstanceCommand } from "./commands/UpdateTrafficPolicyInstanceCommand";

export class Route53 extends Route53Client {
  /**
   * <p>Associates an Amazon VPC with a private hosted zone. </p> <important> <p>To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.</p> </important> <note> <p>If you want to associate a VPC that was created by using one AWS account with a private hosted zone that was created by using a different account, the AWS account that created the private hosted zone must first submit a <code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an <code>AssociateVPCWithHostedZone</code> request.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {NotAuthorizedException} <p>Associating the specified VPC with the specified hosted zone has not been authorized.</p>
   *   - {InvalidVPCId} <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {PublicZoneVPCAssociation} <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a VPC with a public hosted zone.</p>
   *   - {ConflictingDomainExists} <p>The cause of this error depends on whether you're trying to create a public or a private hosted zone:</p> <ul> <li> <p> <b>Public hosted zone:</b> Two hosted zones that have the same name or that have a parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a delegation set that shares one or more name servers with the existing hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p> </li> <li> <p> <b>Private hosted zone:</b> You specified an Amazon VPC that you're already using for another hosted zone, and the domain that you specified for one of the hosted zones is a subdomain of the domain that you specified for the other hosted zone. For example, you can't use the same Amazon VPC for the hosted zones for example.com and test.example.com.</p> </li> </ul>
   *   - {LimitsExceeded} <p>This operation can't be completed either because the current account has reached the limit on reusable delegation sets that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone. To get the current limit on the number of reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html">GetHostedZoneLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneInput
  ): Promise<AssociateVPCWithHostedZoneOutput>;
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneInput,
    cb: (err: any, data?: AssociateVPCWithHostedZoneOutput) => void
  ): void;
  public associateVPCWithHostedZone(
    args: AssociateVPCWithHostedZoneInput,
    cb?: (err: any, data?: AssociateVPCWithHostedZoneOutput) => void
  ): Promise<AssociateVPCWithHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateVPCWithHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use <code>ChangeResourceRecordSets</code> to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.</p> <p> <b>Change Batches and Transactional Changes</b> </p> <p>The request body must include a document with a <code>ChangeResourceRecordSetsRequest</code> element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. When using the Amazon Route 53 API to change resource record sets, Route 53 either makes all or none of the changes in a change batch request. This ensures that Route 53 never partially implements the intended changes to the resource record sets in a hosted zone. </p> <p>For example, a change batch request that deletes the <code>CNAME</code> record for www.example.com and creates an alias resource record set for www.example.com. Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If either the <code>DELETE</code> or the <code>CREATE</code> action fails, then both changes (plus any other changes in the batch) fail, and the original <code>CNAME</code> record continues to exist.</p> <important> <p>Due to the nature of transactional changes, you can't delete the same resource record set more than once in a single change batch. If you attempt to delete the same change batch more than once, Route 53 returns an <code>InvalidChangeBatch</code> error.</p> </important> <p> <b>Traffic Flow</b> </p> <p>To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route DNS Traffic</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Create, Delete, and Upsert</b> </p> <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following actions:</p> <ul> <li> <p> <code>CREATE</code>: Creates a resource record set that has the specified values.</p> </li> <li> <p> <code>DELETE</code>: Deletes an existing resource record set that has the specified values.</p> </li> <li> <p> <code>UPSERT</code>: If a resource record set does not already exist, AWS creates it. If a resource set does exist, Route 53 updates it with the values in the request. </p> </li> </ul> <p> <b>Syntaxes for Creating, Updating, and Deleting Resource Record Sets</b> </p> <p>The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. </p> <p>For an example for each type of resource record set, see "Examples."</p> <p>Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using <code>ChangeResourceRecordSets</code>. </p> <p> <b>Change Propagation to Route 53 DNS Servers</b> </p> <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers. While your changes are propagating, <code>GetChange</code> returns a status of <code>PENDING</code>. When propagation is complete, <code>GetChange</code> returns a status of <code>INSYNC</code>. Changes generally propagate to all Route 53 name servers within 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p> <p> <b>Limits on ChangeResourceRecordSets Requests</b> </p> <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {InvalidChangeBatch} <p>This exception contains a list of messages that might contain one or more error messages. Each error message indicates one error in the change batch.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsInput
  ): Promise<ChangeResourceRecordSetsOutput>;
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsInput,
    cb: (err: any, data?: ChangeResourceRecordSetsOutput) => void
  ): void;
  public changeResourceRecordSets(
    args: ChangeResourceRecordSetsInput,
    cb?: (err: any, data?: ChangeResourceRecordSetsOutput) => void
  ): Promise<ChangeResourceRecordSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ChangeResourceRecordSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {ThrottlingException} <p>The limit on the number of requests per second was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public changeTagsForResource(
    args: ChangeTagsForResourceInput
  ): Promise<ChangeTagsForResourceOutput>;
  public changeTagsForResource(
    args: ChangeTagsForResourceInput,
    cb: (err: any, data?: ChangeTagsForResourceOutput) => void
  ): void;
  public changeTagsForResource(
    args: ChangeTagsForResourceInput,
    cb?: (err: any, data?: ChangeTagsForResourceOutput) => void
  ): Promise<ChangeTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ChangeTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new health check.</p> <p>For information about adding health checks to resource record sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a> in <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p> <p> <b>ELB Load Balancers</b> </p> <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.</p> <p> <b>Private Hosted Zones</b> </p> <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p> <ul> <li> <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.</p> </li> <li> <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.</p> </li> <li> <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyHealthChecks} <p>This health check can't be created because the current account has reached the limit on the number of active health checks.</p> <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p> <p>You have reached the maximum number of active health checks for an AWS account. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {HealthCheckAlreadyExists} <p> The health check you're attempting to create already exists. Amazon Route 53 returns this error when you submit a request that has the following values:</p> <ul> <li> <p>The same value for <code>CallerReference</code> as an existing health check, and one or more values that differ from the existing health check that has the same caller reference.</p> </li> <li> <p>The same value for <code>CallerReference</code> as a health check that you created and later deleted, regardless of the other settings in the request.</p> </li> </ul>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHealthCheck(
    args: CreateHealthCheckInput
  ): Promise<CreateHealthCheckOutput>;
  public createHealthCheck(
    args: CreateHealthCheckInput,
    cb: (err: any, data?: CreateHealthCheckOutput) => void
  ): void;
  public createHealthCheck(
    args: CreateHealthCheckInput,
    cb?: (err: any, data?: CreateHealthCheckOutput) => void
  ): Promise<CreateHealthCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHealthCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). </p> <important> <p>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.</p> </important> <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following:</p> <ul> <li> <p>You can't create a hosted zone for a top-level domain (TLD) such as .com.</p> </li> <li> <p>For public hosted zones, Amazon Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the <code>DelegationSetId</code> element.</p> </li> <li> <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. </p> </li> </ul> <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDomainName} <p>The specified domain name is not valid.</p>
   *   - {HostedZoneAlreadyExists} <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created with the specified <code>CallerReference</code>.</p>
   *   - {TooManyHostedZones} <p>This operation can't be completed either because the current account has reached the limit on the number of hosted zones or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.</p> <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit on hosted zones that can be created by an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p> <p>To get the current limit on hosted zones that can be associated with a reusable delegation set, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html">GetReusableDelegationSetLimit</a>.</p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {InvalidVPCId} <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {DelegationSetNotAvailable} <p>You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Route 53 generates this error, contact Customer Support.</p>
   *   - {ConflictingDomainExists} <p>The cause of this error depends on whether you're trying to create a public or a private hosted zone:</p> <ul> <li> <p> <b>Public hosted zone:</b> Two hosted zones that have the same name or that have a parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a delegation set that shares one or more name servers with the existing hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p> </li> <li> <p> <b>Private hosted zone:</b> You specified an Amazon VPC that you're already using for another hosted zone, and the domain that you specified for one of the hosted zones is a subdomain of the domain that you specified for the other hosted zone. For example, you can't use the same Amazon VPC for the hosted zones for example.com and test.example.com.</p> </li> </ul>
   *   - {NoSuchDelegationSet} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {DelegationSetNotReusable} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHostedZone(
    args: CreateHostedZoneInput
  ): Promise<CreateHostedZoneOutput>;
  public createHostedZone(
    args: CreateHostedZoneInput,
    cb: (err: any, data?: CreateHostedZoneOutput) => void
  ): void;
  public createHostedZone(
    args: CreateHostedZoneInput,
    cb?: (err: any, data?: CreateHostedZoneOutput) => void
  ): Promise<CreateHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.</p> <p>DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:</p> <ul> <li> <p>Route 53 edge location that responded to the DNS query</p> </li> <li> <p>Domain or subdomain that was requested</p> </li> <li> <p>DNS record type, such as A or AAAA</p> </li> <li> <p>DNS response code, such as <code>NoError</code> or <code>ServFail</code> </p> </li> </ul> <dl> <dt>Log Group and Resource Policy</dt> <dd> <p>Before you create a query logging configuration, perform the following operations.</p> <note> <p>If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.</p> </note> <ol> <li> <p>Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:</p> <ul> <li> <p>You must create the log group in the us-east-1 region.</p> </li> <li> <p>You must use the same AWS account to create the log group and the hosted zone that you want to configure query logging for.</p> </li> <li> <p>When you create log groups for query logging, we recommend that you use a consistent prefix, for example:</p> <p> <code>/aws/route53/<i>hosted zone name</i> </code> </p> <p>In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated AWS resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.</p> </li> </ul> </li> <li> <p>Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. For the value of <code>Resource</code>, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with <code>*</code>, for example:</p> <p> <code>arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*</code> </p> <note> <p>You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the AWS SDKs, or the AWS CLI.</p> </note> </li> </ol> </dd> <dt>Log Streams and Edge Locations</dt> <dd> <p>When Route 53 finishes creating the configuration for DNS query logging, it does the following:</p> <ul> <li> <p>Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.</p> </li> <li> <p>Begins to send query logs to the applicable log stream.</p> </li> </ul> <p>The name of each log stream is in the following format:</p> <p> <code> <i>hosted zone ID</i>/<i>edge location code</i> </code> </p> <p>The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the <a href="http://aws.amazon.com/route53/details/">Route 53 Product Details</a> page.</p> </dd> <dt>Queries That Are Logged</dt> <dd> <p>Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">Routing Internet Traffic to Your Website or Web Application</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Log File Format</dt> <dd> <p>For a list of the values in each query log and the format of each value, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Pricing</dt> <dd> <p>For information about charges for query logs, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </dd> <dt>How to Stop Logging</dt> <dd> <p>If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html">DeleteQueryLoggingConfig</a>.</p> </dd> </dl>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {NoSuchCloudWatchLogsLogGroup} <p>There is no CloudWatch Logs log group with the specified ARN.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {QueryLoggingConfigAlreadyExists} <p>You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists for this hosted zone.</p>
   *   - {InsufficientCloudWatchLogsResourcePolicy} <p>Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes include the following:</p> <ul> <li> <p>There is no resource policy that specifies the log group ARN in the value for <code>Resource</code>.</p> </li> <li> <p>The resource policy that includes the log group ARN in the value for <code>Resource</code> doesn't have the necessary permissions.</p> </li> <li> <p>The resource policy hasn't finished propagating yet.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigInput
  ): Promise<CreateQueryLoggingConfigOutput>;
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigInput,
    cb: (err: any, data?: CreateQueryLoggingConfigOutput) => void
  ): void;
  public createQueryLoggingConfig(
    args: CreateQueryLoggingConfigInput,
    cb?: (err: any, data?: CreateQueryLoggingConfigOutput) => void
  ): Promise<CreateQueryLoggingConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateQueryLoggingConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones. If a hosted zoned ID is specified, <code>CreateReusableDelegationSet</code> marks the delegation set associated with that zone as reusable.</p> <note> <p>You can't associate a reusable delegation set with a private hosted zone.</p> </note> <p>For information about using a reusable delegation set to configure white label name servers, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White Label Name Servers</a>.</p> <p>The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps:</p> <ol> <li> <p>Create a reusable delegation set.</p> </li> <li> <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p> </li> <li> <p>Recreate resource record sets in the new hosted zones.</p> </li> <li> <p>Change the registrar's name servers to use the name servers for the new hosted zones.</p> </li> <li> <p>Monitor traffic for the website or application.</p> </li> <li> <p>Change TTLs back to their original values.</p> </li> </ol> <p>If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following:</p> <ul> <li> <p>For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones.</p> </li> <li> <p>For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.</p> </li> <li> <p>For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {DelegationSetAlreadyCreated} <p>A delegation set with the same owner and caller reference combination has already been created.</p>
   *   - {LimitsExceeded} <p>This operation can't be completed either because the current account has reached the limit on reusable delegation sets that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone. To get the current limit on the number of reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html">GetHostedZoneLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {HostedZoneNotFound} <p>The specified HostedZone can't be found.</p>
   *   - {InvalidArgument} <p>Parameter name is invalid.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {DelegationSetNotAvailable} <p>You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Route 53 generates this error, contact Customer Support.</p>
   *   - {DelegationSetAlreadyReusable} <p>The specified delegation set has already been marked as reusable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetInput
  ): Promise<CreateReusableDelegationSetOutput>;
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetInput,
    cb: (err: any, data?: CreateReusableDelegationSetOutput) => void
  ): void;
  public createReusableDelegationSet(
    args: CreateReusableDelegationSetInput,
    cb?: (err: any, data?: CreateReusableDelegationSetOutput) => void
  ): Promise<CreateReusableDelegationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReusableDelegationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {TooManyTrafficPolicies} <p>This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.</p> <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>To get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. </p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {TrafficPolicyAlreadyExists} <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
   *   - {InvalidTrafficPolicyDocument} <p>The format of the traffic policy document that you specified in the <code>Document</code> element is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficPolicy(
    args: CreateTrafficPolicyInput
  ): Promise<CreateTrafficPolicyOutput>;
  public createTrafficPolicy(
    args: CreateTrafficPolicyInput,
    cb: (err: any, data?: CreateTrafficPolicyOutput) => void
  ): void;
  public createTrafficPolicy(
    args: CreateTrafficPolicyInput,
    cb?: (err: any, data?: CreateTrafficPolicyOutput) => void
  ): Promise<CreateTrafficPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that <code>CreateTrafficPolicyInstance</code> created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {TooManyTrafficPolicyInstances} <p>This traffic policy instance can't be created because the current account has reached the limit on the number of traffic policy instances.</p> <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p> <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {TrafficPolicyInstanceAlreadyExists} <p>There is already a traffic policy instance with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceInput
  ): Promise<CreateTrafficPolicyInstanceOutput>;
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceInput,
    cb: (err: any, data?: CreateTrafficPolicyInstanceOutput) => void
  ): void;
  public createTrafficPolicyInstance(
    args: CreateTrafficPolicyInstanceInput,
    cb?: (err: any, data?: CreateTrafficPolicyInstanceOutput) => void
  ): Promise<CreateTrafficPolicyInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficPolicyInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {TooManyTrafficPolicyVersionsForCurrentPolicy} <p>This traffic policy version can't be created because you've reached the limit of 1000 on the number of versions that you can create for the current traffic policy.</p> <p>To create more traffic policy versions, you can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a> to get the traffic policy document for a specified traffic policy version, and then use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a> to create a new traffic policy using the traffic policy document.</p>
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {InvalidTrafficPolicyDocument} <p>The format of the traffic policy document that you specified in the <code>Document</code> element is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionInput
  ): Promise<CreateTrafficPolicyVersionOutput>;
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionInput,
    cb: (err: any, data?: CreateTrafficPolicyVersionOutput) => void
  ): void;
  public createTrafficPolicyVersion(
    args: CreateTrafficPolicyVersionInput,
    cb?: (err: any, data?: CreateTrafficPolicyVersionOutput) => void
  ): Promise<CreateTrafficPolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficPolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Authorizes the AWS account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code> request to associate the VPC with a specified hosted zone that was created by a different account. To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p> <note> <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {TooManyVPCAssociationAuthorizations} <p>You've created the maximum number of authorizations that can be created for the specified hosted zone. To authorize another VPC to be associated with the hosted zone, submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing authorization. To get a list of existing authorizations, submit a <code>ListVPCAssociationAuthorizations</code> request.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidVPCId} <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationInput
  ): Promise<CreateVPCAssociationAuthorizationOutput>;
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationInput,
    cb: (err: any, data?: CreateVPCAssociationAuthorizationOutput) => void
  ): void;
  public createVPCAssociationAuthorization(
    args: CreateVPCAssociationAuthorizationInput,
    cb?: (err: any, data?: CreateVPCAssociationAuthorizationOutput) => void
  ): Promise<CreateVPCAssociationAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVPCAssociationAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a health check.</p> <important> <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {HealthCheckInUse} <p>This error code is not in use.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHealthCheck(
    args: DeleteHealthCheckInput
  ): Promise<DeleteHealthCheckOutput>;
  public deleteHealthCheck(
    args: DeleteHealthCheckInput,
    cb: (err: any, data?: DeleteHealthCheckOutput) => void
  ): void;
  public deleteHealthCheck(
    args: DeleteHealthCheckInput,
    cb?: (err: any, data?: DeleteHealthCheckOutput) => void
  ): Promise<DeleteHealthCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHealthCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a hosted zone.</p> <p>If the hosted zone was created by another service, such as AWS Cloud Map, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.)</p> <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p> <important> <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.</p> </important> <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a> for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service."</p> <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a <code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p> <p>To verify that the hosted zone has been deleted, do one of the following:</p> <ul> <li> <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p> </li> <li> <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current AWS account.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {HostedZoneNotEmpty} <p>The hosted zone contains resource records that are not SOA or NS records.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {InvalidDomainName} <p>The specified domain name is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHostedZone(
    args: DeleteHostedZoneInput
  ): Promise<DeleteHostedZoneOutput>;
  public deleteHostedZone(
    args: DeleteHostedZoneInput,
    cb: (err: any, data?: DeleteHostedZoneOutput) => void
  ): void;
  public deleteHostedZone(
    args: DeleteHostedZoneInput,
    cb?: (err: any, data?: DeleteHostedZoneOutput) => void
  ): Promise<DeleteHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {NoSuchQueryLoggingConfig} <p>There is no DNS query logging configuration with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigInput
  ): Promise<DeleteQueryLoggingConfigOutput>;
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigInput,
    cb: (err: any, data?: DeleteQueryLoggingConfigOutput) => void
  ): void;
  public deleteQueryLoggingConfig(
    args: DeleteQueryLoggingConfigInput,
    cb?: (err: any, data?: DeleteQueryLoggingConfigOutput) => void
  ): Promise<DeleteQueryLoggingConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteQueryLoggingConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a reusable delegation set.</p> <important> <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p> </important> <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable delegation set that you want to delete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDelegationSet} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {DelegationSetInUse} <p>The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set can be deleted.</p>
   *   - {DelegationSetNotReusable} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetInput
  ): Promise<DeleteReusableDelegationSetOutput>;
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetInput,
    cb: (err: any, data?: DeleteReusableDelegationSetOutput) => void
  ): void;
  public deleteReusableDelegationSet(
    args: DeleteReusableDelegationSetInput,
    cb?: (err: any, data?: DeleteReusableDelegationSetOutput) => void
  ): Promise<DeleteReusableDelegationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReusableDelegationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a traffic policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {TrafficPolicyInUse} <p>One or more traffic policy instances were created by using the specified traffic policy.</p>
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyInput
  ): Promise<DeleteTrafficPolicyOutput>;
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyInput,
    cb: (err: any, data?: DeleteTrafficPolicyOutput) => void
  ): void;
  public deleteTrafficPolicy(
    args: DeleteTrafficPolicyInput,
    cb?: (err: any, data?: DeleteTrafficPolicyOutput) => void
  ): Promise<DeleteTrafficPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceInput
  ): Promise<DeleteTrafficPolicyInstanceOutput>;
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceInput,
    cb: (err: any, data?: DeleteTrafficPolicyInstanceOutput) => void
  ): void;
  public deleteTrafficPolicyInstance(
    args: DeleteTrafficPolicyInstanceInput,
    cb?: (err: any, data?: DeleteTrafficPolicyInstanceOutput) => void
  ): Promise<DeleteTrafficPolicyInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficPolicyInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p> <important> <p>Sending this request only prevents the AWS account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, <code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {VPCAssociationAuthorizationNotFound} <p>The VPC that you specified is not authorized to be associated with the hosted zone.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidVPCId} <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationInput
  ): Promise<DeleteVPCAssociationAuthorizationOutput>;
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationInput,
    cb: (err: any, data?: DeleteVPCAssociationAuthorizationOutput) => void
  ): void;
  public deleteVPCAssociationAuthorization(
    args: DeleteVPCAssociationAuthorizationInput,
    cb?: (err: any, data?: DeleteVPCAssociationAuthorizationOutput) => void
  ): Promise<DeleteVPCAssociationAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVPCAssociationAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a VPC from a Amazon Route 53 private hosted zone. Note the following:</p> <ul> <li> <p>You can't disassociate the last VPC from a private hosted zone.</p> </li> <li> <p>You can't convert a private hosted zone into a public hosted zone.</p> </li> <li> <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account that created the hosted zone or the account that created the VPC.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidVPCId} <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
   *   - {VPCAssociationNotFound} <p>The specified VPC and hosted zone are not currently associated.</p>
   *   - {LastVPCAssociation} <p>The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneInput
  ): Promise<DisassociateVPCFromHostedZoneOutput>;
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneInput,
    cb: (err: any, data?: DisassociateVPCFromHostedZoneOutput) => void
  ): void;
  public disassociateVPCFromHostedZone(
    args: DisassociateVPCFromHostedZoneInput,
    cb?: (err: any, data?: DisassociateVPCFromHostedZoneOutput) => void
  ): Promise<DisassociateVPCFromHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateVPCFromHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p> <note> <p>You can also view account limits in AWS Trusted Advisor. Sign in to the AWS Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountLimit(
    args: GetAccountLimitInput
  ): Promise<GetAccountLimitOutput>;
  public getAccountLimit(
    args: GetAccountLimitInput,
    cb: (err: any, data?: GetAccountLimitOutput) => void
  ): void;
  public getAccountLimit(
    args: GetAccountLimitInput,
    cb?: (err: any, data?: GetAccountLimitOutput) => void
  ): Promise<GetAccountLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current status of a change batch request. The status is one of the following values:</p> <ul> <li> <p> <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.</p> </li> <li> <p> <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchChange} <p>A change with the specified change ID does not exist.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getChange(args: GetChangeInput): Promise<GetChangeOutput>;
  public getChange(
    args: GetChangeInput,
    cb: (err: any, data?: GetChangeOutput) => void
  ): void;
  public getChange(
    args: GetChangeInput,
    cb?: (err: any, data?: GetChangeOutput) => void
  ): Promise<GetChangeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetChangeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <important> <p> <code>GetCheckerIpRanges</code> still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCheckerIpRanges(
    args: GetCheckerIpRangesInput
  ): Promise<GetCheckerIpRangesOutput>;
  public getCheckerIpRanges(
    args: GetCheckerIpRangesInput,
    cb: (err: any, data?: GetCheckerIpRangesOutput) => void
  ): void;
  public getCheckerIpRanges(
    args: GetCheckerIpRangesInput,
    cb?: (err: any, data?: GetCheckerIpRangesOutput) => void
  ): Promise<GetCheckerIpRangesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCheckerIpRangesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p> <p>Use the following syntax to determine whether a continent is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i> </code> </p> <p>Use the following syntax to determine whether a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i> </code> </p> <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&amp;subdivisioncode=<i>subdivision code</i> </code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchGeoLocation} <p>Amazon Route 53 doesn't support the specified geographic location.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGeoLocation(
    args: GetGeoLocationInput
  ): Promise<GetGeoLocationOutput>;
  public getGeoLocation(
    args: GetGeoLocationInput,
    cb: (err: any, data?: GetGeoLocationOutput) => void
  ): void;
  public getGeoLocation(
    args: GetGeoLocationInput,
    cb?: (err: any, data?: GetGeoLocationOutput) => void
  ): Promise<GetGeoLocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGeoLocationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified health check.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {IncompatibleVersion} <p>The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHealthCheck(
    args: GetHealthCheckInput
  ): Promise<GetHealthCheckOutput>;
  public getHealthCheck(
    args: GetHealthCheckInput,
    cb: (err: any, data?: GetHealthCheckOutput) => void
  ): void;
  public getHealthCheck(
    args: GetHealthCheckInput,
    cb?: (err: any, data?: GetHealthCheckOutput) => void
  ): Promise<GetHealthCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHealthCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the number of health checks that are associated with the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHealthCheckCount(
    args: GetHealthCheckCountInput
  ): Promise<GetHealthCheckCountOutput>;
  public getHealthCheckCount(
    args: GetHealthCheckCountInput,
    cb: (err: any, data?: GetHealthCheckCountOutput) => void
  ): void;
  public getHealthCheckCount(
    args: GetHealthCheckCountInput,
    cb?: (err: any, data?: GetHealthCheckCountOutput) => void
  ): Promise<GetHealthCheckCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHealthCheckCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the reason that a specified health check failed most recently.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonInput
  ): Promise<GetHealthCheckLastFailureReasonOutput>;
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonInput,
    cb: (err: any, data?: GetHealthCheckLastFailureReasonOutput) => void
  ): void;
  public getHealthCheckLastFailureReason(
    args: GetHealthCheckLastFailureReasonInput,
    cb?: (err: any, data?: GetHealthCheckLastFailureReasonOutput) => void
  ): Promise<GetHealthCheckLastFailureReasonOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHealthCheckLastFailureReasonCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets status of a specified health check. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHealthCheckStatus(
    args: GetHealthCheckStatusInput
  ): Promise<GetHealthCheckStatusOutput>;
  public getHealthCheckStatus(
    args: GetHealthCheckStatusInput,
    cb: (err: any, data?: GetHealthCheckStatusOutput) => void
  ): void;
  public getHealthCheckStatus(
    args: GetHealthCheckStatusInput,
    cb?: (err: any, data?: GetHealthCheckStatusOutput) => void
  ): Promise<GetHealthCheckStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHealthCheckStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHostedZone(args: GetHostedZoneInput): Promise<GetHostedZoneOutput>;
  public getHostedZone(
    args: GetHostedZoneInput,
    cb: (err: any, data?: GetHostedZoneOutput) => void
  ): void;
  public getHostedZone(
    args: GetHostedZoneInput,
    cb?: (err: any, data?: GetHostedZoneOutput) => void
  ): Promise<GetHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the number of hosted zones that are associated with the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHostedZoneCount(
    args: GetHostedZoneCountInput
  ): Promise<GetHostedZoneCountOutput>;
  public getHostedZoneCount(
    args: GetHostedZoneCountInput,
    cb: (err: any, data?: GetHostedZoneCountOutput) => void
  ): void;
  public getHostedZoneCount(
    args: GetHostedZoneCountInput,
    cb?: (err: any, data?: GetHostedZoneCountOutput) => void
  ): Promise<GetHostedZoneCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHostedZoneCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. </p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {HostedZoneNotPrivate} <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHostedZoneLimit(
    args: GetHostedZoneLimitInput
  ): Promise<GetHostedZoneLimitOutput>;
  public getHostedZoneLimit(
    args: GetHostedZoneLimitInput,
    cb: (err: any, data?: GetHostedZoneLimitOutput) => void
  ): void;
  public getHostedZoneLimit(
    args: GetHostedZoneLimitInput,
    cb?: (err: any, data?: GetHostedZoneLimitOutput) => void
  ): Promise<GetHostedZoneLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHostedZoneLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified configuration for DNS query logging.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchQueryLoggingConfig} <p>There is no DNS query logging configuration with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigInput
  ): Promise<GetQueryLoggingConfigOutput>;
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigInput,
    cb: (err: any, data?: GetQueryLoggingConfigOutput) => void
  ): void;
  public getQueryLoggingConfig(
    args: GetQueryLoggingConfigInput,
    cb?: (err: any, data?: GetQueryLoggingConfigOutput) => void
  ): Promise<GetQueryLoggingConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQueryLoggingConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDelegationSet} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {DelegationSetNotReusable} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReusableDelegationSet(
    args: GetReusableDelegationSetInput
  ): Promise<GetReusableDelegationSetOutput>;
  public getReusableDelegationSet(
    args: GetReusableDelegationSetInput,
    cb: (err: any, data?: GetReusableDelegationSetOutput) => void
  ): void;
  public getReusableDelegationSet(
    args: GetReusableDelegationSetInput,
    cb?: (err: any, data?: GetReusableDelegationSetOutput) => void
  ): Promise<GetReusableDelegationSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReusableDelegationSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchDelegationSet} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitInput
  ): Promise<GetReusableDelegationSetLimitOutput>;
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitInput,
    cb: (err: any, data?: GetReusableDelegationSetLimitOutput) => void
  ): void;
  public getReusableDelegationSetLimit(
    args: GetReusableDelegationSetLimitInput,
    cb?: (err: any, data?: GetReusableDelegationSetLimitOutput) => void
  ): Promise<GetReusableDelegationSetLimitOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReusableDelegationSetLimitCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specific traffic policy version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTrafficPolicy(
    args: GetTrafficPolicyInput
  ): Promise<GetTrafficPolicyOutput>;
  public getTrafficPolicy(
    args: GetTrafficPolicyInput,
    cb: (err: any, data?: GetTrafficPolicyOutput) => void
  ): void;
  public getTrafficPolicy(
    args: GetTrafficPolicyInput,
    cb?: (err: any, data?: GetTrafficPolicyOutput) => void
  ): Promise<GetTrafficPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTrafficPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified traffic policy instance.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceInput
  ): Promise<GetTrafficPolicyInstanceOutput>;
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceOutput) => void
  ): void;
  public getTrafficPolicyInstance(
    args: GetTrafficPolicyInstanceInput,
    cb?: (err: any, data?: GetTrafficPolicyInstanceOutput) => void
  ): Promise<GetTrafficPolicyInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTrafficPolicyInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the number of traffic policy instances that are associated with the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountInput
  ): Promise<GetTrafficPolicyInstanceCountOutput>;
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountInput,
    cb: (err: any, data?: GetTrafficPolicyInstanceCountOutput) => void
  ): void;
  public getTrafficPolicyInstanceCount(
    args: GetTrafficPolicyInstanceCountInput,
    cb?: (err: any, data?: GetTrafficPolicyInstanceCountOutput) => void
  ): Promise<GetTrafficPolicyInstanceCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTrafficPolicyInstanceCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of supported geographic locations.</p> <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGeoLocations(
    args: ListGeoLocationsInput
  ): Promise<ListGeoLocationsOutput>;
  public listGeoLocations(
    args: ListGeoLocationsInput,
    cb: (err: any, data?: ListGeoLocationsOutput) => void
  ): void;
  public listGeoLocations(
    args: ListGeoLocationsInput,
    cb?: (err: any, data?: ListGeoLocationsOutput) => void
  ): Promise<ListGeoLocationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGeoLocationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a list of the health checks that are associated with the current AWS account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {IncompatibleVersion} <p>The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHealthChecks(
    args: ListHealthChecksInput
  ): Promise<ListHealthChecksOutput>;
  public listHealthChecks(
    args: ListHealthChecksInput,
    cb: (err: any, data?: ListHealthChecksOutput) => void
  ): void;
  public listHealthChecks(
    args: ListHealthChecksInput,
    cb?: (err: any, data?: ListHealthChecksOutput) => void
  ): Promise<ListHealthChecksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHealthChecksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response includes a <code>HostedZones</code> child element for each hosted zone.</p> <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of up to 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchDelegationSet} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {DelegationSetNotReusable} <p>A reusable delegation set with the specified ID does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHostedZones(
    args: ListHostedZonesInput
  ): Promise<ListHostedZonesOutput>;
  public listHostedZones(
    args: ListHostedZonesInput,
    cb: (err: any, data?: ListHostedZonesOutput) => void
  ): void;
  public listHostedZones(
    args: ListHostedZonesInput,
    cb?: (err: any, data?: ListHostedZonesOutput) => void
  ): Promise<ListHostedZonesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHostedZonesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element for each hosted zone created by the current AWS account. </p> <p> <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order in some circumstances.</p> <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p> <p> <code>com.ex\344mple.</code> </p> <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p> <ul> <li> <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the <code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p> </li> <li> <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code> parameter in the request that produced the current response.</p> </li> <li> <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the current AWS account. </p> <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account. The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p> </li> <li> <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {InvalidDomainName} <p>The specified domain name is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHostedZonesByName(
    args: ListHostedZonesByNameInput
  ): Promise<ListHostedZonesByNameOutput>;
  public listHostedZonesByName(
    args: ListHostedZonesByNameInput,
    cb: (err: any, data?: ListHostedZonesByNameOutput) => void
  ): void;
  public listHostedZonesByName(
    args: ListHostedZonesByNameInput,
    cb?: (err: any, data?: ListHostedZonesByNameOutput) => void
  ): Promise<ListHostedZonesByNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHostedZonesByNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>. Additional information, including the format of DNS query logs, appears in <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {InvalidPaginationToken} <p>The value that you specified to get the second or subsequent page of results is invalid.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsInput
  ): Promise<ListQueryLoggingConfigsOutput>;
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsInput,
    cb: (err: any, data?: ListQueryLoggingConfigsOutput) => void
  ): void;
  public listQueryLoggingConfigs(
    args: ListQueryLoggingConfigsInput,
    cb?: (err: any, data?: ListQueryLoggingConfigsOutput) => void
  ): Promise<ListQueryLoggingConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListQueryLoggingConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resource record sets in a specified hosted zone.</p> <p> <code>ListResourceRecordSets</code> returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p> <p> <b>Sort order</b> </p> <p> <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before <code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! " # $ % &amp; ' ( ) * + , -</code> </p> <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p> <p> <b>Specifying where to start listing records</b> </p> <p>You can use the name and type elements to specify the resource record set that the list begins with:</p> <dl> <dt>If you do not specify Name or Type</dt> <dd> <p>The results begin with the first resource record set that the hosted zone contains.</p> </dd> <dt>If you specify Name but not Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>.</p> </dd> <dt>If you specify Type but not Name</dt> <dd> <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p> </dd> <dt>If you specify both Name and Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p> </dd> </dl> <p> <b>Resource record sets that are PENDING</b> </p> <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>, and that are not yet available on all Route 53 DNS servers.</p> <p> <b>Changing resource record sets</b> </p> <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a <code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.</p> <p> <b>Displaying the next page of results</b> </p> <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code> is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>, and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceRecordSets(
    args: ListResourceRecordSetsInput
  ): Promise<ListResourceRecordSetsOutput>;
  public listResourceRecordSets(
    args: ListResourceRecordSetsInput,
    cb: (err: any, data?: ListResourceRecordSetsOutput) => void
  ): void;
  public listResourceRecordSets(
    args: ListResourceRecordSetsInput,
    cb?: (err: any, data?: ListResourceRecordSetsOutput) => void
  ): Promise<ListResourceRecordSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceRecordSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of the reusable delegation sets that are associated with the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsInput
  ): Promise<ListReusableDelegationSetsOutput>;
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsInput,
    cb: (err: any, data?: ListReusableDelegationSetsOutput) => void
  ): void;
  public listReusableDelegationSets(
    args: ListReusableDelegationSetsInput,
    cb?: (err: any, data?: ListReusableDelegationSetsOutput) => void
  ): Promise<ListReusableDelegationSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReusableDelegationSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists tags for one health check or hosted zone. </p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {ThrottlingException} <p>The limit on the number of requests per second was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists tags for up to 10 health checks or hosted zones.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {ThrottlingException} <p>The limit on the number of requests per second was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResources(
    args: ListTagsForResourcesInput
  ): Promise<ListTagsForResourcesOutput>;
  public listTagsForResources(
    args: ListTagsForResourcesInput,
    cb: (err: any, data?: ListTagsForResourcesOutput) => void
  ): void;
  public listTagsForResources(
    args: ListTagsForResourcesInput,
    cb?: (err: any, data?: ListTagsForResourcesOutput) => void
  ): Promise<ListTagsForResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order that they were created in. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrafficPolicies(
    args: ListTrafficPoliciesInput
  ): Promise<ListTrafficPoliciesOutput>;
  public listTrafficPolicies(
    args: ListTrafficPoliciesInput,
    cb: (err: any, data?: ListTrafficPoliciesOutput) => void
  ): void;
  public listTrafficPolicies(
    args: ListTrafficPoliciesInput,
    cb?: (err: any, data?: ListTrafficPoliciesOutput) => void
  ): Promise<ListTrafficPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrafficPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the traffic policy instances that you created by using the current AWS account.</p> <note> <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesInput
  ): Promise<ListTrafficPolicyInstancesOutput>;
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesOutput) => void
  ): void;
  public listTrafficPolicyInstances(
    args: ListTrafficPolicyInstancesInput,
    cb?: (err: any, data?: ListTrafficPolicyInstancesOutput) => void
  ): Promise<ListTrafficPolicyInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrafficPolicyInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneInput
  ): Promise<ListTrafficPolicyInstancesByHostedZoneOutput>;
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneOutput) => void
  ): void;
  public listTrafficPolicyInstancesByHostedZone(
    args: ListTrafficPolicyInstancesByHostedZoneInput,
    cb?: (err: any, data?: ListTrafficPolicyInstancesByHostedZoneOutput) => void
  ): Promise<ListTrafficPolicyInstancesByHostedZoneOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrafficPolicyInstancesByHostedZoneCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyInput
  ): Promise<ListTrafficPolicyInstancesByPolicyOutput>;
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyInput,
    cb: (err: any, data?: ListTrafficPolicyInstancesByPolicyOutput) => void
  ): void;
  public listTrafficPolicyInstancesByPolicy(
    args: ListTrafficPolicyInstancesByPolicyInput,
    cb?: (err: any, data?: ListTrafficPolicyInstancesByPolicyOutput) => void
  ): Promise<ListTrafficPolicyInstancesByPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrafficPolicyInstancesByPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about all of the versions for a specified traffic policy.</p> <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsInput
  ): Promise<ListTrafficPolicyVersionsOutput>;
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsInput,
    cb: (err: any, data?: ListTrafficPolicyVersionsOutput) => void
  ): void;
  public listTrafficPolicyVersions(
    args: ListTrafficPolicyVersionsInput,
    cb?: (err: any, data?: ListTrafficPolicyVersionsOutput) => void
  ): Promise<ListTrafficPolicyVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrafficPolicyVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p> <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC that can be associated with the hosted zone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {InvalidPaginationToken} <p>The value that you specified to get the second or subsequent page of results is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsInput
  ): Promise<ListVPCAssociationAuthorizationsOutput>;
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsInput,
    cb: (err: any, data?: ListVPCAssociationAuthorizationsOutput) => void
  ): void;
  public listVPCAssociationAuthorizations(
    args: ListVPCAssociationAuthorizationsInput,
    cb?: (err: any, data?: ListVPCAssociationAuthorizationsOutput) => void
  ): Promise<ListVPCAssociationAuthorizationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVPCAssociationAuthorizationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testDNSAnswer(args: TestDNSAnswerInput): Promise<TestDNSAnswerOutput>;
  public testDNSAnswer(
    args: TestDNSAnswerInput,
    cb: (err: any, data?: TestDNSAnswerOutput) => void
  ): void;
  public testDNSAnswer(
    args: TestDNSAnswerInput,
    cb?: (err: any, data?: TestDNSAnswerOutput) => void
  ): Promise<TestDNSAnswerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestDNSAnswerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing health check. Note that some values can't be updated. </p> <p>For more information about updating health checks, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHealthCheck} <p>No health check exists with the specified ID.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {HealthCheckVersionMismatch} <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of <code>HealthCheckVersion</code> in the health check.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateHealthCheck(
    args: UpdateHealthCheckInput
  ): Promise<UpdateHealthCheckOutput>;
  public updateHealthCheck(
    args: UpdateHealthCheckInput,
    cb: (err: any, data?: UpdateHealthCheckOutput) => void
  ): void;
  public updateHealthCheck(
    args: UpdateHealthCheckInput,
    cb?: (err: any, data?: UpdateHealthCheckOutput) => void
  ): Promise<UpdateHealthCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateHealthCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the comment for a specified hosted zone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchHostedZone} <p>No hosted zone exists with the ID that you specified.</p>
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentInput
  ): Promise<UpdateHostedZoneCommentOutput>;
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentInput,
    cb: (err: any, data?: UpdateHostedZoneCommentOutput) => void
  ): void;
  public updateHostedZoneComment(
    args: UpdateHostedZoneCommentInput,
    cb?: (err: any, data?: UpdateHostedZoneCommentOutput) => void
  ): Promise<UpdateHostedZoneCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateHostedZoneCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the comment for a specified traffic policy version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {ConcurrentModification} <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentInput
  ): Promise<UpdateTrafficPolicyCommentOutput>;
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentInput,
    cb: (err: any, data?: UpdateTrafficPolicyCommentOutput) => void
  ): void;
  public updateTrafficPolicyComment(
    args: UpdateTrafficPolicyCommentInput,
    cb?: (err: any, data?: UpdateTrafficPolicyCommentOutput) => void
  ): Promise<UpdateTrafficPolicyCommentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTrafficPolicyCommentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p> <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p> <ol> <li> <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets. </p> </li> <li> <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.</p> </li> <li> <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInput} <p>The input is not valid.</p>
   *   - {NoSuchTrafficPolicy} <p>No traffic policy exists with the specified ID.</p>
   *   - {NoSuchTrafficPolicyInstance} <p>No traffic policy instance exists with the specified ID.</p>
   *   - {PriorRequestNotComplete} <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.</p>
   *   - {ConflictingTypes} <p>You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type than the current type for the instance. You specified the type in the JSON document in the <code>CreateTrafficPolicy</code> or <code>CreateTrafficPolicyVersion</code>request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceInput
  ): Promise<UpdateTrafficPolicyInstanceOutput>;
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceInput,
    cb: (err: any, data?: UpdateTrafficPolicyInstanceOutput) => void
  ): void;
  public updateTrafficPolicyInstance(
    args: UpdateTrafficPolicyInstanceInput,
    cb?: (err: any, data?: UpdateTrafficPolicyInstanceOutput) => void
  ): Promise<UpdateTrafficPolicyInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTrafficPolicyInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
