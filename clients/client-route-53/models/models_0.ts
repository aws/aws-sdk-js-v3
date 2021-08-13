import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export type AccountLimitType =
  | "MAX_HEALTH_CHECKS_BY_OWNER"
  | "MAX_HOSTED_ZONES_BY_OWNER"
  | "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER"
  | "MAX_TRAFFIC_POLICIES_BY_OWNER"
  | "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER";

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface AccountLimit {
  /**
   * <p>The limit that you requested. Valid values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create
   * 				using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create
   * 				using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets
   * 				that you can create using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies
   * 				that you can create using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances
   * 				that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the
   * 				Amazon Route 53 console.)</p>
   *             </li>
   *          </ul>
   */
  Type: AccountLimitType | string | undefined;

  /**
   * <p>The current value for the limit that is specified by
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AccountLimit.html#Route53-Type-AccountLimit-Type">Type</a>.</p>
   */
  Value: number | undefined;
}

export namespace AccountLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj,
  });
}

export interface ActivateKeySigningKeyRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters,  and underscores (_). <code>Name</code> must be unique for each key-signing key in the same
   * 			hosted zone.</p>
   */
  Name: string | undefined;
}

export namespace ActivateKeySigningKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateKeySigningKeyRequest): any => ({
    ...obj,
  });
}

export type ChangeStatus = "INSYNC" | "PENDING";

/**
 * <p>A complex type that describes change information about changes made to your hosted
 * 			zone.</p>
 */
export interface ChangeInfo {
  /**
   * <p>This element contains an ID that you use when performing a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>
   * 			action to get detailed information about the change.</p>
   */
  Id: string | undefined;

  /**
   * <p>The current state of the request. <code>PENDING</code> indicates that this request has
   * 			not yet been applied to all Amazon Route 53 DNS servers.</p>
   */
  Status: ChangeStatus | string | undefined;

  /**
   * <p>The date and time that the change request was submitted in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC).
   * 			For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
   */
  SubmittedAt: Date | undefined;

  /**
   * <p>A comment you can provide.</p>
   */
  Comment?: string;
}

export namespace ChangeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeInfo): any => ({
    ...obj,
  });
}

export interface ActivateKeySigningKeyResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace ActivateKeySigningKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateKeySigningKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
 */
export interface ConcurrentModification extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModification";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ConcurrentModification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModification): any => ({
    ...obj,
  });
}

/**
 * <p>The input is not valid.</p>
 */
export interface InvalidInput extends __SmithyException, $MetadataBearer {
  name: "InvalidInput";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInput): any => ({
    ...obj,
  });
}

/**
 * <p>The key-signing key (KSK) status isn't valid or another KSK has the status <code>INTERNAL_FAILURE</code>.</p>
 */
export interface InvalidKeySigningKeyStatus extends __SmithyException, $MetadataBearer {
  name: "InvalidKeySigningKeyStatus";
  $fault: "client";
  message?: string;
}

export namespace InvalidKeySigningKeyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKeySigningKeyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC signing.</p>
 */
export interface InvalidKMSArn extends __SmithyException, $MetadataBearer {
  name: "InvalidKMSArn";
  $fault: "client";
  message?: string;
}

export namespace InvalidKMSArn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKMSArn): any => ({
    ...obj,
  });
}

/**
 * <p>Your hosted zone status isn't valid for this operation. In the hosted zone, change the status to enable <code>DNSSEC</code>
 * 			or disable <code>DNSSEC</code>.</p>
 */
export interface InvalidSigningStatus extends __SmithyException, $MetadataBearer {
  name: "InvalidSigningStatus";
  $fault: "client";
  message?: string;
}

export namespace InvalidSigningStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSigningStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The specified key-signing key (KSK) doesn't exist.</p>
 */
export interface NoSuchKeySigningKey extends __SmithyException, $MetadataBearer {
  name: "NoSuchKeySigningKey";
  $fault: "client";
  message?: string;
}

export namespace NoSuchKeySigningKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchKeySigningKey): any => ({
    ...obj,
  });
}

export type CloudWatchRegion =
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-gov-east-1"
  | "us-gov-west-1"
  | "us-iso-east-1"
  | "us-isob-east-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
 * 			the specified health check is healthy.</p>
 */
export interface AlarmIdentifier {
  /**
   * <p>For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy,
   * 			the region that the alarm was created in.</p>
   * 	        <p>For the current list of CloudWatch regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/cw_region.html">Amazon CloudWatch endpoints and quotas</a> in
   * 			the <i>Amazon Web Services General Reference</i>.</p>
   */
  Region: CloudWatchRegion | string | undefined;

  /**
   * <p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p>
   * 		       <note>
   *             <p>Route 53 supports CloudWatch alarms with the following features:</p>
   * 			         <ul>
   *                <li>
   *                   <p>Standard-resolution metrics. High-resolution metrics aren't supported. For more information, see
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a>
   * 					in the <i>Amazon CloudWatch User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren't supported.</p>
   *                </li>
   *             </ul>
   * 		       </note>
   */
  Name: string | undefined;
}

export namespace AlarmIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>Alias resource record sets only:</i> Information about the Amazon Web Services resource, such as a CloudFront distribution or
 * 			an Amazon S3 bucket, that you want to route traffic to.</p>
 * 		       <p>When creating resource record sets for a private hosted zone, note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone
 * 					is unsupported.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For information about creating failover resource record sets in a private hosted zone, see
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p>
 * 			         </li>
 *          </ul>
 */
export interface AliasTarget {
  /**
   * <p>
   *             <i>Alias resource records sets only</i>: The value used depends on where you want to route traffic:</p>
   * 		       <dl>
   *             <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt>
   *             <dd>
   *                <p>Specify the hosted zone ID for your API. You can get the applicable value using the CLI command
   * 					<a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html">get-domain-names</a>:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>For regional APIs, specify the value of <code>regionalHostedZoneId</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>For edge-optimized APIs, specify the value of <code>distributionHostedZoneId</code>.</p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>Amazon Virtual Private Cloud interface VPC endpoint</dt>
   *             <dd>
   *                <p>Specify the hosted zone ID for your interface endpoint. You can get the value of <code>HostedZoneId</code>
   * 					using the CLI command
   * 					<a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html">describe-vpc-endpoints</a>.</p>
   * 				        </dd>
   *             <dt>CloudFront distribution</dt>
   *             <dd>
   * 					          <p>Specify <code>Z2FDTNDATAQYW2</code>.</p>
   * 					          <note>
   * 						            <p>Alias resource record sets for CloudFront can't be created in a private zone.</p>
   * 					          </note>
   * 				        </dd>
   *             <dt>Elastic Beanstalk environment</dt>
   *             <dd>
   * 					          <p>Specify the hosted zone ID for the region that you created the environment in. The environment
   * 						must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see
   * 					    <a href="https://docs.aws.amazon.com/general/latest/gr/elasticbeanstalk.html">Elastic Beanstalk endpoints and quotas</a> in the
   * 						 the <i>Amazon Web Services General Reference</i>.</p>
   * 				        </dd>
   *             <dt>ELB load balancer</dt>
   *             <dd>
   * 					          <p>Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the
   * 						hosted zone ID:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/general/latest/gr/elb.html">Elastic Load Balancing endpoints and quotas</a> topic in the <i>Amazon Web Services General Reference</i>:
   * 							Use the value that corresponds with the region that you created your load balancer in. Note that there are
   * 							separate columns for Application and Classic Load Balancers and for Network Load Balancers.</p>
   *                   </li>
   *                   <li>
   * 							              <p>
   *                         <b>Amazon Web Services Management Console</b>: Go to the Amazon EC2 page, choose
   * 								<b>Load Balancers</b> in the navigation pane, select the load balancer, and get the value of the
   * 								<b>Hosted zone</b> field on the <b>Description</b> tab.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>Elastic Load Balancing API</b>: Use <code>DescribeLoadBalancers</code> to get the
   * 								applicable value. For more information, see the applicable guide:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>Classic Load Balancers: Use
   * 									<a href="https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   * 									to get the value of <code>CanonicalHostedZoneNameId</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers: Use
   * 									<a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   * 									to get the value of <code>CanonicalHostedZoneId</code>.</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>CLI</b>: Use <code>describe-load-balancers</code> to get the applicable value.
   * 								For more information, see the applicable guide:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>Classic Load Balancers: Use
   * 									<a href="http://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html">describe-load-balancers</a>
   * 									to get the value of <code>CanonicalHostedZoneNameId</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers: Use
   * 									<a href="http://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html">describe-load-balancers</a>
   * 									to get the value of <code>CanonicalHostedZoneId</code>.</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>Global Accelerator accelerator</dt>
   *             <dd>
   *                <p>Specify <code>Z2BJ6XQ5FK7U4H</code>.</p>
   *             </dd>
   *             <dt>An Amazon S3 bucket configured as a static website</dt>
   *             <dd>
   * 					          <p>Specify the hosted zone ID for the region that you created the bucket in. For more information about
   * 						valid values, see the table
   * 						<a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints">Amazon S3 Website Endpoints</a>
   * 						in the <i>Amazon Web Services General Reference</i>.</p>
   * 				        </dd>
   *             <dt>Another Route 53 resource record set in your hosted zone</dt>
   *             <dd>
   * 					          <p>Specify the hosted zone ID of your hosted zone. (An alias resource record set
   * 						can't reference a resource record set in a different hosted zone.)</p>
   * 				        </dd>
   *          </dl>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>
   *             <i>Alias resource record sets only:</i> The value that you specify depends on where you want to route queries:</p>
   * 		       <dl>
   *             <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt>
   *             <dd>
   *                <p>Specify the applicable domain name for your API. You can get the applicable value using the CLI command
   * 					<a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html">get-domain-names</a>:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>For regional APIs, specify the value of <code>regionalDomainName</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>For edge-optimized APIs, specify the value of <code>distributionDomainName</code>. This is the name of the
   * 							associated CloudFront distribution, such as <code>da1b2c3d4e5.cloudfront.net</code>.</p>
   *                   </li>
   *                </ul>
   * 					          <note>
   * 						            <p>The name of the record that you're creating must match a custom domain name for your API, such as
   * 							<code>api.example.com</code>.</p>
   * 					          </note>
   * 				        </dd>
   *             <dt>Amazon Virtual Private Cloud interface VPC endpoint</dt>
   *             <dd>
   *                <p>Enter the API endpoint for the interface endpoint, such as
   * 					<code>vpce-123456789abcdef01-example-us-east-1a.elasticloadbalancing.us-east-1.vpce.amazonaws.com</code>. For edge-optimized APIs,
   * 					this is the domain name for the corresponding CloudFront distribution. You can get the value of <code>DnsName</code> using the CLI command
   * 					<a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html">describe-vpc-endpoints</a>.</p>
   * 				        </dd>
   *             <dt>CloudFront distribution</dt>
   *             <dd>
   *                <p>Specify the domain name that CloudFront assigned when you created your distribution.</p>
   * 					          <p>Your CloudFront distribution must include an alternate domain name that matches the name of the resource record set.
   * 						For example, if the name of the resource record set is <i>acme.example.com</i>, your CloudFront distribution must
   * 						include <i>acme.example.com</i> as one of the alternate domain names. For more information, see
   * 						<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html">Using Alternate Domain Names (CNAMEs)</a> in the
   * 						<i>Amazon CloudFront Developer Guide</i>.</p>
   * 					          <p>You can't create a resource record set in a private hosted zone to route traffic to a CloudFront distribution.</p>
   * 					          <note>
   *                   <p>For failover alias records, you can't specify a CloudFront distribution for both the primary and secondary records.
   * 						A distribution must include an alternate domain name that matches the name of the record. However, the primary and secondary records
   * 						have the same name, and you can't include the same alternate domain name in more than one distribution. </p>
   *                </note>
   * 				        </dd>
   *             <dt>Elastic Beanstalk environment</dt>
   *             <dd>
   * 					          <p>If the domain name for your Elastic Beanstalk environment includes the region that you deployed the environment in,
   * 						you can create an alias record that routes traffic to the environment. For example, the domain name
   * 						<code>my-environment.<i>us-west-2</i>.elasticbeanstalk.com</code> is a regionalized domain name. </p>
   * 					          <important>
   * 						            <p>For environments that were created before early 2016, the domain name doesn't include the region. To route traffic
   * 							to these environments, you must create a CNAME record instead of an alias record. Note that you can't create a
   * 							CNAME record for the root domain name. For example, if your domain name is example.com, you can create a record
   * 							that routes traffic for acme.example.com to your Elastic Beanstalk environment, but you can't create a record
   * 							that routes traffic for example.com to your Elastic Beanstalk environment.</p>
   * 					          </important>
   * 					          <p>For Elastic Beanstalk environments that have regionalized subdomains, specify the <code>CNAME</code> attribute for the environment.
   * 						You can use the following methods to get the value of the CNAME attribute:</p>
   * 					          <ul>
   *                   <li>
   * 							              <p>
   *                         <i>Amazon Web Services Management Console</i>: For information about how to get the value by using the console,
   * 								see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html">Using Custom Domains with Elastic Beanstalk</a> in the
   * 								<i>Elastic Beanstalk Developer Guide</i>.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <i>Elastic Beanstalk API</i>: Use the <code>DescribeEnvironments</code> action to get
   * 								the value of the <code>CNAME</code> attribute. For more information, see
   * 								<a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html">DescribeEnvironments</a>
   * 								in the <i>Elastic Beanstalk API Reference</i>.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <i>CLI</i>: Use the <code>describe-environments</code> command to get the value of the
   * 								<code>CNAME</code> attribute. For more information, see
   * 								<a href="https://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/describe-environments.html">describe-environments</a> in the
   * 								<i>CLI Command Reference</i>.</p>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>ELB load balancer</dt>
   *             <dd>
   *                <p>Specify the DNS name that is associated with the load balancer. Get the DNS name by using the Amazon Web Services Management Console,
   * 					the ELB API, or the CLI. </p>
   * 					          <ul>
   *                   <li>
   * 							              <p>
   *                         <b>Amazon Web Services Management Console</b>: Go to the EC2 page, choose <b>Load Balancers</b>
   * 								in the navigation pane, choose the load balancer, choose the <b>Description</b> tab, and get the value
   * 								of the <b>DNS name</b> field. </p>
   * 							              <p>If you're routing traffic to a Classic Load Balancer, get the value that begins with <b>dualstack</b>.
   * 								If you're routing traffic to another type of load balancer, get the value that applies to the record type, A or AAAA.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>Elastic Load Balancing API</b>: Use <code>DescribeLoadBalancers</code> to get the value
   * 								of <code>DNSName</code>. For more information, see the applicable guide:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>Classic Load Balancers:
   * 									<a href="https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers:
   * 									<a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>CLI</b>: Use <code>describe-load-balancers</code> to get the value of <code>DNSName</code>.
   * 								For more information, see the applicable guide:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>Classic Load Balancers:
   * 									<a href="http://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html">describe-load-balancers</a>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers:
   * 									<a href="http://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html">describe-load-balancers</a>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>Global Accelerator accelerator</dt>
   *             <dd>
   *                <p>Specify the DNS name for your accelerator:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <b>Global Accelerator API:</b> To get the DNS name, use
   * 							<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html">DescribeAccelerator</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CLI:</b> To get the DNS name, use
   * 							<a href="https://docs.aws.amazon.com/cli/latest/reference/globalaccelerator/describe-accelerator.html">describe-accelerator</a>.</p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>Amazon S3 bucket that is configured as a static website</dt>
   *             <dd>
   *                <p>Specify the domain name of the Amazon S3 website endpoint that you created the bucket in, for example,
   * 					<code>s3-website.us-east-2.amazonaws.com</code>. For more information about valid values, see the table
   * 					<a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints">Amazon S3 Website Endpoints</a>
   * 					in the <i>Amazon Web Services General Reference</i>. For more information about using S3 buckets for websites,
   * 					see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html">Getting Started with Amazon Route 53</a>
   * 					in the <i>Amazon Route 53 Developer Guide.</i>
   *                </p>
   *             </dd>
   *             <dt>Another Route 53 resource record set</dt>
   *             <dd>
   *                <p>Specify the value of the <code>Name</code> element for a resource record set in the current hosted zone.</p>
   * 					          <note>
   *                   <p>If you're creating an alias record that has the same name as the hosted zone (known as the zone apex),
   * 						you can't specify the domain name for a record for which the value of <code>Type</code> is <code>CNAME</code>. This is because
   * 						the alias record must have the same type as the record that you're routing traffic to, and creating a CNAME record for the
   * 						zone apex isn't supported even for an alias record.</p>
   *                </note>
   * 				        </dd>
   *          </dl>
   */
  DNSName: string | undefined;

  /**
   * <p>
   *             <i>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets:</i>
   * 			When <code>EvaluateTargetHealth</code> is <code>true</code>, an alias resource record set inherits the health of the referenced Amazon Web Services resource,
   * 			such as an ELB load balancer or another resource record set in the hosted zone.</p>
   * 		       <p>Note the following:</p>
   *
   * 		       <dl>
   *             <dt>CloudFront distributions</dt>
   *             <dd>
   *                <p>You can't set <code>EvaluateTargetHealth</code> to <code>true</code> when the alias target is a
   * 					CloudFront distribution.</p>
   *             </dd>
   *             <dt>Elastic Beanstalk environments that have regionalized subdomains</dt>
   *             <dd>
   *                <p>If you specify an Elastic Beanstalk environment in <code>DNSName</code> and the environment contains an ELB load balancer,
   * 					Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically
   * 					contains an ELB load balancer if it includes more than one Amazon EC2 instance.) If you set <code>EvaluateTargetHealth</code> to
   * 					<code>true</code> and either no Amazon EC2 instances are healthy or the load balancer itself is unhealthy,
   * 					Route 53 routes queries to other available resources that are healthy, if any. </p>
   * 					          <p>If the environment contains a single Amazon EC2 instance, there are no special requirements.</p>
   *             </dd>
   *             <dt>ELB load balancers</dt>
   *             <dd>
   *                <p>Health checking behavior depends on the type of load balancer:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <b>Classic Load Balancers</b>: If you specify an ELB Classic Load Balancer in
   * 							<code>DNSName</code>, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer.
   * 							If you set <code>EvaluateTargetHealth</code> to <code>true</code> and either no EC2 instances are healthy or the
   * 							load balancer itself is unhealthy, Route 53 routes queries to other resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Application and Network Load Balancers</b>: If you specify an ELB
   * 							Application or Network Load Balancer and you set <code>EvaluateTargetHealth</code> to <code>true</code>,
   * 							Route 53 routes queries to the load balancer based on the health of the target groups that are associated with the load balancer:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>For an Application or Network Load Balancer to be considered healthy, every target group that contains targets
   * 									must contain at least one healthy target. If any target group contains only unhealthy targets, the load balancer is considered
   * 									unhealthy, and Route 53 routes queries to other resources.</p>
   *                         </li>
   *                         <li>
   *                            <p>A target group that has no registered targets is considered unhealthy.</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 					          <note>
   *                   <p>When you create a load balancer, you configure settings for Elastic Load Balancing health checks; they're not Route 53 health checks, but
   * 						they perform a similar function. Do not create Route 53 health checks for the EC2 instances that you register with an ELB load balancer. </p>
   *                </note>
   * 				        </dd>
   *             <dt>S3 buckets</dt>
   *             <dd>
   *                <p>There are no special requirements for setting <code>EvaluateTargetHealth</code> to <code>true</code>
   * 					when the alias target is an S3 bucket.</p>
   *             </dd>
   *             <dt>Other records in the same hosted zone</dt>
   *             <dd>
   *                <p>If the Amazon Web Services resource that you specify in <code>DNSName</code> is a record or a group of records
   * 					(for example, a group of weighted records) but is not another alias record, we recommend that you associate a health check
   * 					with all of the records in the alias target. For more information, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting">What Happens When You Omit Health Checks?</a>
   * 					in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *             </dd>
   *          </dl>
   *
   * 		       <p>For more information and examples, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Amazon Route 53 Health Checks and DNS Failover</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  EvaluateTargetHealth: boolean | undefined;
}

export namespace AliasTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AliasTarget): any => ({
    ...obj,
  });
}

export type VPCRegion =
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-gov-east-1"
  | "us-gov-west-1"
  | "us-iso-east-1"
  | "us-isob-east-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p>
 */
export interface VPC {
  /**
   * <p>(Private hosted zones only) The region that an Amazon VPC was created in.</p>
   */
  VPCRegion?: VPCRegion | string;

  /**
   * <p>(Private hosted zones only) The ID of an Amazon VPC. </p>
   */
  VPCId?: string;
}

export namespace VPC {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPC): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the request to associate a VPC with a private hosted zone.</p>
 */
export interface AssociateVPCWithHostedZoneRequest {
  /**
   * <p>The ID of the private hosted zone that you want to associate an Amazon VPC with.</p>
   * 		       <p>Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains information about the VPC that you want to associate with a private hosted zone.</p>
   */
  VPC: VPC | undefined;

  /**
   * <p>
   *             <i>Optional:</i> A comment about the association request.</p>
   */
  Comment?: string;
}

export namespace AssociateVPCWithHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateVPCWithHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.</p>
 */
export interface AssociateVPCWithHostedZoneResponse {
  /**
   * <p>A complex type that describes the changes made to your hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace AssociateVPCWithHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateVPCWithHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The cause of this error depends on the operation that you're performing:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>Create a public hosted zone:</b> Two hosted zones that have the same name or that have a
 * 				parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone
 * 				that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a
 * 				delegation set that shares one or more name servers with the existing hosted zone. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
 * 			         </li>
 *             <li>
 *                <p>
 *                   <b>Create a private hosted zone:</b> A hosted zone with the specified name
 * 				already exists and is already associated with the Amazon VPC that you specified.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Associate VPCs with a private hosted zone:</b> The VPC that you specified is
 * 				already associated with another hosted zone that has the same name.</p>
 *             </li>
 *          </ul>
 */
export interface ConflictingDomainExists extends __SmithyException, $MetadataBearer {
  name: "ConflictingDomainExists";
  $fault: "client";
  message?: string;
}

export namespace ConflictingDomainExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingDomainExists): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
 */
export interface InvalidVPCId extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCId";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidVPCId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidVPCId): any => ({
    ...obj,
  });
}

/**
 * <p>This operation can't be completed either because the current account has reached the limit on reusable delegation sets
 * 			that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone.
 * 			To get the current limit on the number of reusable delegation sets, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.
 * 			To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html">GetHostedZoneLimit</a>.
 * 			To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 */
export interface LimitsExceeded extends __SmithyException, $MetadataBearer {
  name: "LimitsExceeded";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LimitsExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitsExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>No hosted zone exists with the ID that you specified.</p>
 */
export interface NoSuchHostedZone extends __SmithyException, $MetadataBearer {
  name: "NoSuchHostedZone";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchHostedZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchHostedZone): any => ({
    ...obj,
  });
}

/**
 * <p>Associating the specified VPC with the specified hosted zone has not been authorized.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NotAuthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject
 * 			subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code>
 * 			(<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we
 * 			recommend that you wait, in intervals of increasing duration, before you try the request
 * 			again.</p>
 */
export interface PriorRequestNotComplete extends __SmithyException, $MetadataBearer {
  name: "PriorRequestNotComplete";
  $fault: "client";
  message?: string;
}

export namespace PriorRequestNotComplete {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PriorRequestNotComplete): any => ({
    ...obj,
  });
}

/**
 * <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a
 * 			VPC with a public hosted zone.</p>
 */
export interface PublicZoneVPCAssociation extends __SmithyException, $MetadataBearer {
  name: "PublicZoneVPCAssociation";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace PublicZoneVPCAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicZoneVPCAssociation): any => ({
    ...obj,
  });
}

export type ChangeAction = "CREATE" | "DELETE" | "UPSERT";

export type ResourceRecordSetFailover = "PRIMARY" | "SECONDARY";

/**
 * <p>A complex type that contains information about a geographic location.</p>
 */
export interface GeoLocation {
  /**
   * <p>The two-letter code for the continent.</p>
   * 		       <p>Amazon Route 53 supports the following continent codes:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>AF</b>: Africa</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AN</b>: Antarctica</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AS</b>: Asia</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EU</b>: Europe</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OC</b>: Oceania</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NA</b>: North America</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SA</b>: South America</p>
   *             </li>
   *          </ul>
   * 		       <p>Constraint: Specifying <code>ContinentCode</code> with either <code>CountryCode</code> or <code>SubdivisionCode</code> returns an
   * 			<code>InvalidInput</code> error.</p>
   */
  ContinentCode?: string;

  /**
   * <p>For geolocation resource record sets, the two-letter code for a country.</p>
   * 		       <p>Amazon Route 53 uses the two-letter country codes that are specified in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.</p>
   */
  CountryCode?: string;

  /**
   * <p>For geolocation resource record sets, the two-letter code for a state of the United States.
   * 			Route 53 doesn't support any other values for <code>SubdivisionCode</code>. For a list of state abbreviations, see
   * 			<a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a>
   * 			on the United States Postal Service website. </p>
   * 		       <p>If you specify <code>subdivisioncode</code>, you must also specify <code>US</code> for <code>CountryCode</code>. </p>
   */
  SubdivisionCode?: string;
}

export namespace GeoLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoLocation): any => ({
    ...obj,
  });
}

export type ResourceRecordSetRegion =
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>Information specific to the resource record.</p>
 * 		       <note>
 *             <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p>
 *          </note>
 */
export interface ResourceRecord {
  /**
   * <p>The current or new DNS record value, not to exceed 4,000 characters. In the case of a <code>DELETE</code> action,
   * 			if the current value does not match the actual value, an error is returned. For descriptions about how to format
   * 			<code>Value</code> for different record types, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>You can specify more than one value for all record types except <code>CNAME</code> and <code>SOA</code>. </p>
   * 		       <note>
   * 			         <p>If you're creating an alias resource record set, omit <code>Value</code>.</p>
   * 		       </note>
   */
  Value: string | undefined;
}

export namespace ResourceRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceRecord): any => ({
    ...obj,
  });
}

export type RRType =
  | "A"
  | "AAAA"
  | "CAA"
  | "CNAME"
  | "DS"
  | "MX"
  | "NAPTR"
  | "NS"
  | "PTR"
  | "SOA"
  | "SPF"
  | "SRV"
  | "TXT";

/**
 * <p>Information about the resource record set to create or delete.</p>
 */
export interface ResourceRecordSet {
  /**
   * <p>For <code>ChangeResourceRecordSets</code> requests, the name of the record that you want to create, update, or delete.
   * 			For <code>ListResourceRecordSets</code> responses, the name of a record in the specified hosted zone.</p>
   *
   * 		       <p>
   *             <b>ChangeResourceRecordSets Only</b>
   *          </p>
   * 		       <p>Enter a fully qualified domain name, for example, <code>www.example.com</code>. You can optionally include a trailing dot.
   * 			If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats
   * 			<code>www.example.com</code> (without a trailing dot) and <code>www.example.com.</code> (with a trailing dot) as identical.</p>
   * 		       <p>For information about how to specify characters other than <code>a-z</code>, <code>0-9</code>, and <code>-</code> (hyphen)
   * 			and how to specify internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in
   * 			the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, <code>*.example.com</code>.
   * 			Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The * must replace the entire label. For example, you can't specify <code>*prod.example.com</code> or
   * 					<code>prod*.example.com</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The * can't replace any of the middle labels, for example, marketing.*.example.com.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42),
   * 					not as a wildcard.</p>
   * 				           <important>
   * 					             <p>You can't use the * wildcard for resource records sets that have a type of NS.</p>
   * 				           </important>
   * 			         </li>
   *          </ul>
   * 		       <p>You can use the * wildcard as the leftmost label in a domain name, for example, <code>*.example.com</code>. You can't use an *
   * 			for one of the middle labels, for example, <code>marketing.*.example.com</code>. In addition, the * must replace the entire label; for
   * 			example, you can't specify <code>prod*.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The DNS record type. For information about different record types and how data is encoded for them, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>DS</code> |<code>MX</code> |
   * 			<code>NAPTR</code> | <code>NS</code> | <code>PTR</code> | <code>SOA</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>
   *          </p>
   * 		       <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> |
   * 			<code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>.
   * 			When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the
   * 			resource record sets in the group.</p>
   * 		       <p>Valid values for multivalue answer resource record sets: <code>A</code> | <code>AAAA</code> | <code>MX</code> | <code>NAPTR</code> |
   * 			<code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>
   *          </p>
   * 		       <note>
   * 			         <p>SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create
   * 				resource record sets for which the value of <code>Type</code> is <code>SPF</code>. RFC 7208, <i>Sender Policy Framework (SPF) for
   * 				Authorizing Use of Domains in Email, Version 1</i>, has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408]
   * 				have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to
   * 				use it." In RFC 7208, see section 14.1, <a href="http://tools.ietf.org/html/rfc7208#section-14.1">The SPF DNS Record Type</a>.</p>
   * 		       </note>
   * 		       <p>Values for alias resource record sets:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Amazon API Gateway custom regional APIs and edge-optimized APIs:</b>
   *                   <code>A</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>CloudFront distributions:</b>
   *                   <code>A</code>
   *                </p>
   * 				           <p>If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution,
   * 					one with a value of <code>A</code> and one with a value of <code>AAAA</code>. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Amazon API Gateway environment that has a regionalized subdomain</b>: <code>A</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>ELB load balancers:</b>
   *                   <code>A</code> | <code>AAAA</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Amazon S3 buckets:</b>
   *                   <code>A</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Amazon Virtual Private Cloud interface VPC endpoints</b>
   *                   <code>A</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Another resource record set in this hosted zone:</b> Specify the type of the resource record set
   * 					that you're creating the alias for. All values are supported except <code>NS</code> and <code>SOA</code>.</p>
   * 				           <note>
   *                   <p>If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't
   * 					route traffic to a record for which the value of <code>Type</code> is <code>CNAME</code>. This is because the alias record
   * 					must have the same type as the record you're routing traffic to, and creating a CNAME record for the zone apex
   * 					isn't supported even for an alias record.</p>
   *                </note>
   * 			         </li>
   *          </ul>
   */
  Type: RRType | string | undefined;

  /**
   * <p>
   *             <i>Resource record sets that have a routing policy other than simple:</i> An identifier that differentiates among
   * 			multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named
   * 			acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of <code>SetIdentifier</code>
   * 			must be unique for each resource record set. </p>
   * 		       <p>For information about routing policies, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html">Choosing a Routing Policy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  SetIdentifier?: string;

  /**
   * <p>
   *             <i>Weighted resource record sets only:</i> Among resource record sets that have the same combination of DNS name and type,
   * 			a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the
   * 			sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries
   * 			based on the ratio of a resource's weight to the total. Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You must specify a value for the <code>Weight</code> element for every weighted resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can only specify one <code>ResourceRecord</code> per weighted resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can't create latency, failover, or geolocation resource record sets that have the same values for the
   * 					<code>Name</code> and <code>Type</code> elements as weighted resource record sets.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can create a maximum of 100 weighted resource record sets that have the same values for the <code>Name</code> and
   * 					<code>Type</code> elements.</p>
   * 			         </li>
   *             <li>
   * 				           <p>For weighted (but not weighted alias) resource record sets, if you set <code>Weight</code> to <code>0</code> for a
   * 					resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set
   * 						<code>Weight</code> to <code>0</code> for all resource record sets that have the same combination of DNS name and type,
   * 					traffic is routed to all resources with equal probability.</p>
   * 				           <p>The effect of setting <code>Weight</code> to <code>0</code> is different when you associate health checks with weighted
   * 					resource record sets. For more information, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html">Options for Configuring Route 53 Active-Active and Active-Passive Failover</a>
   * 					in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 			         </li>
   *          </ul>
   */
  Weight?: number;

  /**
   * <p>
   *             <i>Latency-based resource record sets only:</i> The Amazon EC2 Region where you created the resource that this
   * 			resource record set refers to. The resource typically is an Amazon Web Services resource, such as an EC2 instance or an ELB load balancer, and is
   * 			referred to by an IP address or a DNS domain name, depending on the record type.</p>
   * 		       <note>
   * 			         <p>Although creating latency and latency alias resource record sets in a private hosted zone is allowed,
   * 				it's not supported.</p>
   * 		       </note>
   * 		       <p>When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53
   * 			selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then
   * 			returns the value that is associated with the selected resource record set.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You can only specify one <code>ResourceRecord</code> per latency resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can only create one latency resource record set for each Amazon EC2 Region.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the
   * 					best latency from among the regions that you create latency resource record sets for.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You can't create non-latency resource record sets that have the same values for the <code>Name</code> and <code>Type</code>
   * 					elements as latency resource record sets.</p>
   * 			         </li>
   *          </ul>
   */
  Region?: ResourceRecordSetRegion | string;

  /**
   * <p>
   *             <i>Geolocation resource record sets only:</i> A complex type that lets you control how Amazon Route 53 responds to DNS queries
   * 			based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address
   * 			of <code>192.0.2.111</code>, create a resource record set with a <code>Type</code> of <code>A</code> and a <code>ContinentCode</code> of
   * 			<code>AF</code>.</p>
   * 		       <note>
   * 			         <p>Although creating geolocation and geolocation alias resource record sets in a private hosted zone is allowed,
   * 				it's not supported.</p>
   * 		       </note>
   * 		       <p>If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and
   * 			one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a
   * 			continent to one resource and to route queries for a country on that continent to a different resource.</p>
   * 		       <p>You can't create two geolocation resource record sets that specify the same geographic location.</p>
   * 		       <p>The value <code>*</code> in the <code>CountryCode</code> element matches all geographic locations that aren't specified in other
   * 			geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements.</p>
   * 		       <important>
   * 			         <p>Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations,
   * 				so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations
   * 				that it can't identify. We recommend that you create a resource record set for which the value of <code>CountryCode</code> is <code>*</code>.
   * 				Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't
   * 				created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a
   * 				<code>*</code> resource record set, Route 53 returns a "no answer" response for queries from those locations.</p>
   * 		       </important>
   * 		       <p>You can't create non-geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements
   * 			as geolocation resource record sets.</p>
   */
  GeoLocation?: GeoLocation;

  /**
   * <p>
   *             <i>Failover resource record sets only:</i> To configure failover, you add the <code>Failover</code> element to
   * 			two resource record sets. For one resource record set, you specify <code>PRIMARY</code> as the value for <code>Failover</code>; for the other
   * 			resource record set, you specify <code>SECONDARY</code>. In addition, you include the <code>HealthCheckId</code> element and specify the
   * 			health check that you want Amazon Route 53 to perform for each resource record set.</p>
   * 		       <p>Except where noted, the following failover behaviors assume that you have included the <code>HealthCheckId</code> element in both
   * 			resource record sets:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the
   * 					primary resource record set regardless of the health of the secondary resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to
   * 					DNS queries with the applicable value from the secondary resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the
   * 					primary resource record set regardless of the health of the primary resource record set.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you omit the <code>HealthCheckId</code> element for the secondary resource record set, and if the primary resource record set
   * 					is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true
   * 					regardless of the health of the associated endpoint.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>You can't create non-failover resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements
   * 			as failover resource record sets.</p>
   * 		       <p>For failover alias resource record sets, you must also include the <code>EvaluateTargetHealth</code> element and set the value to true.</p>
   * 		       <p>For more information about configuring failover for Route 53, see the following topics in the <i>Amazon Route 53 Developer Guide</i>: </p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  Failover?: ResourceRecordSetFailover | string;

  /**
   * <p>
   *             <i>Multivalue answer resource record sets only</i>: To route traffic approximately randomly to multiple resources,
   * 			such as web servers, create one multivalue answer record for each resource and specify <code>true</code> for <code>MultiValueAnswer</code>.
   * 			Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries
   * 				with the corresponding IP address only when the health check is healthy.</p>
   *             </li>
   *             <li>
   *                <p>If you don't associate a health check with a multivalue answer record, Route 53 always considers the record
   * 				to be healthy.</p>
   *             </li>
   *             <li>
   *                <p>Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records,
   * 				Route 53 responds to all DNS queries with all the healthy records.</p>
   *             </li>
   *             <li>
   *                <p>If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of
   * 				healthy records.</p>
   *             </li>
   *             <li>
   *                <p>When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records.</p>
   *             </li>
   *             <li>
   *                <p>If a resource becomes unavailable after a resolver caches a response, client software typically tries another
   * 				of the IP addresses in the response.</p>
   *             </li>
   *          </ul>
   * 		       <p>You can't create multivalue answer alias records.</p>
   */
  MultiValueAnswer?: boolean;

  /**
   * <p>The resource record cache time to live (TTL), in seconds. Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you're creating or updating an alias resource record set, omit <code>TTL</code>. Amazon Route 53 uses the value of <code>TTL</code>
   * 					for the alias target. </p>
   * 			         </li>
   *             <li>
   * 				           <p>If you're associating this resource record set with a health check (if you're adding a <code>HealthCheckId</code> element),
   * 					we recommend that you specify a <code>TTL</code> of 60 seconds or less so clients respond quickly to changes in health status.</p>
   * 			         </li>
   *             <li>
   * 				           <p>All of the resource record sets in a group of weighted resource record sets must have the same value for <code>TTL</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the
   * 					alias target is an ELB load balancer, we recommend that you specify a <code>TTL</code> of 60 seconds for all of the
   * 					non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for
   * 					load balancers) will change the effect of the values that you specify for <code>Weight</code>.</p>
   * 			         </li>
   *          </ul>
   */
  TTL?: number;

  /**
   * <p>Information about the resource records to act upon.</p>
   * 		       <note>
   *             <p>If you're creating an alias resource record set, omit <code>ResourceRecords</code>.</p>
   *          </note>
   */
  ResourceRecords?: ResourceRecord[];

  /**
   * <p>
   *             <i>Alias resource record sets only:</i> Information about the Amazon Web Services resource, such as a CloudFront distribution or an
   * 			Amazon S3 bucket, that you want to route traffic to. </p>
   * 		       <p>If you're creating resource records sets for a private hosted zone, note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You can't create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p>
   * 			         </li>
   *             <li>
   * 				           <p>For information about creating failover resource record sets in a private hosted zone, see
   * 					<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a> in the
   * 					<i>Amazon Route 53 Developer Guide</i>.</p>
   * 			         </li>
   *          </ul>
   */
  AliasTarget?: AliasTarget;

  /**
   * <p>If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a
   * 			health check is healthy, include the <code>HealthCheckId</code> element and specify the ID of the applicable health check.</p>
   * 		       <p>Route 53 determines whether a resource record set is healthy based on one of the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>By periodically sending a request to the endpoint that is specified in the health check</p>
   *             </li>
   *             <li>
   *                <p>By aggregating the status of a specified group of health checks (calculated health checks)</p>
   *             </li>
   *             <li>
   *                <p>By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)</p>
   *             </li>
   *          </ul>
   *
   * 		       <important>
   * 			         <p>Route 53 doesn't check the health of the endpoint that is specified in the resource record set, for example, the endpoint
   * 				specified by the IP address in the <code>Value</code> element. When you add a <code>HealthCheckId</code> element to a
   * 				resource record set, Route 53 checks the health of the endpoint that you specified in the health check. </p>
   * 		       </important>
   *
   * 		       <p>For more information, see the following topics in the <i>Amazon Route 53 Developer Guide</i>:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How
   * 				Amazon Route 53 Determines Whether an Endpoint Is Healthy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>When to Specify HealthCheckId</b>
   *          </p>
   * 		       <p>Specifying a value for <code>HealthCheckId</code> is useful only when Route 53 is choosing between two or more resource record sets
   * 			to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks
   * 			makes sense only in the following configurations:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Non-alias resource record sets</b>: You're checking the health of a group of non-alias
   * 					resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com
   * 					with a type of A) and you specify health check IDs for all the resource record sets. </p>
   * 				           <p>If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it
   * 					responds to DNS queries with.</p>
   * 				           <p>If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value
   * 					for that resource record set.</p>
   * 				           <p>If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets
   * 					in the group healthy and responds to DNS queries accordingly. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Alias resource record sets</b>: You specify the following settings:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>You set <code>EvaluateTargetHealth</code> to true for an alias resource record set in a group of
   * 						resource record sets that have the same routing policy, name, and type (such as multiple weighted records named
   * 						www.example.com with a type of A). </p>
   *                   </li>
   *                   <li>
   *                      <p>You configure the alias resource record set to route traffic to a non-alias resource record set
   * 						in the same hosted zone.</p>
   *                   </li>
   *                   <li>
   *                      <p>You specify a health check ID for the non-alias resource record set. </p>
   *                   </li>
   *                </ul>
   * 				           <p>If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the
   * 					alias record among the records that it responds to DNS queries with.</p>
   * 				           <p>If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set.</p>
   * 				           <note>
   * 					             <p>The alias resource record set can also route traffic to a <i>group</i> of non-alias resource record sets
   * 						that have the same routing policy, name, and type. In that configuration, associate health checks with all of the
   * 						resource record sets in the group of non-alias resource record sets.</p>
   * 				           </note>
   * 			         </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Geolocation Routing</b>
   *          </p>
   * 		       <p>For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated
   * 			geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States,
   * 			for North America, and a resource record set that has <code>*</code> for <code>CountryCode</code> is <code>*</code>, which applies to
   * 			all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the
   * 			following order until it finds a resource record set for which the endpoint is healthy:</p>
   * 			      <ul>
   *             <li>
   *                <p>The United States</p>
   *             </li>
   *             <li>
   *                <p>North America</p>
   *             </li>
   *             <li>
   *                <p>The default resource record set</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Specifying the Health Check Endpoint by Domain Name</b>
   *          </p>
   * 		       <p>If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint.
   * 			For example, create a health check for each <code>HTTP</code> server that is serving content for <code>www.example.com</code>. For the
   * 			value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>),
   * 			not the name of the resource record sets (<code>www.example.com</code>).</p>
   * 		       <important>
   * 			         <p>Health check results will be unpredictable if you do the following:</p>
   * 			         <ul>
   *                <li>
   *                   <p>Create a health check that has the same value for <code>FullyQualifiedDomainName</code> as the name of a
   * 					resource record set.</p>
   *                </li>
   *                <li>
   *                   <p>Associate that health check with the resource record set.</p>
   *                </li>
   *             </ul>
   * 		       </important>
   */
  HealthCheckId?: string;

  /**
   * <p>When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. <code>TrafficPolicyInstanceId</code> is the ID
   * 			of the traffic policy instance that Route 53 created this resource record set for.</p>
   * 		       <important>
   *             <p>To delete the resource record set that is associated with a traffic policy instance, use <code>DeleteTrafficPolicyInstance</code>.
   * 			Route 53 will delete the resource record set automatically. If you delete the resource record set by using <code>ChangeResourceRecordSets</code>,
   * 			Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use. </p>
   * 		       </important>
   */
  TrafficPolicyInstanceId?: string;
}

export namespace ResourceRecordSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceRecordSet): any => ({
    ...obj,
  });
}

/**
 * <p>The information for each resource record set that you want to change.</p>
 */
export interface Change {
  /**
   * <p>The action to perform:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>CREATE</code>: Creates a resource record set that has the specified values.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>DELETE</code>: Deletes a existing resource record set.</p>
   * 				           <important>
   * 					             <p>To delete the resource record set that is associated with a traffic policy instance, use
   * 						<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html">DeleteTrafficPolicyInstance</a>.
   * 						Amazon Route 53 will delete the resource record set automatically. If you delete the resource record set by using
   * 						<code>ChangeResourceRecordSets</code>, Route 53 doesn't automatically delete the traffic policy instance, and you'll continue
   * 						to be charged for it even though it's no longer in use. </p>
   * 				           </important>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>UPSERT</code>: If a resource record set doesn't already exist, Route 53 creates it.
   * 					If a resource record set does exist, Route 53 updates it with the values in the request.</p>
   * 			         </li>
   *          </ul>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Information about the resource record set to create, delete, or update.</p>
   */
  ResourceRecordSet: ResourceRecordSet | undefined;
}

export namespace Change {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Change): any => ({
    ...obj,
  });
}

/**
 * <p>The information for a change request.</p>
 */
export interface ChangeBatch {
  /**
   * <p>
   *             <i>Optional:</i> Any comments you want to include about a change batch
   * 			request.</p>
   */
  Comment?: string;

  /**
   * <p>Information about the changes to make to the record sets.</p>
   */
  Changes: Change[] | undefined;
}

export namespace ChangeBatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeBatch): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains change information for the resource record set.</p>
 */
export interface ChangeResourceRecordSetsRequest {
  /**
   * <p>The ID of the hosted zone that contains the resource record sets that you want to change.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains an optional comment and the <code>Changes</code> element.</p>
   */
  ChangeBatch: ChangeBatch | undefined;
}

export namespace ChangeResourceRecordSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeResourceRecordSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing the response for the request.</p>
 */
export interface ChangeResourceRecordSetsResponse {
  /**
   * <p>A complex type that contains information about changes made to your hosted zone.</p>
   * 		       <p>This element contains an ID that you use when performing a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>
   * 			action to get detailed information about the change.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace ChangeResourceRecordSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeResourceRecordSetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception contains a list of messages that might contain one or more error messages. Each error message indicates
 * 			one error in the change batch.</p>
 */
export interface InvalidChangeBatch extends __SmithyException, $MetadataBearer {
  name: "InvalidChangeBatch";
  $fault: "client";
  /**
   * <p></p>
   */
  messages?: string[];

  message?: string;
}

export namespace InvalidChangeBatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidChangeBatch): any => ({
    ...obj,
  });
}

/**
 * <p>No health check exists with the specified ID.</p>
 */
export interface NoSuchHealthCheck extends __SmithyException, $MetadataBearer {
  name: "NoSuchHealthCheck";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchHealthCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchHealthCheck): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.</p>
 */
export interface Tag {
  /**
   * <p>The value of <code>Key</code> depends on the operation that you want to perform:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Add a tag to a health check or hosted zone</b>: <code>Key</code> is the name that you want to give the new tag.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Edit a tag</b>: <code>Key</code> is the name of the tag that you want to change the <code>Value</code> for.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b> Delete a key</b>: <code>Key</code> is the name of the tag you want to remove.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Give a name to a health check</b>: Edit the default <code>Name</code> tag. In the Amazon Route 53 console,
   * 					the list of your health checks includes a <b>Name</b> column that lets you see the name that you've
   * 					given to each health check.</p>
   * 			         </li>
   *          </ul>
   */
  Key?: string;

  /**
   * <p>The value of <code>Value</code> depends on the operation that you want to perform:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Add a tag to a health check or hosted zone</b>: <code>Value</code> is the value that you want to give
   * 					the new tag.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Edit a tag</b>: <code>Value</code> is the new value that you want to assign the tag.</p>
   * 			         </li>
   *          </ul>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export type TagResourceType = "healthcheck" | "hostedzone";

/**
 * <p>A complex type that contains information about the tags that you want to add, edit, or delete.</p>
 */
export interface ChangeTagsForResourceRequest {
  /**
   * <p>The type of the resource.</p>
   * 		       <ul>
   *             <li>
   *                <p>The resource type for health checks is <code>healthcheck</code>.</p>
   *             </li>
   *             <li>
   *                <p>The resource type for hosted zones is <code>hostedzone</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType: TagResourceType | string | undefined;

  /**
   * <p>The ID of the resource for which you want to add, change, or delete tags.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags
   * 			that you want to edit <code>Value</code> for.</p>
   * 		       <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>
   */
  AddTags?: Tag[];

  /**
   * <p>A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone.
   * 			You can specify up to 10 keys.</p>
   */
  RemoveTagKeys?: string[];
}

export namespace ChangeTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Empty response for the request.</p>
 */
export interface ChangeTagsForResourceResponse {}

export namespace ChangeTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export type InsufficientDataHealthStatus = "Healthy" | "LastKnownStatus" | "Unhealthy";

export type HealthCheckRegion =
  | "ap-northeast-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "eu-west-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-west-1"
  | "us-west-2";

export enum HealthCheckType {
  CALCULATED = "CALCULATED",
  CLOUDWATCH_METRIC = "CLOUDWATCH_METRIC",
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  HTTPS_STR_MATCH = "HTTPS_STR_MATCH",
  HTTP_STR_MATCH = "HTTP_STR_MATCH",
  RECOVERY_CONTROL = "RECOVERY_CONTROL",
  TCP = "TCP",
}

/**
 * <p>A complex type that contains information about the health check.</p>
 */
export interface HealthCheckConfig {
  /**
   * <p>The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for
   * 			<code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code>
   * 			at the interval that you specify in <code>RequestInterval</code>. Using an IP address returned by DNS, Route 53 then checks the health
   * 			of the endpoint.</p>
   *
   * 		       <p>Use one of the following formats for the value of <code>IPAddress</code>: </p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.),
   * 				for example, <code>192.0.2.44</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:),
   * 				for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952,
   * 				for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and
   * 			specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance will never change.</p>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>.
   * 		</p>
   * 		       <p>Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or
   * 			multicast ranges. For more information about IP addresses for which you can't create health checks, see the following
   * 			documents:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a>
   *                </p>
   *             </li>
   *          </ul>
   * 		       <p>When the value of <code>Type</code> is <code>CALCULATED</code> or <code>CLOUDWATCH_METRIC</code>, omit <code>IPAddress</code>.</p>
   */
  IPAddress?: string;

  /**
   * <p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p>
   * 		       <note>
   * 			         <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or
   * 				<code>CALCULATED</code>.</p>
   * 		       </note>
   */
  Port?: number;

  /**
   * <p>The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.</p>
   * 		       <important>
   * 			         <p>You can't change the value of <code>Type</code> after you create a health check.</p>
   * 		       </important>
   * 		       <p>You can create the following types of health checks:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>HTTP</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request
   * 					and waits for an HTTP status code of 200 or greater and less than 400.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>HTTPS</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request
   * 					and waits for an HTTP status code of 200 or greater and less than 400.</p>
   * 				           <important>
   * 					             <p>If you specify <code>HTTPS</code> for the value of <code>Type</code>, the endpoint must support TLS v1.0 or later.</p>
   * 				           </important>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>HTTP_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an
   * 					HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>HTTPS_STR_MATCH</b>: Route 53 tries to establish a TCP connection. If successful, Route 53 submits an
   * 					<code>HTTPS</code> request and searches the first 5,120 bytes of the response body for the string that you specify in <code>SearchString</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>TCP</b>: Route 53 tries to establish a TCP connection.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>CLOUDWATCH_METRIC</b>: The health check is associated with a CloudWatch alarm. If the state of the alarm is
   * 					<code>OK</code>, the health check is considered healthy. If the state is <code>ALARM</code>, the health check is considered unhealthy.
   * 					If CloudWatch doesn't have sufficient data to determine whether the state is <code>OK</code> or <code>ALARM</code>, the health check status
   * 					depends on the setting for <code>InsufficientDataHealthStatus</code>: <code>Healthy</code>, <code>Unhealthy</code>, or
   * 					<code>LastKnownStatus</code>. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>CALCULATED</b>: For health checks that monitor the status of other health checks, Route 53 adds up
   * 					the number of health checks that Route 53 health checkers consider to be healthy and compares that number with the value of
   * 					<code>HealthThreshold</code>. </p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <b>RECOVERY_CONTROL</b>: The health check is assocated with a Route53 Application Recovery Controller routing control.
   * 				If the routing control state is <code>ON</code>, the health check is considered healthy. If the state is <code>OFF</code>, the health check is considered unhealthy.
   * 				</p>
   *             </li>
   *          </ul>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53
   * 			Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  Type: HealthCheckType | string | undefined;

  /**
   * <p>The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint
   * 			will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html.
   * 			You can also include query string parameters, for example, <code>/welcome.html?language=jp&login=y</code>.
   * 		</p>
   */
  ResourcePath?: string;

  /**
   * <p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p>
   *
   * 		       <p>
   *             <b>If you specify a value for</b>
   *             <code>IPAddress</code>:</p>
   * 		       <p>Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code>
   * 			in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint
   * 			on which you want Route 53 to perform health checks.</p>
   * 		       <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for
   * 					<code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the Host header. </p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for
   * 					<code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes
   * 					<code>FullyQualifiedDomainName:Port</code> to the endpoint in the <code>Host</code> header.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the
   * 			<code>Host</code> header in each of the preceding cases.</p>
   *
   * 		       <p>
   *             <b>If you don't specify a value for <code>IPAddress</code>
   *             </b>:</p>
   * 		       <p>Route 53 sends a DNS request to the domain that you specify for <code>FullyQualifiedDomainName</code> at the interval that you specify for
   * 			<code>RequestInterval</code>. Using an IPv4 address that DNS returns, Route 53 then checks the health of the endpoint.</p>
   * 		       <note>
   *             <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's
   * 			no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a
   * 			"DNS resolution failed" error.</p>
   *          </note>
   * 		       <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by
   * 			<code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a
   * 			health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>,
   * 			specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).</p>
   * 		       <important>
   * 			         <p>In this configuration, if you create a health check for which the value of <code>FullyQualifiedDomainName</code> matches the name of the
   * 				resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p>
   * 		       </important>
   * 		       <p>In addition, if the value that you specify for <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or
   * 			<code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you
   * 			specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>
   */
  FullyQualifiedDomainName?: string;

  /**
   * <p>If the value of Type is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the
   * 			response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.</p>
   * 		       <p>Route 53 considers case when searching for <code>SearchString</code> in the response body. </p>
   */
  SearchString?: string;

  /**
   * <p>The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next
   * 			health check request. Each Route 53 health checker makes requests at this interval.</p>
   * 		       <important>
   * 			         <p>You can't change the value of <code>RequestInterval</code> after you create a health check.</p>
   * 		       </important>
   * 		       <p>If you don't specify a value for <code>RequestInterval</code>, the default value is <code>30</code> seconds.</p>
   */
  RequestInterval?: number;

  /**
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint
   * 			from unhealthy to healthy or vice versa. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>
   */
  FailureThreshold?: number;

  /**
   * <p>Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple Amazon Web Services regions and your endpoint, and to
   * 			display CloudWatch latency graphs on the <b>Health Checks</b> page in the Route 53 console.</p>
   * 		       <important>
   * 			         <p>You can't change the value of <code>MeasureLatency</code> after you create a health check.</p>
   * 		       </important>
   */
  MeasureLatency?: boolean;

  /**
   * <p>Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it
   * 			otherwise would be considered healthy.</p>
   */
  Inverted?: boolean;

  /**
   * <p>Stops Route 53 from performing health checks. When you disable a health check, here's what happens:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Health checks that check the health of endpoints:</b>
   * 				Route 53 stops submitting requests to your application, server, or other resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Calculated health checks:</b>
   * 				Route 53 stops aggregating the status of the referenced health checks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Health checks that monitor CloudWatch alarms:</b>
   * 				Route 53 stops monitoring the corresponding CloudWatch metrics.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover,
   * 			Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>.
   * 		</p>
   *
   * 		       <p>Charges for a health check still apply when the health check is disabled. For more information, see
   * 			<a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The number of child health checks that are associated with a <code>CALCULATED</code> health check that Amazon Route 53 must consider healthy for the
   * 			<code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a
   * 			<code>CALCULATED</code> health check, use the
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-ChildHealthChecks">ChildHealthChecks</a>
   * 			element.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p>
   * 			         </li>
   *          </ul>
   */
  HealthThreshold?: number;

  /**
   * <p>(CALCULATED Health Checks Only) A complex type that contains one <code>ChildHealthCheck</code> element for each health check that
   * 			you want to associate with a <code>CALCULATED</code> health check.</p>
   */
  ChildHealthChecks?: string[];

  /**
   * <p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code>
   * 			message during TLS negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable
   * 			SSL/TLS certificate.</p>
   * 		       <p>Some endpoints require that <code>HTTPS</code> requests include the host name in the <code>client_hello</code> message. If you don't
   * 			enable SNI, the status of the health check will be <code>SSL alert handshake_failure</code>. A health check can also have that status for
   * 			other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that
   * 			your certificate is valid.</p>
   * 		       <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the
   * 			<code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for
   * 			<code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not
   * 			include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the
   * 			second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>
   */
  EnableSNI?: boolean;

  /**
   * <p>A complex type that contains one <code>Region</code> element for each region from which you want Amazon Route 53 health checkers to check the
   * 			specified endpoint.</p>
   * 		       <p>If you don't specify any regions, Route 53 health checkers automatically performs checks from all of the regions that are listed under
   * 			<b>Valid Values</b>.</p>
   * 		       <p>If you update a health check to remove a region that has been performing health checks, Route 53 will briefly continue to perform checks
   * 			from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with
   * 			four different regions). </p>
   */
  Regions?: (HealthCheckRegion | string)[];

  /**
   * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
   * 			the specified health check is healthy.</p>
   */
  AlarmIdentifier?: AlarmIdentifier;

  /**
   * <p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>Healthy</code>: Route 53 considers the health check to be healthy.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>LastKnownStatus</code>: Route 53 uses the status of the health check from the last time that CloudWatch had sufficient data
   * 					to determine the alarm state. For new health checks that have no last known status, the default status for the health check is
   * 					healthy.</p>
   * 			         </li>
   *          </ul>
   */
  InsufficientDataHealthStatus?: InsufficientDataHealthStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control.</p>
   * 		       <p>For more information about Route 53 Application Recovery Controller, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery.html">Route 53 Application Recovery Controller Developer Guide.</a>.</p>
   */
  RoutingControlArn?: string;
}

export namespace HealthCheckConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the health check request information.</p>
 */
export interface CreateHealthCheckRequest {
  /**
   * <p>A unique string that identifies the request and that allows you to retry a failed <code>CreateHealthCheck</code> request
   * 			without the risk of creating two identical health checks:</p>
   * 		       <ul>
   *             <li>
   *                <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> and settings
   * 				as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist,
   * 				Route 53 returns the settings for the existing health check.</p>
   *             </li>
   *             <li>
   *                <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as a deleted health check,
   * 				regardless of the settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p>
   *             </li>
   *             <li>
   *                <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as an existing health check
   * 				but with different settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p>
   *             </li>
   *             <li>
   *                <p>If you send a <code>CreateHealthCheck</code> request with a unique <code>CallerReference</code> but settings identical to
   * 				an existing health check, Route 53 creates the health check.</p>
   *             </li>
   *          </ul>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains settings for a new health check.</p>
   */
  HealthCheckConfig: HealthCheckConfig | undefined;
}

export namespace CreateHealthCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHealthCheckRequest): any => ({
    ...obj,
  });
}

export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanOrEqualToThreshold"
  | "LessThanThreshold";

/**
 * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.</p>
 */
export interface Dimension {
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the name of one dimension.</p>
   */
  Name: string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the value of one dimension.</p>
   */
  Value: string | undefined;
}

export namespace Dimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

export type Statistic = "Average" | "Maximum" | "Minimum" | "SampleCount" | "Sum";

/**
 * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
 */
export interface CloudWatchAlarmConfiguration {
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.</p>
   */
  EvaluationPeriods: number | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.</p>
   */
  Period: number | undefined;

  /**
   * <p>The name of the CloudWatch metric that the alarm is associated with.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric that the alarm is associated with. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a>
   * 			in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.</p>
   */
  Statistic: Statistic | string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric.
   * 			For information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a>
   * 			in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Dimension[];
}

export namespace CloudWatchAlarmConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchAlarmConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that
 * 			describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
 */
export interface LinkedService {
  /**
   * <p>If the health check or hosted zone was created by another service, the service that created the resource. When a resource is created
   * 			by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  ServicePrincipal?: string;

  /**
   * <p>If the health check or hosted zone was created by another service, an optional description that can be provided by the other service.
   * 			When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  Description?: string;
}

export namespace LinkedService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LinkedService): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about one health check that is associated with the current Amazon Web Services account.</p>
 */
export interface HealthCheck {
  /**
   * <p>The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use
   * 			this value to specify which health check to use. The value can be up to 64 characters long. </p>
   */
  Id: string | undefined;

  /**
   * <p>A unique string that you specified when you created the health check.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>If the health check was created by another service, the service that created the health check. When a health check is created
   * 			by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  LinkedService?: LinkedService;

  /**
   * <p>A complex type that contains detailed information about one health check.</p>
   */
  HealthCheckConfig: HealthCheckConfig | undefined;

  /**
   * <p>The version of the health check. You can optionally pass this value in a call to <code>UpdateHealthCheck</code> to prevent overwriting
   * 			another change to the health check.</p>
   */
  HealthCheckVersion: number | undefined;

  /**
   * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
   */
  CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
}

export namespace HealthCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheck): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing the response information for the new health check.</p>
 */
export interface CreateHealthCheckResponse {
  /**
   * <p>A complex type that contains identifying information about the health check.</p>
   */
  HealthCheck: HealthCheck | undefined;

  /**
   * <p>The unique URL representing the new health check.</p>
   */
  Location: string | undefined;
}

export namespace CreateHealthCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHealthCheckResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The health check you're attempting to create already exists. Amazon Route 53 returns this error when you submit a request that
 * 			has the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as an existing health check, and one or more values that differ
 * 				from the existing health check that has the same caller reference.</p>
 *             </li>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as a health check that you created and later deleted,
 * 				regardless of the other settings in the request.</p>
 *             </li>
 *          </ul>
 */
export interface HealthCheckAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "HealthCheckAlreadyExists";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HealthCheckAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>This health check can't be created because the current account has reached the limit on the number of active health checks.</p>
 * 		       <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>For information about how to get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a
 * 			higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 *
 * 		       <p>You have reached the maximum number of active health checks for an Amazon Web Services account. To request a higher limit,
 * 			<a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 */
export interface TooManyHealthChecks extends __SmithyException, $MetadataBearer {
  name: "TooManyHealthChecks";
  $fault: "client";
  message?: string;
}

export namespace TooManyHealthChecks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyHealthChecks): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains an optional comment about your hosted zone. If you don't
 * 			want to specify a comment, omit both the <code>HostedZoneConfig</code> and
 * 			<code>Comment</code> elements.</p>
 */
export interface HostedZoneConfig {
  /**
   * <p>Any comments that you want to include about the hosted zone.</p>
   */
  Comment?: string;

  /**
   * <p>A value that indicates whether this is a private hosted zone.</p>
   */
  PrivateZone?: boolean;
}

export namespace HostedZoneConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the request to create a public or private hosted zone.</p>
 */
export interface CreateHostedZoneRequest {
  /**
   * <p>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>.
   * 			The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats
   * 			<i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</p>
   * 		       <p>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name
   * 			is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that
   * 			<code>CreateHostedZone</code> returns in <code>DelegationSet</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>(Private hosted zones only) A complex type that contains information about the Amazon VPC that you're associating with this hosted zone.</p>
   * 		       <p>You can specify only one Amazon VPC when you create a private hosted zone. To associate additional Amazon VPCs with the hosted zone,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html">AssociateVPCWithHostedZone</a>
   * 			after you create a hosted zone.</p>
   */
  VPC?: VPC;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without
   * 			the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a
   * 			<code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>(Optional) A complex type that contains the following optional values:</p>
   * 		       <ul>
   *             <li>
   *                <p>For public and private hosted zones, an optional comment</p>
   *             </li>
   *             <li>
   *                <p>For private hosted zones, an optional <code>PrivateZone</code> element</p>
   *             </li>
   *          </ul>
   * 		       <p>If you don't specify a comment or the <code>PrivateZone</code> element, omit <code>HostedZoneConfig</code> and
   * 			the other elements.</p>
   */
  HostedZoneConfig?: HostedZoneConfig;

  /**
   * <p>If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set
   * 			when you created it. For more information about reusable delegation sets, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
   */
  DelegationSetId?: string;
}

export namespace CreateHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code>
 * 			for the delegation set.</p>
 */
export interface DelegationSet {
  /**
   * <p>The ID that Amazon Route 53 assigns to a reusable delegation set.</p>
   */
  Id?: string;

  /**
   * <p>The value that you specified for <code>CallerReference</code> when you created the reusable delegation set.</p>
   */
  CallerReference?: string;

  /**
   * <p>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   */
  NameServers: string[] | undefined;
}

export namespace DelegationSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSet): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains general information about the hosted zone.</p>
 */
export interface HostedZone {
  /**
   * <p>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the domain. For public hosted zones, this is the name that you have
   * 			registered with your DNS registrar.</p>
   * 		       <p>For information about how to specify characters other than <code>a-z</code>,
   * 			<code>0-9</code>, and <code>-</code> (hyphen) and how to specify internationalized domain names, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value that you specified for <code>CallerReference</code> when you created the
   * 			hosted zone.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that includes the <code>Comment</code> and <code>PrivateZone</code>
   * 			elements. If you omitted the <code>HostedZoneConfig</code> and <code>Comment</code> elements
   * 			from the request, the <code>Config</code> and <code>Comment</code> elements don't appear in
   * 			the response.</p>
   */
  Config?: HostedZoneConfig;

  /**
   * <p>The number of resource record sets in the hosted zone.</p>
   */
  ResourceRecordSetCount?: number;

  /**
   * <p>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created
   * 			by another service, you can't edit or delete it using Route 53. </p>
   */
  LinkedService?: LinkedService;
}

export namespace HostedZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZone): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing the response information for the hosted zone.</p>
 */
export interface CreateHostedZoneResponse {
  /**
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZone: HostedZone | undefined;

  /**
   * <p>A complex type that contains information about the <code>CreateHostedZone</code> request.</p>
   */
  ChangeInfo: ChangeInfo | undefined;

  /**
   * <p>A complex type that describes the name servers for this hosted zone.</p>
   */
  DelegationSet: DelegationSet | undefined;

  /**
   * <p>A complex type that contains information about an Amazon VPC that you associated with this hosted zone.</p>
   */
  VPC?: VPC;

  /**
   * <p>The unique URL representing the new hosted zone.</p>
   */
  Location: string | undefined;
}

export namespace CreateHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a
 * 			limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 */
export interface DelegationSetNotAvailable extends __SmithyException, $MetadataBearer {
  name: "DelegationSetNotAvailable";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace DelegationSetNotAvailable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSetNotAvailable): any => ({
    ...obj,
  });
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface DelegationSetNotReusable extends __SmithyException, $MetadataBearer {
  name: "DelegationSetNotReusable";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace DelegationSetNotReusable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSetNotReusable): any => ({
    ...obj,
  });
}

/**
 * <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created
 * 			with the specified <code>CallerReference</code>.</p>
 */
export interface HostedZoneAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "HostedZoneAlreadyExists";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HostedZoneAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The specified domain name is not valid.</p>
 */
export interface InvalidDomainName extends __SmithyException, $MetadataBearer {
  name: "InvalidDomainName";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidDomainName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDomainName): any => ({
    ...obj,
  });
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface NoSuchDelegationSet extends __SmithyException, $MetadataBearer {
  name: "NoSuchDelegationSet";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchDelegationSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchDelegationSet): any => ({
    ...obj,
  });
}

/**
 * <p>This operation can't be completed either because the current account has reached the limit on the number of hosted zones
 * 			or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.</p>
 * 		       <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>To get the current limit on hosted zones that can be created by an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 * 		       <p>To get the current limit on hosted zones that can be associated with a reusable delegation set, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html">GetReusableDelegationSetLimit</a>.</p>
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 */
export interface TooManyHostedZones extends __SmithyException, $MetadataBearer {
  name: "TooManyHostedZones";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TooManyHostedZones {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyHostedZones): any => ({
    ...obj,
  });
}

export interface CreateKeySigningKeyRequest {
  /**
   * <p>A unique string that identifies the request.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>The unique string (ID) used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) for a customer managed customer master key (CMK) in Key Management Service (KMS).
   * 			The <code>KeyManagementServiceArn</code> must be unique for each key-signing key (KSK) in a single hosted zone.
   * 			To see an example of <code>KeyManagementServiceArn</code> that grants the correct permissions for DNSSEC,
   * 			scroll down to <b>Example</b>. </p>
   * 		       <p>You must configure the customer managed CMK as follows:</p>
   * 		       <dl>
   *             <dt>Status</dt>
   *             <dd>
   *                <p>Enabled</p>
   *             </dd>
   *             <dt>Key spec</dt>
   *             <dd>
   *                <p>ECC_NIST_P256</p>
   *             </dd>
   *             <dt>Key usage</dt>
   *             <dd>
   *                <p>Sign and verify</p>
   *             </dd>
   *             <dt>Key policy</dt>
   *             <dd>
   *                <p>The key policy must give permission for the following actions:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>DescribeKey</p>
   *                   </li>
   *                   <li>
   *                      <p>GetPublicKey</p>
   *                   </li>
   *                   <li>
   *                      <p>Sign</p>
   *                   </li>
   *                </ul>
   * 					          <p>The key policy must also include the Amazon Route 53 service in the principal for your account.
   * 						Specify the following:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>"Service": "dnssec-route53.amazonaws.com"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *          </dl>
   * 		       <p>For more information about working with a customer managed CMK in KMS, see
   * 			<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>
   */
  KeyManagementServiceArn: string | undefined;

  /**
   * <p>A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters,  and underscores (_). <code>Name</code> must be unique for each key-signing key in the same
   * 			hosted zone.</p>
   */
  Name: string | undefined;

  /**
   * <p>A string specifying the initial status of the key-signing key (KSK). You can set the value to <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status: string | undefined;
}

export namespace CreateKeySigningKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeySigningKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A key-signing key (KSK) is a complex type that represents a public/private key pair. The private key is used to generate
 * 		a digital signature for the zone signing key (ZSK). The public key is stored in the DNS and is used to authenticate the ZSK.
 * 		A KSK is always associated with a hosted zone; it cannot exist by itself.</p>
 */
export interface KeySigningKey {
  /**
   * <p>A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters,  and underscores (_). <code>Name</code> must be unique for each key-signing key in the same
   * 			hosted zone.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon resource name (ARN) used to identify the customer managed customer master key (CMK) in Key Management Service (KMS).
   * 			The <code>KmsArn</code> must be unique for each key-signing key (KSK) in a single hosted zone.</p>
   * 		       <p>You must configure the CMK as follows:</p>
   * 		       <dl>
   *             <dt>Status</dt>
   *             <dd>
   *                <p>Enabled</p>
   *             </dd>
   *             <dt>Key spec</dt>
   *             <dd>
   *                <p>ECC_NIST_P256</p>
   *             </dd>
   *             <dt>Key usage</dt>
   *             <dd>
   *                <p>Sign and verify</p>
   *             </dd>
   *             <dt>Key policy</dt>
   *             <dd>
   *                <p>The key policy must give permission for the following actions:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>DescribeKey</p>
   *                   </li>
   *                   <li>
   *                      <p>GetPublicKey</p>
   *                   </li>
   *                   <li>
   *                      <p>Sign</p>
   *                   </li>
   *                </ul>
   * 					          <p>The key policy must also include the Amazon Route 53 service in the principal for your account.
   * 						Specify the following:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>"Service": "dnssec-route53.amazonaws.com"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *          </dl>
   * 		       <p>For more information about working with the customer managed CMK in KMS, see
   * 			<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>
   */
  KmsArn?: string;

  /**
   * <p>An integer that specifies how the key is used. For key-signing key (KSK), this value is always 257.</p>
   */
  Flag?: number;

  /**
   * <p>A string used to represent the signing algorithm. This value must follow the guidelines provided by
   * 			<a href="https://tools.ietf.org/html/rfc8624#section-3.1">RFC-8624 Section 3.1</a>.
   * 		</p>
   */
  SigningAlgorithmMnemonic?: string;

  /**
   * <p>An integer used to represent the signing algorithm. This value must follow the guidelines provided by
   * 			<a href="https://tools.ietf.org/html/rfc8624#section-3.1">RFC-8624 Section 3.1</a>.
   * 		</p>
   */
  SigningAlgorithmType?: number;

  /**
   * <p>A string used to represent the delegation signer digest algorithm. This value must follow the guidelines provided by
   * 			<a href="https://tools.ietf.org/html/rfc8624#section-3.3">RFC-8624 Section 3.3</a>.
   * 		</p>
   */
  DigestAlgorithmMnemonic?: string;

  /**
   * <p>An integer used to represent the delegation signer digest algorithm. This value must follow the guidelines provided by
   * 			<a href="https://tools.ietf.org/html/rfc8624#section-3.3">RFC-8624 Section 3.3</a>.</p>
   */
  DigestAlgorithmType?: number;

  /**
   * <p>An integer used to identify the DNSSEC record for the domain name. The process used to calculate the value is described in
   * 			<a href="https://tools.ietf.org/rfc/rfc4034.txt">RFC-4034 Appendix B</a>.</p>
   */
  KeyTag?: number;

  /**
   * <p>A cryptographic digest of a DNSKEY resource record (RR). DNSKEY records are used to publish the public key that resolvers
   * 			can use to verify DNSSEC signatures that are used to secure certain kinds of information provided by the DNS system.</p>
   */
  DigestValue?: string;

  /**
   * <p>The public key, represented as a Base64 encoding, as required by <a href="https://tools.ietf.org/rfc/rfc4034.txt">
   * 			RFC-4034 Page 5</a>.</p>
   */
  PublicKey?: string;

  /**
   * <p>A string that represents a delegation signer (DS) record.</p>
   */
  DSRecord?: string;

  /**
   * <p>A string that represents a DNSKEY record.</p>
   */
  DNSKEYRecord?: string;

  /**
   * <p>A string that represents the current key-signing key (KSK) status.</p>
   * 		       <p>Status can have one of the following values:</p>
   * 		       <dl>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The KSK is being used for signing.</p>
   *             </dd>
   *             <dt>INACTIVE</dt>
   *             <dd>
   *                <p>The KSK is not being used for signing.</p>
   *             </dd>
   *             <dt>DELETING</dt>
   *             <dd>
   *                <p>The KSK is in the process of being deleted.</p>
   *             </dd>
   *             <dt>ACTION_NEEDED</dt>
   *             <dd>
   *                <p>There is a problem with the KSK that requires you to take action to resolve.
   * 				For example, the customer managed customer master key (CMK) might have been deleted, or the
   * 				permissions for the customer managed CMK might have been changed.</p>
   *             </dd>
   *             <dt>INTERNAL_FAILURE</dt>
   *             <dd>
   *                <p>There was an error during a request. Before you can continue to work with DNSSEC
   * 					signing, including actions that involve this KSK, you must correct the problem. For example,
   * 					you may need to activate or deactivate the KSK.</p>
   *             </dd>
   *          </dl>
   */
  Status?: string;

  /**
   * <p>The status message provided for the following key-signing key (KSK) statuses: <code>ACTION_NEEDED</code> or
   * 			<code>INTERNAL_FAILURE</code>. The status message includes information about what the problem might be and steps
   * 			that you can take to correct the issue.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date when the key-signing key (KSK) was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The last time that the key-signing key (KSK) was changed.</p>
   */
  LastModifiedDate?: Date;
}

export namespace KeySigningKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySigningKey): any => ({
    ...obj,
  });
}

export interface CreateKeySigningKeyResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;

  /**
   * <p>The key-signing key (KSK) that the request creates.</p>
   */
  KeySigningKey: KeySigningKey | undefined;

  /**
   * <p>The unique URL representing the new key-signing key (KSK).</p>
   */
  Location: string | undefined;
}

export namespace CreateKeySigningKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeySigningKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Parameter name is not valid.</p>
 */
export interface InvalidArgument extends __SmithyException, $MetadataBearer {
  name: "InvalidArgument";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidArgument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArgument): any => ({
    ...obj,
  });
}

/**
 * <p>The key-signing key (KSK) name that you specified isn't a valid name.</p>
 */
export interface InvalidKeySigningKeyName extends __SmithyException, $MetadataBearer {
  name: "InvalidKeySigningKeyName";
  $fault: "client";
  message?: string;
}

export namespace InvalidKeySigningKeyName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKeySigningKeyName): any => ({
    ...obj,
  });
}

/**
 * <p>You've already created a key-signing key (KSK) with this name or with the same customer managed customer master key (CMK) ARN.</p>
 */
export interface KeySigningKeyAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "KeySigningKeyAlreadyExists";
  $fault: "client";
  message?: string;
}

export namespace KeySigningKeyAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySigningKeyAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit for the number of key-signing keys (KSKs). Remove at least one KSK, and then try again.</p>
 */
export interface TooManyKeySigningKeys extends __SmithyException, $MetadataBearer {
  name: "TooManyKeySigningKeys";
  $fault: "client";
  message?: string;
}

export namespace TooManyKeySigningKeys {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyKeySigningKeys): any => ({
    ...obj,
  });
}

export interface CreateQueryLoggingConfigRequest {
  /**
   * <p>The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format
   * 			of the ARN:</p>
   *
   * 		       <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i>
   *          </p>
   *
   * 		       <p>To get the ARN for a log group, you can use the CloudWatch console, the
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action,
   * 			the <a href="https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command,
   * 			or the applicable command in one of the Amazon Web Services SDKs.</p>
   */
  CloudWatchLogsLogGroupArn: string | undefined;
}

export namespace CreateQueryLoggingConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueryLoggingConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about a configuration for DNS query logging.</p>
 */
export interface QueryLoggingConfig {
  /**
   * <p>The ID for a configuration for DNS query logging.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the hosted zone that CloudWatch Logs is logging queries for. </p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.</p>
   */
  CloudWatchLogsLogGroupArn: string | undefined;
}

export namespace QueryLoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLoggingConfig): any => ({
    ...obj,
  });
}

export interface CreateQueryLoggingConfigResponse {
  /**
   * <p>A complex type that contains the ID for a query logging configuration, the ID of the hosted zone that you want to
   * 			log queries for, and the ARN for the log group that you want Amazon Route 53 to send query logs to.</p>
   */
  QueryLoggingConfig: QueryLoggingConfig | undefined;

  /**
   * <p>The unique URL representing the new query logging configuration.</p>
   */
  Location: string | undefined;
}

export namespace CreateQueryLoggingConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueryLoggingConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes
 * 			include the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>There is no resource policy that specifies the log group ARN in the value for <code>Resource</code>.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy that includes the log group ARN in the value for <code>Resource</code> doesn't have the
 * 				necessary permissions.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy hasn't finished propagating yet.</p>
 *             </li>
 *             <li>
 *                <p>The Key management service (KMS) key you specified doesn’t exist or it can’t be used with the
 * 				log group associated with query log. Update or provide a resource policy to grant permissions for the KMS key.</p>
 *             </li>
 *          </ul>
 */
export interface InsufficientCloudWatchLogsResourcePolicy extends __SmithyException, $MetadataBearer {
  name: "InsufficientCloudWatchLogsResourcePolicy";
  $fault: "client";
  message?: string;
}

export namespace InsufficientCloudWatchLogsResourcePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientCloudWatchLogsResourcePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>There is no CloudWatch Logs log group with the specified ARN.</p>
 */
export interface NoSuchCloudWatchLogsLogGroup extends __SmithyException, $MetadataBearer {
  name: "NoSuchCloudWatchLogsLogGroup";
  $fault: "client";
  message?: string;
}

export namespace NoSuchCloudWatchLogsLogGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchCloudWatchLogsLogGroup): any => ({
    ...obj,
  });
}

/**
 * <p>You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists
 * 			for this hosted zone.</p>
 */
export interface QueryLoggingConfigAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "QueryLoggingConfigAlreadyExists";
  $fault: "client";
  message?: string;
}

export namespace QueryLoggingConfigAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLoggingConfigAlreadyExists): any => ({
    ...obj,
  });
}

export interface CreateReusableDelegationSetRequest {
  /**
   * <p>A unique string that identifies the request, and that allows you to retry failed
   * 			<code>CreateReusableDelegationSet</code> requests without the risk of executing the
   * 			operation twice. You must use a unique <code>CallerReference</code> string every time you
   * 			submit a <code>CreateReusableDelegationSet</code> request. <code>CallerReference</code> can be
   * 			any unique string, for example a date/time stamp.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>If you want to mark the delegation set for an existing hosted zone as reusable, the ID
   * 			for that hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace CreateReusableDelegationSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReusableDelegationSetRequest): any => ({
    ...obj,
  });
}

export interface CreateReusableDelegationSetResponse {
  /**
   * <p>A complex type that contains name server information.</p>
   */
  DelegationSet: DelegationSet | undefined;

  /**
   * <p>The unique URL representing the new reusable delegation set.</p>
   */
  Location: string | undefined;
}

export namespace CreateReusableDelegationSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReusableDelegationSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A delegation set with the same owner and caller reference combination has already been created.</p>
 */
export interface DelegationSetAlreadyCreated extends __SmithyException, $MetadataBearer {
  name: "DelegationSetAlreadyCreated";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace DelegationSetAlreadyCreated {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSetAlreadyCreated): any => ({
    ...obj,
  });
}

/**
 * <p>The specified delegation set has already been marked as reusable.</p>
 */
export interface DelegationSetAlreadyReusable extends __SmithyException, $MetadataBearer {
  name: "DelegationSetAlreadyReusable";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace DelegationSetAlreadyReusable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSetAlreadyReusable): any => ({
    ...obj,
  });
}

/**
 * <p>The specified HostedZone can't be found.</p>
 */
export interface HostedZoneNotFound extends __SmithyException, $MetadataBearer {
  name: "HostedZoneNotFound";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HostedZoneNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to create.</p>
 */
export interface CreateTrafficPolicyRequest {
  /**
   * <p>The name of the traffic policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The definition of this traffic policy in JSON format. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>(Optional) Any comments that you want to include about the traffic policy.</p>
   */
  Comment?: string;
}

export namespace CreateTrafficPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains settings for a traffic policy.</p>
 */
export interface TrafficPolicy {
  /**
   * <p>The ID that Amazon Route 53 assigned to a traffic policy when you created it.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy,
   * 			the value of <code>Version</code> is always 1.</p>
   */
  Version: number | undefined;

  /**
   * <p>The name that you specified when you created the traffic policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy
   * 			to create a traffic policy instance.</p>
   */
  Type: RRType | string | undefined;

  /**
   * <p>The definition of a traffic policy in JSON format. You specify the JSON document to use for a new
   * 			traffic policy in the <code>CreateTrafficPolicy</code> request. For more information about the JSON format, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>The comment that you specify in the <code>CreateTrafficPolicy</code> request, if any.</p>
   */
  Comment?: string;
}

export namespace TrafficPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.</p>
 */
export interface CreateTrafficPolicyResponse {
  /**
   * <p>A complex type that contains settings for the new traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;

  /**
   * <p>A unique URL that represents a new traffic policy.</p>
   */
  Location: string | undefined;
}

export namespace CreateTrafficPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The format of the traffic policy document that you specified in the <code>Document</code> element is not valid.</p>
 */
export interface InvalidTrafficPolicyDocument extends __SmithyException, $MetadataBearer {
  name: "InvalidTrafficPolicyDocument";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidTrafficPolicyDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTrafficPolicyDocument): any => ({
    ...obj,
  });
}

/**
 * <p>This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.</p>
 * 		       <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>To get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.
 * 		</p>
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 */
export interface TooManyTrafficPolicies extends __SmithyException, $MetadataBearer {
  name: "TooManyTrafficPolicies";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTrafficPolicies): any => ({
    ...obj,
  });
}

/**
 * <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 */
export interface TrafficPolicyAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "TrafficPolicyAlreadyExists";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TrafficPolicyAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicyAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.</p>
 */
export interface CreateTrafficPolicyInstanceRequest {
  /**
   * <p>The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using
   * 			the resource record sets that Route 53 creates for this traffic policy instance.</p>
   */
  Name: string | undefined;

  /**
   * <p>(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.</p>
   */
  TTL: number | undefined;

  /**
   * <p>The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyVersion: number | undefined;
}

export namespace CreateTrafficPolicyInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains settings for the new traffic policy instance.</p>
 */
export interface TrafficPolicyInstance {
  /**
   * <p>The ID that Amazon Route 53 assigned to the new traffic policy instance.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the
   * 			resource record sets that are associated with this traffic policy instance. </p>
   */
  Name: string | undefined;

  /**
   * <p>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</p>
   */
  TTL: number | undefined;

  /**
   * <p>The value of <code>State</code> is one of the following values:</p>
   * 		       <dl>
   *             <dt>Applied</dt>
   *             <dd>
   *                <p>Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations.</p>
   *             </dd>
   *             <dt>Creating</dt>
   *             <dd>
   *                <p>Route 53 is creating the resource record sets. Use <code>GetTrafficPolicyInstance</code> to confirm that the
   * 					<code>CreateTrafficPolicyInstance</code> request completed successfully.</p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>Route 53 wasn't able to create or update the resource record sets. When the value of <code>State</code> is <code>Failed</code>,
   * 					see <code>Message</code> for an explanation of what caused the request to fail.</p>
   *             </dd>
   *          </dl>
   */
  State: string | undefined;

  /**
   * <p>If <code>State</code> is <code>Failed</code>, an explanation of the reason for the failure. If <code>State</code> is another value,
   * 			<code>Message</code> is empty.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyVersion: number | undefined;

  /**
   * <p>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. </p>
   */
  TrafficPolicyType: RRType | string | undefined;
}

export namespace TrafficPolicyInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicyInstance): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.</p>
 */
export interface CreateTrafficPolicyInstanceResponse {
  /**
   * <p>A complex type that contains settings for the new traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;

  /**
   * <p>A unique URL that represents a new traffic policy instance.</p>
   */
  Location: string | undefined;
}

export namespace CreateTrafficPolicyInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>No traffic policy exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicy extends __SmithyException, $MetadataBearer {
  name: "NoSuchTrafficPolicy";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchTrafficPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchTrafficPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>This traffic policy instance can't be created because the current account has reached the limit on the number of
 * 			traffic policy instances.</p>
 * 		       <p>For information about default limits, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>For information about how to get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 */
export interface TooManyTrafficPolicyInstances extends __SmithyException, $MetadataBearer {
  name: "TooManyTrafficPolicyInstances";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicyInstances {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTrafficPolicyInstances): any => ({
    ...obj,
  });
}

/**
 * <p>There is already a traffic policy instance with the specified ID.</p>
 */
export interface TrafficPolicyInstanceAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "TrafficPolicyInstanceAlreadyExists";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TrafficPolicyInstanceAlreadyExists {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicyInstanceAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to create a new version for.</p>
 */
export interface CreateTrafficPolicyVersionRequest {
  /**
   * <p>The ID of the traffic policy for which you want to create a new version.</p>
   */
  Id: string | undefined;

  /**
   * <p>The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code>
   * 			request. For more information about the JSON format, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.</p>
   */
  Comment?: string;
}

export namespace CreateTrafficPolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.</p>
 */
export interface CreateTrafficPolicyVersionResponse {
  /**
   * <p>A complex type that contains settings for the new version of the traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;

  /**
   * <p>A unique URL that represents a new traffic policy version.</p>
   */
  Location: string | undefined;
}

export namespace CreateTrafficPolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficPolicyVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This traffic policy version can't be created because you've reached the limit of 1000 on the number of versions
 * 			that you can create for the current traffic policy.</p>
 * 		       <p>To create more traffic policy versions, you can use
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>
 * 			to get the traffic policy document for a specified traffic policy version, and then use
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>
 * 			to create a new traffic policy using the traffic policy document.</p>
 */
export interface TooManyTrafficPolicyVersionsForCurrentPolicy extends __SmithyException, $MetadataBearer {
  name: "TooManyTrafficPolicyVersionsForCurrentPolicy";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicyVersionsForCurrentPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTrafficPolicyVersionsForCurrentPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the request to authorize associating a VPC with your private hosted zone.
 * 			Authorization is only required when a private hosted zone and a VPC were created by using different accounts.</p>
 */
export interface CreateVPCAssociationAuthorizationRequest {
  /**
   * <p>The ID of the private hosted zone that you want to authorize associating a VPC with.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains the VPC ID and region for the VPC that you want to authorize associating
   * 			with your hosted zone.</p>
   */
  VPC: VPC | undefined;
}

export namespace CreateVPCAssociationAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVPCAssociationAuthorizationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.</p>
 */
export interface CreateVPCAssociationAuthorizationResponse {
  /**
   * <p>The ID of the hosted zone that you authorized associating a VPC with.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The VPC that you authorized associating with a hosted zone.</p>
   */
  VPC: VPC | undefined;
}

export namespace CreateVPCAssociationAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVPCAssociationAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've created the maximum number of authorizations that can be created for the specified hosted zone.
 * 			To authorize another VPC to be associated with the hosted zone, submit a <code>DeleteVPCAssociationAuthorization</code> request
 * 			to remove an existing authorization. To get a list of existing authorizations, submit a
 * 			<code>ListVPCAssociationAuthorizations</code> request.</p>
 */
export interface TooManyVPCAssociationAuthorizations extends __SmithyException, $MetadataBearer {
  name: "TooManyVPCAssociationAuthorizations";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TooManyVPCAssociationAuthorizations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyVPCAssociationAuthorizations): any => ({
    ...obj,
  });
}

export interface DeactivateKeySigningKeyRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A string used to identify a key-signing key (KSK).</p>
   */
  Name: string | undefined;
}

export namespace DeactivateKeySigningKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateKeySigningKeyRequest): any => ({
    ...obj,
  });
}

export interface DeactivateKeySigningKeyResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DeactivateKeySigningKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateKeySigningKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The key-signing key (KSK) is specified in a parent DS record.</p>
 */
export interface KeySigningKeyInParentDSRecord extends __SmithyException, $MetadataBearer {
  name: "KeySigningKeyInParentDSRecord";
  $fault: "client";
  message?: string;
}

export namespace KeySigningKeyInParentDSRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySigningKeyInParentDSRecord): any => ({
    ...obj,
  });
}

/**
 * <p>The key-signing key (KSK) that you specified can't be deactivated because it's the only KSK for a
 * 		currently-enabled DNSSEC. Disable DNSSEC signing, or add or enable another KSK.</p>
 */
export interface KeySigningKeyInUse extends __SmithyException, $MetadataBearer {
  name: "KeySigningKeyInUse";
  $fault: "client";
  message?: string;
}

export namespace KeySigningKeyInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySigningKeyInUse): any => ({
    ...obj,
  });
}

/**
 * <p>This action deletes a health check.</p>
 */
export interface DeleteHealthCheckRequest {
  /**
   * <p>The ID of the health check that you want to delete.</p>
   */
  HealthCheckId: string | undefined;
}

export namespace DeleteHealthCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHealthCheckRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteHealthCheckResponse {}

export namespace DeleteHealthCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHealthCheckResponse): any => ({
    ...obj,
  });
}

/**
 * @deprecated
 *
 * <p>This error code is not in use.</p>
 */
export interface HealthCheckInUse extends __SmithyException, $MetadataBearer {
  name: "HealthCheckInUse";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HealthCheckInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckInUse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete a hosted zone.</p>
 */
export interface DeleteHostedZoneRequest {
  /**
   * <p>The ID of the hosted zone you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>DeleteHostedZone</code> request.</p>
 */
export interface DeleteHostedZoneResponse {
  /**
   * <p>A complex type that contains the ID, the status, and the date and time of a request to delete a hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DeleteHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The hosted zone contains resource records that are not SOA or NS records.</p>
 */
export interface HostedZoneNotEmpty extends __SmithyException, $MetadataBearer {
  name: "HostedZoneNotEmpty";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HostedZoneNotEmpty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneNotEmpty): any => ({
    ...obj,
  });
}

export interface DeleteKeySigningKeyRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A string used to identify a key-signing key (KSK).</p>
   */
  Name: string | undefined;
}

export namespace DeleteKeySigningKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeySigningKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeySigningKeyResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DeleteKeySigningKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeySigningKeyResponse): any => ({
    ...obj,
  });
}

export interface DeleteQueryLoggingConfigRequest {
  /**
   * <p>The ID of the configuration that you want to delete. </p>
   */
  Id: string | undefined;
}

export namespace DeleteQueryLoggingConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueryLoggingConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueryLoggingConfigResponse {}

export namespace DeleteQueryLoggingConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueryLoggingConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There is no DNS query logging configuration with the specified ID.</p>
 */
export interface NoSuchQueryLoggingConfig extends __SmithyException, $MetadataBearer {
  name: "NoSuchQueryLoggingConfig";
  $fault: "client";
  message?: string;
}

export namespace NoSuchQueryLoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchQueryLoggingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set
 * 			can be deleted.</p>
 */
export interface DelegationSetInUse extends __SmithyException, $MetadataBearer {
  name: "DelegationSetInUse";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace DelegationSetInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegationSetInUse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete a reusable delegation set.</p>
 */
export interface DeleteReusableDelegationSetRequest {
  /**
   * <p>The ID of the reusable delegation set that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteReusableDelegationSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReusableDelegationSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteReusableDelegationSetResponse {}

export namespace DeleteReusableDelegationSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReusableDelegationSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete a specified traffic policy version.</p>
 */
export interface DeleteTrafficPolicyRequest {
  /**
   * <p>The ID of the traffic policy that you want to delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version number of the traffic policy that you want to delete.</p>
   */
  Version: number | undefined;
}

export namespace DeleteTrafficPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteTrafficPolicyResponse {}

export namespace DeleteTrafficPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One or more traffic policy instances were created by using the specified traffic policy.</p>
 */
export interface TrafficPolicyInUse extends __SmithyException, $MetadataBearer {
  name: "TrafficPolicyInUse";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace TrafficPolicyInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicyInUse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to delete a specified traffic policy instance.</p>
 */
export interface DeleteTrafficPolicyInstanceRequest {
  /**
   * <p>The ID of the traffic policy instance that you want to delete. </p>
   * 		       <important>
   * 			         <p>When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created
   * 				the traffic policy instance.</p>
   * 		       </important>
   */
  Id: string | undefined;
}

export namespace DeleteTrafficPolicyInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficPolicyInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteTrafficPolicyInstanceResponse {}

export namespace DeleteTrafficPolicyInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficPolicyInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>No traffic policy instance exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicyInstance extends __SmithyException, $MetadataBearer {
  name: "NoSuchTrafficPolicyInstance";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchTrafficPolicyInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchTrafficPolicyInstance): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the request to remove authorization to associate a VPC
 * 			that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account. </p>
 */
export interface DeleteVPCAssociationAuthorizationRequest {
  /**
   * <p>When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone
   * 			that was created with a different Amazon Web Services account, the ID of the hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone
   * 			that was created with a different Amazon Web Services account, a complex type that includes the ID and region of the VPC.</p>
   */
  VPC: VPC | undefined;
}

export namespace DeleteVPCAssociationAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVPCAssociationAuthorizationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Empty response for the request.</p>
 */
export interface DeleteVPCAssociationAuthorizationResponse {}

export namespace DeleteVPCAssociationAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVPCAssociationAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC that you specified is not authorized to be associated with the hosted zone.</p>
 */
export interface VPCAssociationAuthorizationNotFound extends __SmithyException, $MetadataBearer {
  name: "VPCAssociationAuthorizationNotFound";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace VPCAssociationAuthorizationNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCAssociationAuthorizationNotFound): any => ({
    ...obj,
  });
}

export interface DisableHostedZoneDNSSECRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace DisableHostedZoneDNSSECRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableHostedZoneDNSSECRequest): any => ({
    ...obj,
  });
}

export interface DisableHostedZoneDNSSECResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DisableHostedZoneDNSSECResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableHostedZoneDNSSECResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The hosted zone doesn't have any DNSSEC resources.</p>
 */
export interface DNSSECNotFound extends __SmithyException, $MetadataBearer {
  name: "DNSSECNotFound";
  $fault: "client";
  message?: string;
}

export namespace DNSSECNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DNSSECNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the VPC that you want to disassociate from a
 * 			specified private hosted zone.</p>
 */
export interface DisassociateVPCFromHostedZoneRequest {
  /**
   * <p>The ID of the private hosted zone that you want to disassociate a VPC from.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains information about the VPC that you're disassociating
   * 			from the specified hosted zone.</p>
   */
  VPC: VPC | undefined;

  /**
   * <p>
   *             <i>Optional:</i> A comment about the disassociation request.</p>
   */
  Comment?: string;
}

export namespace DisassociateVPCFromHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateVPCFromHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the disassociate request.</p>
 */
export interface DisassociateVPCFromHostedZoneResponse {
  /**
   * <p>A complex type that describes the changes made to the specified private hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DisassociateVPCFromHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateVPCFromHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with
 * 			the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.</p>
 */
export interface LastVPCAssociation extends __SmithyException, $MetadataBearer {
  name: "LastVPCAssociation";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LastVPCAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastVPCAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>The specified VPC and hosted zone are not currently associated.</p>
 */
export interface VPCAssociationNotFound extends __SmithyException, $MetadataBearer {
  name: "VPCAssociationNotFound";
  $fault: "client";
  /**
   * <p>The specified VPC or hosted zone weren't found.</p>
   */
  message?: string;
}

export namespace VPCAssociationNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCAssociationNotFound): any => ({
    ...obj,
  });
}

export interface EnableHostedZoneDNSSECRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace EnableHostedZoneDNSSECRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableHostedZoneDNSSECRequest): any => ({
    ...obj,
  });
}

export interface EnableHostedZoneDNSSECResponse {
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace EnableHostedZoneDNSSECResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableHostedZoneDNSSECResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The hosted zone nameservers don't match the parent nameservers. The hosted zone and parent must have the same nameservers.</p>
 */
export interface HostedZonePartiallyDelegated extends __SmithyException, $MetadataBearer {
  name: "HostedZonePartiallyDelegated";
  $fault: "client";
  message?: string;
}

export namespace HostedZonePartiallyDelegated {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZonePartiallyDelegated): any => ({
    ...obj,
  });
}

/**
 * <p>A key-signing key (KSK) with <code>ACTIVE</code> status wasn't found.</p>
 */
export interface KeySigningKeyWithActiveStatusNotFound extends __SmithyException, $MetadataBearer {
  name: "KeySigningKeyWithActiveStatusNotFound";
  $fault: "client";
  message?: string;
}

export namespace KeySigningKeyWithActiveStatusNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySigningKeyWithActiveStatusNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetAccountLimitRequest {
  /**
   * <p>The limit that you want to get. Valid values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create
   * 				using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create
   * 				using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets
   * 				that you can create using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies
   * 				that you can create using the current account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances
   * 				that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the
   * 				Amazon Route 53 console.)</p>
   *             </li>
   *          </ul>
   */
  Type: AccountLimitType | string | undefined;
}

export namespace GetAccountLimitRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountLimitRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetAccountLimitResponse {
  /**
   * <p>The current setting for the specified limit. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of
   * 			<code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of health checks that you can create
   * 			using the current account.</p>
   */
  Limit: AccountLimit | undefined;

  /**
   * <p>The current number of entities that you have created of the specified type. For example, if you specified
   * 			<code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Count</code>
   * 			is the current number of health checks that you have created using the current account.</p>
   */
  Count: number | undefined;
}

export namespace GetAccountLimitResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountLimitResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for a GetChange request.</p>
 */
export interface GetChangeRequest {
  /**
   * <p>The ID of the change batch request. The value that you specify here is the value that <code>ChangeResourceRecordSets</code>
   * 			returned in the <code>Id</code> element when you submitted the request.</p>
   */
  Id: string | undefined;
}

export namespace GetChangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the <code>ChangeInfo</code> element.</p>
 */
export interface GetChangeResponse {
  /**
   * <p>A complex type that contains information about the specified change batch.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace GetChangeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChangeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A change with the specified change ID does not exist.</p>
 */
export interface NoSuchChange extends __SmithyException, $MetadataBearer {
  name: "NoSuchChange";
  $fault: "client";
  message?: string;
}

export namespace NoSuchChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchChange): any => ({
    ...obj,
  });
}

/**
 * <p>Empty request.</p>
 */
export interface GetCheckerIpRangesRequest {}

export namespace GetCheckerIpRangesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCheckerIpRangesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the <code>CheckerIpRanges</code> element.</p>
 */
export interface GetCheckerIpRangesResponse {
  /**
   * <p>A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health
   * 			checkers.</p>
   */
  CheckerIpRanges: string[] | undefined;
}

export namespace GetCheckerIpRangesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCheckerIpRangesResponse): any => ({
    ...obj,
  });
}

export interface GetDNSSECRequest {
  /**
   * <p>A unique string used to identify a hosted zone.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace GetDNSSECRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDNSSECRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A string repesenting the status of DNSSEC signing.</p>
 */
export interface DNSSECStatus {
  /**
   * <p>A string that represents the current hosted zone signing status.</p>
   * 		       <p>Status can have one of the following values:</p>
   * 		       <dl>
   *             <dt>SIGNING</dt>
   *             <dd>
   *                <p>DNSSEC signing is enabled for the hosted zone.</p>
   *             </dd>
   *             <dt>NOT_SIGNING</dt>
   *             <dd>
   *                <p>DNSSEC signing is not enabled for the hosted zone.</p>
   *             </dd>
   *             <dt>DELETING</dt>
   *             <dd>
   *                <p>DNSSEC signing is in the process of being removed for the hosted zone.</p>
   *             </dd>
   *             <dt>ACTION_NEEDED</dt>
   *             <dd>
   *                <p>There is a problem with signing in the hosted zone that requires you to take action to resolve.
   * 					For example, the customer managed customer master key (CMK) might have been deleted, or the
   * 					permissions for the customer managed CMK might have been changed.</p>
   *             </dd>
   *             <dt>INTERNAL_FAILURE</dt>
   *             <dd>
   *                <p>There was an error during a request. Before you can continue to work with DNSSEC
   * 					signing, including with key-signing keys (KSKs), you must correct the problem by enabling or
   * 					disabling DNSSEC signing for the hosted zone.</p>
   *             </dd>
   *          </dl>
   */
  ServeSignature?: string;

  /**
   * <p>The status message provided for the following DNSSEC signing status: <code>INTERNAL_FAILURE</code>. The status message
   * 			includes information about what the problem might be and steps that you can take to correct the issue.</p>
   */
  StatusMessage?: string;
}

export namespace DNSSECStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DNSSECStatus): any => ({
    ...obj,
  });
}

export interface GetDNSSECResponse {
  /**
   * <p>A string repesenting the status of DNSSEC.</p>
   */
  Status: DNSSECStatus | undefined;

  /**
   * <p>The key-signing keys (KSKs) in your account.</p>
   */
  KeySigningKeys: KeySigningKey[] | undefined;
}

export namespace GetDNSSECResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDNSSECResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p>
 */
export interface GetGeoLocationRequest {
  /**
   * <p>For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>AF</b>: Africa</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AN</b>: Antarctica</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AS</b>: Asia</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EU</b>: Europe</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OC</b>: Oceania</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NA</b>: North America</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SA</b>: South America</p>
   *             </li>
   *          </ul>
   */
  ContinentCode?: string;

  /**
   * <p>Amazon Route 53 uses the two-letter country codes that are specified in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.</p>
   */
  CountryCode?: string;

  /**
   * <p>The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a>  on the United States Postal Service website. For a list of all supported subdivision codes, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html">ListGeoLocations</a> API.</p>
   */
  SubdivisionCode?: string;
}

export namespace GetGeoLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeoLocationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.</p>
 */
export interface GeoLocationDetails {
  /**
   * <p>The two-letter code for the continent.</p>
   */
  ContinentCode?: string;

  /**
   * <p>The full name of the continent.</p>
   */
  ContinentName?: string;

  /**
   * <p>The two-letter code for the country.</p>
   */
  CountryCode?: string;

  /**
   * <p>The name of the country.</p>
   */
  CountryName?: string;

  /**
   * <p>The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a>  on the United States Postal Service website. For a list of all supported subdivision codes, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html">ListGeoLocations</a> API.</p>
   */
  SubdivisionCode?: string;

  /**
   * <p>The full name of the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionName?: string;
}

export namespace GeoLocationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoLocationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the specified geolocation code.</p>
 */
export interface GetGeoLocationResponse {
  /**
   * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.</p>
   */
  GeoLocationDetails: GeoLocationDetails | undefined;
}

export namespace GetGeoLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeoLocationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Route 53 doesn't support the specified geographic location. For a list of supported geolocation codes, see the
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>
 */
export interface NoSuchGeoLocation extends __SmithyException, $MetadataBearer {
  name: "NoSuchGeoLocation";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace NoSuchGeoLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchGeoLocation): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about a specified health check. </p>
 */
export interface GetHealthCheckRequest {
  /**
   * <p>The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set,
   * 			you use this value to specify which health check to use. The value can be up to 64 characters long.</p>
   */
  HealthCheckId: string | undefined;
}

export namespace GetHealthCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheck</code> request.</p>
 */
export interface GetHealthCheckResponse {
  /**
   * <p>A complex type that contains information about one health check that is associated with
   * 			the current Amazon Web Services account.</p>
   */
  HealthCheck: HealthCheck | undefined;
}

export namespace GetHealthCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.</p>
 */
export interface IncompatibleVersion extends __SmithyException, $MetadataBearer {
  name: "IncompatibleVersion";
  $fault: "client";
  message?: string;
}

export namespace IncompatibleVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncompatibleVersion): any => ({
    ...obj,
  });
}

/**
 * <p>A request for the number of health checks that are associated with the current Amazon Web Services account.</p>
 */
export interface GetHealthCheckCountRequest {}

export namespace GetHealthCheckCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckCountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckCount</code> request.</p>
 */
export interface GetHealthCheckCountResponse {
  /**
   * <p>The number of health checks associated with the current Amazon Web Services account.</p>
   */
  HealthCheckCount: number | undefined;
}

export namespace GetHealthCheckCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckCountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for the reason that a health check failed most recently.</p>
 */
export interface GetHealthCheckLastFailureReasonRequest {
  /**
   * <p>The ID for the health check for which you want the last failure reason. When you created the health check,
   * 			<code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p>
   * 		       <note>
   *             <p>If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the
   * 			CloudWatch console. You can't use <code>GetHealthCheckLastFailureReason</code> for a calculated health check.</p>
   *          </note>
   */
  HealthCheckId: string | undefined;
}

export namespace GetHealthCheckLastFailureReasonRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckLastFailureReasonRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.</p>
 */
export interface StatusReport {
  /**
   * <p>A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.</p>
   */
  Status?: string;

  /**
   * <p>The date and time that the health checker performed the health check in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC).
   * 			For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
   */
  CheckedTime?: Date;
}

export namespace StatusReport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusReport): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.</p>
 */
export interface HealthCheckObservation {
  /**
   * <p>The region of the Amazon Route 53 health checker that provided the status in <code>StatusReport</code>.</p>
   */
  Region?: HealthCheckRegion | string;

  /**
   * <p>The IP address of the Amazon Route 53 health checker that provided the failure reason in <code>StatusReport</code>.</p>
   */
  IPAddress?: string;

  /**
   * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.</p>
   */
  StatusReport?: StatusReport;
}

export namespace HealthCheckObservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckObservation): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.</p>
 */
export interface GetHealthCheckLastFailureReasonResponse {
  /**
   * <p>A list that contains one <code>Observation</code> element for each Amazon Route 53 health checker that is reporting a last failure reason. </p>
   */
  HealthCheckObservations: HealthCheckObservation[] | undefined;
}

export namespace GetHealthCheckLastFailureReasonResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckLastFailureReasonResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get the status for a health check.</p>
 */
export interface GetHealthCheckStatusRequest {
  /**
   * <p>The ID for the health check that you want the current status for. When you created the health check,
   * 			<code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p>
   * 		       <note>
   *             <p>If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console.
   * 			You can't use <code>GetHealthCheckStatus</code> to get the status of a calculated health check.</p>
   *          </note>
   */
  HealthCheckId: string | undefined;
}

export namespace GetHealthCheckStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheck</code>
 * 			request.</p>
 */
export interface GetHealthCheckStatusResponse {
  /**
   * <p>A list that contains one <code>HealthCheckObservation</code> element for each Amazon Route 53 health checker that is reporting a status
   * 			about the health check endpoint.</p>
   */
  HealthCheckObservations: HealthCheckObservation[] | undefined;
}

export namespace GetHealthCheckStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHealthCheckStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about a specified hosted zone. </p>
 */
export interface GetHostedZoneRequest {
  /**
   * <p>The ID of the hosted zone that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contain the response to a <code>GetHostedZone</code> request.</p>
 */
export interface GetHostedZoneResponse {
  /**
   * <p>A complex type that contains general information about the specified hosted zone.</p>
   */
  HostedZone: HostedZone | undefined;

  /**
   * <p>A complex type that lists the Amazon Route 53 name servers for the specified hosted zone.</p>
   */
  DelegationSet?: DelegationSet;

  /**
   * <p>A complex type that contains information about the VPCs that are associated with the specified hosted zone.</p>
   */
  VPCs?: VPC[];
}

export namespace GetHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to retrieve a count of all the hosted zones that are associated with the current Amazon Web Services account.</p>
 */
export interface GetHostedZoneCountRequest {}

export namespace GetHostedZoneCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneCountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>GetHostedZoneCount</code> request.</p>
 */
export interface GetHostedZoneCountResponse {
  /**
   * <p>The total number of public and private hosted zones that are associated with the current Amazon Web Services account.</p>
   */
  HostedZoneCount: number | undefined;
}

export namespace GetHostedZoneCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneCountResponse): any => ({
    ...obj,
  });
}

export type HostedZoneLimitType = "MAX_RRSETS_BY_ZONE" | "MAX_VPCS_ASSOCIATED_BY_ZONE";

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetHostedZoneLimitRequest {
  /**
   * <p>The limit that you want to get. Valid values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create
   * 				in the specified hosted zone.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can
   * 				associate with the specified private hosted zone.</p>
   *             </li>
   *          </ul>
   */
  Type: HostedZoneLimitType | string | undefined;

  /**
   * <p>The ID of the hosted zone that you want to get a limit for.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace GetHostedZoneLimitRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneLimitRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface HostedZoneLimit {
  /**
   * <p>The limit that you requested. Valid values include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create
   * 				in the specified hosted zone.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can
   * 				associate with the specified private hosted zone.</p>
   *             </li>
   *          </ul>
   */
  Type: HostedZoneLimitType | string | undefined;

  /**
   * <p>The current value for the limit that is specified by <code>Type</code>.</p>
   */
  Value: number | undefined;
}

export namespace HostedZoneLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneLimit): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetHostedZoneLimitResponse {
  /**
   * <p>The current setting for the specified limit. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of
   * 			<code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of records that you can create
   * 			in the specified hosted zone.</p>
   */
  Limit: HostedZoneLimit | undefined;

  /**
   * <p>The current number of entities that you have created of the specified type. For example, if you specified
   * 			<code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Count</code>
   * 			is the current number of records that you have created in the specified hosted zone.</p>
   */
  Count: number | undefined;
}

export namespace GetHostedZoneLimitResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetHostedZoneLimitResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 */
export interface HostedZoneNotPrivate extends __SmithyException, $MetadataBearer {
  name: "HostedZoneNotPrivate";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace HostedZoneNotPrivate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneNotPrivate): any => ({
    ...obj,
  });
}

export interface GetQueryLoggingConfigRequest {
  /**
   * <p>The ID of the configuration for DNS query logging that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetQueryLoggingConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryLoggingConfigRequest): any => ({
    ...obj,
  });
}

export interface GetQueryLoggingConfigResponse {
  /**
   * <p>A complex type that contains information about the query logging configuration that you specified in a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html">GetQueryLoggingConfig</a> request.</p>
   */
  QueryLoggingConfig: QueryLoggingConfig | undefined;
}

export namespace GetQueryLoggingConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryLoggingConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about a specified reusable delegation set.</p>
 */
export interface GetReusableDelegationSetRequest {
  /**
   * <p>The ID of the reusable delegation set that you want to get a list of name servers for.</p>
   */
  Id: string | undefined;
}

export namespace GetReusableDelegationSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReusableDelegationSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.</p>
 */
export interface GetReusableDelegationSetResponse {
  /**
   * <p>A complex type that contains information about the reusable delegation set.</p>
   */
  DelegationSet: DelegationSet | undefined;
}

export namespace GetReusableDelegationSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReusableDelegationSetResponse): any => ({
    ...obj,
  });
}

export type ReusableDelegationSetLimitType = "MAX_ZONES_BY_REUSABLE_DELEGATION_SET";

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetReusableDelegationSetLimitRequest {
  /**
   * <p>Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate
   * 			with the specified reusable delegation set.</p>
   */
  Type: ReusableDelegationSetLimitType | string | undefined;

  /**
   * <p>The ID of the delegation set that you want to get the limit for.</p>
   */
  DelegationSetId: string | undefined;
}

export namespace GetReusableDelegationSetLimitRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReusableDelegationSetLimitRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface ReusableDelegationSetLimit {
  /**
   * <p>The limit that you requested: <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code>, the maximum number of hosted zones that you can associate
   * 			with the specified reusable delegation set.</p>
   */
  Type: ReusableDelegationSetLimitType | string | undefined;

  /**
   * <p>The current value for the <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> limit.</p>
   */
  Value: number | undefined;
}

export namespace ReusableDelegationSetLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReusableDelegationSetLimit): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetReusableDelegationSetLimitResponse {
  /**
   * <p>The current setting for the limit on hosted zones that you can associate with the specified reusable delegation set.</p>
   */
  Limit: ReusableDelegationSetLimit | undefined;

  /**
   * <p>The current number of hosted zones that you can associate with the specified reusable delegation set.</p>
   */
  Count: number | undefined;
}

export namespace GetReusableDelegationSetLimitResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReusableDelegationSetLimitResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets information about a specific traffic policy version.</p>
 */
export interface GetTrafficPolicyRequest {
  /**
   * <p>The ID of the traffic policy that you want to get information about.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version number of the traffic policy that you want to get information about.</p>
   */
  Version: number | undefined;
}

export namespace GetTrafficPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface GetTrafficPolicyResponse {
  /**
   * <p>A complex type that contains settings for the specified traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace GetTrafficPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets information about a specified traffic policy instance.</p>
 */
export interface GetTrafficPolicyInstanceRequest {
  /**
   * <p>The ID of the traffic policy instance that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetTrafficPolicyInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceResponse {
  /**
   * <p>A complex type that contains settings for the traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;
}

export namespace GetTrafficPolicyInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request to get the number of traffic policy instances that are associated with the current Amazon Web Services account.</p>
 */
export interface GetTrafficPolicyInstanceCountRequest {}

export namespace GetTrafficPolicyInstanceCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyInstanceCountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceCountResponse {
  /**
   * <p>The number of traffic policy instances that are associated with the current Amazon Web Services account.</p>
   */
  TrafficPolicyInstanceCount: number | undefined;
}

export namespace GetTrafficPolicyInstanceCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrafficPolicyInstanceCountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets. </p>
 */
export interface ListGeoLocationsRequest {
  /**
   * <p>The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already
   * 			returned a page or more of results, if <code>IsTruncated</code> is true, and if <code>NextContinentCode</code> from the previous
   * 			response has a value, enter that value in <code>startcontinentcode</code> to return the next page of results.</p>
   * 		       <p>Include <code>startcontinentcode</code> only if you want to list continents. Don't include <code>startcontinentcode</code>
   * 			when you're listing countries or countries with their subdivisions.</p>
   */
  StartContinentCode?: string;

  /**
   * <p>The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already
   * 			returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextCountryCode</code> from the
   * 			previous response has a value, enter that value in <code>startcountrycode</code> to return the next page of results.</p>
   */
  StartCountryCode?: string;

  /**
   * <p>The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports
   * 			for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if
   * 			<code>NextSubdivisionCode</code> from the previous response has a value, enter that value in <code>startsubdivisioncode</code>
   * 			to return the next page of results.</p>
   * 		       <p>To list subdivisions (U.S. states), you must include both <code>startcountrycode</code> and <code>startsubdivisioncode</code>.</p>
   */
  StartSubdivisionCode?: string;

  /**
   * <p>(Optional) The maximum number of geolocations to be included in the response body for this request. If more than <code>maxitems</code>
   * 			geolocations remain to be listed, then the value of the <code>IsTruncated</code> element in the response is <code>true</code>.</p>
   */
  MaxItems?: number;
}

export namespace ListGeoLocationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeoLocationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing the response information for the request.</p>
 */
export interface ListGeoLocationsResponse {
  /**
   * <p>A complex type that contains one <code>GeoLocationDetails</code> element for each location that Amazon Route 53 supports for geolocation.</p>
   */
  GeoLocationDetailsList: GeoLocationDetails[] | undefined;

  /**
   * <p>A value that indicates whether more locations remain to be listed after the last location in this response. If so, the value of
   * 			<code>IsTruncated</code> is <code>true</code>. To get more values, submit another request and include the values of <code>NextContinentCode</code>,
   * 			<code>NextCountryCode</code>, and <code>NextSubdivisionCode</code> in the <code>startcontinentcode</code>, <code>startcountrycode</code>, and
   * 			<code>startsubdivisioncode</code>, as applicable.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of
   * 			<code>NextContinentCode</code> in the <code>startcontinentcode</code> parameter in another <code>ListGeoLocations</code> request.</p>
   */
  NextContinentCode?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of
   * 			<code>NextCountryCode</code> in the <code>startcountrycode</code> parameter in another <code>ListGeoLocations</code> request.</p>
   */
  NextCountryCode?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, you can make a follow-up request to display more locations. Enter the value of
   * 			<code>NextSubdivisionCode</code> in the <code>startsubdivisioncode</code> parameter in another <code>ListGeoLocations</code> request.</p>
   */
  NextSubdivisionCode?: string;

  /**
   * <p>The value that you specified for <code>MaxItems</code> in the request.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListGeoLocationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGeoLocationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to retrieve a list of the health checks that are associated with the current Amazon Web Services account.</p>
 */
export interface ListHealthChecksRequest {
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more health checks. To get another group,
   * 			submit another <code>ListHealthChecks</code> request. </p>
   * 		       <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response,
   * 			which is the ID of the first health check that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more health checks to get.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of health checks that you want <code>ListHealthChecks</code> to return in response to the current request.
   * 			Amazon Route 53 returns a maximum of 100 items. If you set <code>MaxItems</code> to a value greater than 100, Route 53 returns only the first 100 health checks. </p>
   */
  MaxItems?: number;
}

export namespace ListHealthChecksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHealthChecksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>ListHealthChecks</code> request.</p>
 */
export interface ListHealthChecksResponse {
  /**
   * <p>A complex type that contains one <code>HealthCheck</code> element for each health check that is associated with the current
   * 			Amazon Web Services account.</p>
   */
  HealthChecks: HealthCheck[] | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListHealthChecks</code>, <code>Marker</code> is the value that you specified for the
   * 			<code>marker</code> parameter in the previous request.</p>
   */
  Marker: string | undefined;

  /**
   * <p>A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of
   * 			health checks by submitting another <code>ListHealthChecks</code> request and specifying the value of <code>NextMarker</code> in the
   * 			<code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first health check that Amazon Route 53
   * 			returns if you submit another <code>ListHealthChecks</code> request and specify the value of <code>NextMarker</code> in
   * 			the <code>marker</code> parameter.</p>
   */
  NextMarker?: string;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHealthChecks</code> that produced the
   * 			current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListHealthChecksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHealthChecksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to retrieve a list of the public and private hosted zones that are associated with the current Amazon Web Services account.</p>
 */
export interface ListHostedZonesRequest {
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more hosted zones.
   * 			To get more hosted zones, submit another <code>ListHostedZones</code> request. </p>
   * 		       <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response,
   * 			which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more hosted zones to get.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than <code>maxitems</code>
   * 			hosted zones, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>NextMarker</code>
   * 			is the hosted zone ID of the first hosted zone that Route 53 will return if you submit another request.</p>
   */
  MaxItems?: number;

  /**
   * <p>If you're using reusable delegation sets and you want to list all of the hosted zones that are associated
   * 			with a reusable delegation set, specify the ID of that reusable delegation set. </p>
   */
  DelegationSetId?: string;
}

export namespace ListHostedZonesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesRequest): any => ({
    ...obj,
  });
}

export interface ListHostedZonesResponse {
  /**
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZones: HostedZone[] | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListHostedZones</code>, <code>Marker</code> is the value that you specified for the
   * 			<code>marker</code> parameter in the request that produced the current response.</p>
   */
  Marker: string | undefined;

  /**
   * <p>A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get more hosted zones
   * 			by submitting another <code>ListHostedZones</code> request and specifying the value of <code>NextMarker</code> in the
   * 			<code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first hosted zone in the next group
   * 			of hosted zones. Submit another <code>ListHostedZones</code> request, and specify the value of <code>NextMarker</code> from the response in the
   * 			<code>marker</code> parameter.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  NextMarker?: string;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZones</code> that
   * 			produced the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListHostedZonesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account in ASCII order by domain
 * 			name. </p>
 */
export interface ListHostedZonesByNameRequest {
  /**
   * <p>(Optional) For your first request to <code>ListHostedZonesByName</code>, include the <code>dnsname</code> parameter only if you want to
   * 			specify the name of the first hosted zone in the response. If you don't include the <code>dnsname</code> parameter, Amazon Route 53 returns all of
   * 			the hosted zones that were created by the current Amazon Web Services account, in ASCII order. For subsequent requests, include both <code>dnsname</code> and
   * 			<code>hostedzoneid</code> parameters. For <code>dnsname</code>, specify the value of <code>NextDNSName</code> from the previous response.</p>
   */
  DNSName?: string;

  /**
   * <p>(Optional) For your first request to <code>ListHostedZonesByName</code>, do not include the <code>hostedzoneid</code> parameter.</p>
   * 		       <p>If you have more hosted zones than the value of <code>maxitems</code>, <code>ListHostedZonesByName</code> returns only the first
   * 			<code>maxitems</code> hosted zones. To get the next group of <code>maxitems</code> hosted zones, submit another request to
   * 			<code>ListHostedZonesByName</code> and include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For the value of
   * 			<code>hostedzoneid</code>, specify the value of the <code>NextHostedZoneId</code> element from the previous response.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The maximum number of hosted zones to be included in the response body for this request. If you have more than <code>maxitems</code>
   * 			hosted zones, then the value of the <code>IsTruncated</code> element in the response is true, and the values of <code>NextDNSName</code> and
   * 			<code>NextHostedZoneId</code> specify the first hosted zone in the next group of <code>maxitems</code> hosted zones. </p>
   */
  MaxItems?: number;
}

export namespace ListHostedZonesByNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesByNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListHostedZonesByNameResponse {
  /**
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZones: HostedZone[] | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListHostedZonesByName</code>, <code>DNSName</code> is the value that you specified for the
   * 			<code>dnsname</code> parameter in the request that produced the current response.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of
   * 			<code>maxitems</code> hosted zones by calling <code>ListHostedZonesByName</code> again and specifying the values of <code>NextDNSName</code> and
   * 			<code>NextHostedZoneId</code> elements in the <code>dnsname</code> and <code>hostedzoneid</code> parameters.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is true, the value of <code>NextDNSName</code> is the name of the first hosted zone in the next group of
   * 			<code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code>
   * 			and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  NextDNSName?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextHostedZoneId</code> identifies the first hosted zone in the
   * 			next group of <code>maxitems</code> hosted zones. Call <code>ListHostedZonesByName</code> again and specify the value of <code>NextDNSName</code>
   * 			and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  NextHostedZoneId?: string;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZonesByName</code> that produced the
   * 			current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListHostedZonesByNameResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesByNameResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The value that you specified to get the second or subsequent page of results is invalid.</p>
 */
export interface InvalidPaginationToken extends __SmithyException, $MetadataBearer {
  name: "InvalidPaginationToken";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationToken {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPaginationToken): any => ({
    ...obj,
  });
}

/**
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account created the hosted zones.</p>
 */
export interface ListHostedZonesByVPCRequest {
  /**
   * <p>The ID of the Amazon VPC that you want to list hosted zones for.</p>
   */
  VPCId: string | undefined;

  /**
   * <p>For the Amazon VPC that you specified for <code>VPCId</code>, the Amazon Web Services Region that you created the VPC in. </p>
   */
  VPCRegion: VPCRegion | string | undefined;

  /**
   * <p>(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If the specified VPC is associated with
   * 			more than <code>MaxItems</code> hosted zones, the response includes a <code>NextToken</code> element. <code>NextToken</code> contains
   * 			an encrypted token that identifies the first hosted zone that Route 53 will return if you submit another request.</p>
   */
  MaxItems?: number;

  /**
   * <p>If the previous response included a <code>NextToken</code> element, the specified VPC is associated with more hosted zones.
   * 			To get more hosted zones, submit another <code>ListHostedZonesByVPC</code> request. </p>
   * 		       <p>For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response.</p>
   * 		       <p>If the previous response didn't include a <code>NextToken</code> element, there are no more hosted zones to get.</p>
   */
  NextToken?: string;
}

export namespace ListHostedZonesByVPCRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesByVPCRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that identifies a hosted zone that a specified Amazon VPC is associated with and the owner of the hosted zone.
 * 			If there is a value for <code>OwningAccount</code>, there is no value for <code>OwningService</code>, and vice versa. </p>
 */
export interface HostedZoneOwner {
  /**
   * <p>If the hosted zone was created by an Amazon Web Services account, or was created by an Amazon Web Services service that creates hosted zones using the current account,
   * 			<code>OwningAccount</code> contains the account ID of that account. For example, when you use Cloud Map to create a hosted zone, Cloud Map
   * 			creates the hosted zone using the current Amazon Web Services account. </p>
   */
  OwningAccount?: string;

  /**
   * <p>If an Amazon Web Services service uses its own account to create a hosted zone and associate the specified VPC with that hosted zone, <code>OwningService</code>
   * 			contains an abbreviation that identifies the service. For example, if Amazon Elastic File System (Amazon EFS) created a hosted zone and
   * 			associated a VPC with the hosted zone, the value of <code>OwningService</code> is <code>efs.amazonaws.com</code>.</p>
   */
  OwningService?: string;
}

export namespace HostedZoneOwner {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneOwner): any => ({
    ...obj,
  });
}

/**
 * <p>In the response to a <code>ListHostedZonesByVPC</code> request, the <code>HostedZoneSummaries</code> element contains one
 * 			<code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with.
 * 			Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.</p>
 */
export interface HostedZoneSummary {
  /**
   * <p>The Route 53 hosted zone ID of a private hosted zone that the specified VPC is associated with.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The name of the private hosted zone, such as <code>example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The owner of a private hosted zone that the specified VPC is associated with. The owner can be either an Amazon Web Services account or
   * 			an Amazon Web Services service.</p>
   */
  Owner: HostedZoneOwner | undefined;
}

export namespace HostedZoneSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostedZoneSummary): any => ({
    ...obj,
  });
}

export interface ListHostedZonesByVPCResponse {
  /**
   * <p>A list that contains one <code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with.
   * 			Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.</p>
   */
  HostedZoneSummaries: HostedZoneSummary[] | undefined;

  /**
   * <p>The value that you specified for <code>MaxItems</code> in the most recent <code>ListHostedZonesByVPC</code> request.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The value that you will use for <code>NextToken</code> in the next <code>ListHostedZonesByVPC</code> request.</p>
   */
  NextToken?: string;
}

export namespace ListHostedZonesByVPCResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHostedZonesByVPCResponse): any => ({
    ...obj,
  });
}

export interface ListQueryLoggingConfigsRequest {
  /**
   * <p>(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in
   * 			<code>HostedZoneId</code>. </p>
   * 		       <p>If you don't specify a hosted zone ID, <code>ListQueryLoggingConfigs</code> returns all of the configurations
   * 			that are associated with the current Amazon Web Services account.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> query logging configurations, use <code>NextToken</code>
   * 			to get the second and subsequent pages of results.</p>
   * 		       <p>For the first <code>ListQueryLoggingConfigs</code> request, omit this value.</p>
   * 		       <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value
   * 			for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request.
   * 			If the current Amazon Web Services account has more than <code>MaxResults</code> configurations, use the value of
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html#API_ListQueryLoggingConfigs_RequestSyntax">NextToken</a>
   * 			in the response to get the next page of results.</p>
   * 		       <p>If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configurations.</p>
   */
  MaxResults?: number;
}

export namespace ListQueryLoggingConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueryLoggingConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListQueryLoggingConfigsResponse {
  /**
   * <p>An array that contains one
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_QueryLoggingConfig.html">QueryLoggingConfig</a> element
   * 			for each configuration for DNS query logging that is associated with the current Amazon Web Services account.</p>
   */
  QueryLoggingConfigs: QueryLoggingConfig[] | undefined;

  /**
   * <p>If a response includes the last of the query logging configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   * 		       <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html">ListQueryLoggingConfigs</a>
   * 			request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListQueryLoggingConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueryLoggingConfigsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for the resource record sets that are associated with a specified hosted zone.</p>
 */
export interface ListResourceRecordSetsRequest {
  /**
   * <p>The ID of the hosted zone that contains the resource record sets that you want to list.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The first name in the lexicographic ordering of resource record sets that you want to list.
   * 			If the specified record name doesn't exist, the results begin with the first resource record set that has a name
   * 			greater than the value of <code>name</code>.</p>
   */
  StartRecordName?: string;

  /**
   * <p>The type of resource record set to begin the record listing from.</p>
   * 		       <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> |
   * 			<code>NAPTR</code> | <code>NS</code> | <code>PTR</code> | <code>SOA</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>
   *          </p>
   * 		       <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> |
   * 			<code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code>
   *          </p>
   * 		       <p>Values for alias resource record sets: </p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>API Gateway custom regional API or edge-optimized API</b>: A</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CloudFront distribution</b>: A or AAAA</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Elastic Beanstalk environment that has a regionalized subdomain</b>: A</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Elastic Load Balancing load balancer</b>: A | AAAA</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>S3 bucket</b>: A</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VPC interface VPC endpoint</b>: A</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Another resource record set in this hosted zone:</b> The type of the resource record set
   * 				that the alias references.</p>
   *             </li>
   *          </ul>
   * 		       <p>Constraint: Specifying <code>type</code> without specifying <code>name</code> returns an <code>InvalidInput</code> error.</p>
   */
  StartRecordType?: RRType | string;

  /**
   * <p>
   *             <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type,
   * 			specify the value of <code>NextRecordIdentifier</code> from the previous response to get the next resource record set that has the current
   * 			DNS name and type.</p>
   */
  StartRecordIdentifier?: string;

  /**
   * <p>(Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes
   * 			more than <code>maxitems</code> resource record sets, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of the <code>NextRecordName</code> and <code>NextRecordType</code> elements in the response identify the first
   * 			resource record set in the next group of <code>maxitems</code> resource record sets.</p>
   */
  MaxItems?: number;
}

export namespace ListResourceRecordSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceRecordSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains list information for the resource record set.</p>
 */
export interface ListResourceRecordSetsResponse {
  /**
   * <p>Information about multiple resource record sets.</p>
   */
  ResourceRecordSets: ResourceRecordSet[] | undefined;

  /**
   * <p>A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a
   * 			follow-up pagination request by using the <code>NextRecordName</code> element.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If the results were truncated, the name of the next record in the list.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is true. </p>
   */
  NextRecordName?: string;

  /**
   * <p>If the results were truncated, the type of the next record in the list.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is true. </p>
   */
  NextRecordType?: RRType | string;

  /**
   * <p>
   *             <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given
   * 			DNS name and type, the value of <code>SetIdentifier</code> for the next resource record set that has the current DNS name and type.</p>
   * 		       <p>For information about routing policies, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html">Choosing a Routing Policy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  NextRecordIdentifier?: string;

  /**
   * <p>The maximum number of records you requested.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListResourceRecordSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceRecordSetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get a list of the reusable delegation sets that are associated with the current Amazon Web Services account.</p>
 */
export interface ListReusableDelegationSetsRequest {
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more reusable delegation sets.
   * 			To get another group, submit another <code>ListReusableDelegationSets</code> request. </p>
   * 		       <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response,
   * 			which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more reusable delegation sets to get.</p>
   */
  Marker?: string;

  /**
   * <p>The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value
   * 			greater than 100, Route 53 returns only the first 100 reusable delegation sets.</p>
   */
  MaxItems?: number;
}

export namespace ListReusableDelegationSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReusableDelegationSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the reusable delegation sets that are associated with the current Amazon Web Services account.</p>
 */
export interface ListReusableDelegationSetsResponse {
  /**
   * <p>A complex type that contains one <code>DelegationSet</code> element for each reusable delegation set that was created
   * 			by the current Amazon Web Services account.</p>
   */
  DelegationSets: DelegationSet[] | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListReusableDelegationSets</code>, <code>Marker</code> is the value that you specified
   * 			for the <code>marker</code> parameter in the request that produced the current response.</p>
   */
  Marker: string | undefined;

  /**
   * <p>A flag that indicates whether there are more reusable delegation sets to be listed.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the next reusable delegation set
   * 			that Amazon Route 53 will return if you submit another <code>ListReusableDelegationSets</code> request and specify the value of <code>NextMarker</code>
   * 			in the <code>marker</code> parameter.</p>
   */
  NextMarker?: string;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListReusableDelegationSets</code> that
   * 			produced the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListReusableDelegationSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReusableDelegationSetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing information about a request for a list of the tags that are associated with an individual resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The type of the resource.</p>
   * 		       <ul>
   *             <li>
   *                <p>The resource type for health checks is <code>healthcheck</code>.</p>
   *             </li>
   *             <li>
   *                <p>The resource type for hosted zones is <code>hostedzone</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType: TagResourceType | string | undefined;

  /**
   * <p>The ID of the resource for which you want to retrieve tags.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing a resource and its associated tags.</p>
 */
export interface ResourceTagSet {
  /**
   * <p>The type of the resource.</p>
   * 		       <ul>
   *             <li>
   *                <p>The resource type for health checks is <code>healthcheck</code>.</p>
   *             </li>
   *             <li>
   *                <p>The resource type for hosted zones is <code>hostedzone</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: TagResourceType | string;

  /**
   * <p>The ID for the specified resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ResourceTagSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTagSet): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the health checks or hosted zones for which you want to list tags.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A <code>ResourceTagSet</code> containing tags associated with the specified resource.</p>
   */
  ResourceTagSet: ResourceTagSet | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the health checks or hosted zones for which you want to list tags.</p>
 */
export interface ListTagsForResourcesRequest {
  /**
   * <p>The type of the resources.</p>
   * 		       <ul>
   *             <li>
   *                <p>The resource type for health checks is <code>healthcheck</code>.</p>
   *             </li>
   *             <li>
   *                <p>The resource type for hosted zones is <code>hostedzone</code>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType: TagResourceType | string | undefined;

  /**
   * <p>A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.</p>
   */
  ResourceIds: string[] | undefined;
}

export namespace ListTagsForResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type containing tags for the specified resources.</p>
 */
export interface ListTagsForResourcesResponse {
  /**
   * <p>A list of <code>ResourceTagSet</code>s containing tags associated with the specified resources.</p>
   */
  ResourceTagSets: ResourceTagSet[] | undefined;
}

export namespace ListTagsForResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the information about the request to list the traffic policies that are associated
 * 			with the current Amazon Web Services account.</p>
 */
export interface ListTrafficPoliciesRequest {
  /**
   * <p>(Conditional) For your first request to <code>ListTrafficPolicies</code>, don't include the <code>TrafficPolicyIdMarker</code> parameter.</p>
   * 		       <p>If you have more traffic policies than the value of <code>MaxItems</code>, <code>ListTrafficPolicies</code> returns only the first
   * 			<code>MaxItems</code> traffic policies. To get the next group of policies, submit another request to <code>ListTrafficPolicies</code>.
   * 			For the value of <code>TrafficPolicyIdMarker</code>, specify the value of <code>TrafficPolicyIdMarker</code> that was returned in the
   * 			previous response.</p>
   */
  TrafficPolicyIdMarker?: string;

  /**
   * <p>(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than
   * 			<code>MaxItems</code> traffic policies, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the
   * 			value of <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy that Route 53 will return if you submit
   * 			another request.</p>
   */
  MaxItems?: number;
}

export namespace ListTrafficPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the latest version of one traffic policy
 * 			that is associated with the current Amazon Web Services account.</p>
 */
export interface TrafficPolicySummary {
  /**
   * <p>The ID that Amazon Route 53 assigned to the traffic policy when you created it.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name that you specified for the traffic policy when you created it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy
   * 			to create a traffic policy instance.</p>
   */
  Type: RRType | string | undefined;

  /**
   * <p>The version number of the latest version of the traffic policy.</p>
   */
  LatestVersion: number | undefined;

  /**
   * <p>The number of traffic policies that are associated with the current Amazon Web Services account.</p>
   */
  TrafficPolicyCount: number | undefined;
}

export namespace TrafficPolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficPolicySummary): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPoliciesResponse {
  /**
   * <p>A list that contains one <code>TrafficPolicySummary</code> element for each traffic policy that was created by the current Amazon Web Services account.</p>
   */
  TrafficPolicySummaries: TrafficPolicySummary[] | undefined;

  /**
   * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of
   * 			traffic policies by submitting another <code>ListTrafficPolicies</code> request and specifying the value of <code>TrafficPolicyIdMarker</code>
   * 			in the <code>TrafficPolicyIdMarker</code> request parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If the value of <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy
   * 			in the next group of <code>MaxItems</code> traffic policies.</p>
   */
  TrafficPolicyIdMarker: string | undefined;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicies</code> request that produced
   * 			the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListTrafficPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to get information about the traffic policy instances that you created by using the current Amazon Web Services account.</p>
 */
export interface ListTrafficPolicyInstancesRequest {
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>HostedZoneId</code>,
   * 			specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>,
   * 			specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>,
   * 			specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a <code>ListTrafficPolicyInstances</code> request.
   * 			If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is
   * 			<code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and
   * 			<code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance in the next group of <code>MaxItems</code>
   * 			traffic policy instances.</p>
   */
  MaxItems?: number;
}

export namespace ListTrafficPolicyInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesResponse {
  /**
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements
   * 			in the request.</p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first
   * 			traffic policy instance that Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. </p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy
   * 			instance that Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. </p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets
   * 			that are associated with the first traffic policy instance that Amazon Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. </p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get more
   * 			traffic policy instances by calling <code>ListTrafficPolicyInstances</code> again and specifying the values of the
   * 			<code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			in the corresponding request parameters.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the call to <code>ListTrafficPolicyInstances</code>
   * 			that produced the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListTrafficPolicyInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for the traffic policy instances that you created in a specified hosted zone.</p>
 */
export interface ListTrafficPolicyInstancesByHostedZoneRequest {
  /**
   * <p>The ID of the hosted zone that you want to list traffic policy instances for.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>,
   * 			specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>,
   * 			specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>The maximum number of traffic policy instances to be included in the response body for this request. If you have more than
   * 			<code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   */
  MaxItems?: number;
}

export namespace ListTrafficPolicyInstancesByHostedZoneRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesByHostedZoneRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesByHostedZoneResponse {
  /**
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request. </p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy
   * 			instance in the next group of traffic policy instances.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is true, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets that are
   * 			associated with the first traffic policy instance in the next group of traffic policy instances.</p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the
   * 			next group of traffic policy instances by submitting another <code>ListTrafficPolicyInstancesByHostedZone</code> request and specifying
   * 			the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			in the corresponding request parameters.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicyInstancesByHostedZone</code> request
   * 			that produced the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListTrafficPolicyInstancesByHostedZoneResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesByHostedZoneResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the information about the request to list your traffic policy instances.</p>
 */
export interface ListTrafficPolicyInstancesByPolicyRequest {
  /**
   * <p>The ID of the traffic policy for which you want to list traffic policy instances.</p>
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the
   * 			traffic policy that is specified by <code>TrafficPolicyId</code>.</p>
   */
  TrafficPolicyVersion: number | undefined;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request. </p>
   * 		       <p>For the value of <code>hostedzoneid</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response,
   * 			which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p>
   * 		       <p>For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code>
   * 			from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p>
   * 		       <p>For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code>
   * 			from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>The maximum number of traffic policy instances to be included in the response body for this request. If you have more than
   * 			<code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   */
  MaxItems?: number;
}

export namespace ListTrafficPolicyInstancesByPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesByPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesByPolicyResponse {
  /**
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request.</p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first
   * 			traffic policy instance in the next group of traffic policy instances.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy instance
   * 			in the next group of <code>MaxItems</code> traffic policy instances.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets
   * 			that are associated with the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.</p>
   */
  TrafficPolicyInstanceTypeMarker?: RRType | string;

  /**
   * <p>A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of
   * 			traffic policy instances by calling <code>ListTrafficPolicyInstancesByPolicy</code> again and specifying the values of the <code>HostedZoneIdMarker</code>,
   * 			<code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> elements in the corresponding request parameters.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the call to <code>ListTrafficPolicyInstancesByPolicy</code> that produced
   * 			the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListTrafficPolicyInstancesByPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyInstancesByPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the information about the request to list your traffic
 * 			policies.</p>
 */
export interface ListTrafficPolicyVersionsRequest {
  /**
   * <p>Specify the value of <code>Id</code> of the traffic policy for which you want to list all versions.</p>
   */
  Id: string | undefined;

  /**
   * <p>For your first request to <code>ListTrafficPolicyVersions</code>, don't include the <code>TrafficPolicyVersionMarker</code> parameter.</p>
   * 		       <p>If you have more traffic policy versions than the value of <code>MaxItems</code>, <code>ListTrafficPolicyVersions</code> returns only
   * 			the first group of <code>MaxItems</code> versions. To get more traffic policy versions, submit another <code>ListTrafficPolicyVersions</code>
   * 			request. For the value of <code>TrafficPolicyVersionMarker</code>, specify the value of <code>TrafficPolicyVersionMarker</code> in the previous
   * 			response.</p>
   */
  TrafficPolicyVersionMarker?: string;

  /**
   * <p>The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified
   * 			traffic policy has more than <code>MaxItems</code> versions, the value of <code>IsTruncated</code> in the response is <code>true</code>,
   * 			and the value of the <code>TrafficPolicyVersionMarker</code> element is the ID of the first version that Route 53 will return if you submit
   * 			another request.</p>
   */
  MaxItems?: number;
}

export namespace ListTrafficPolicyVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyVersionsResponse {
  /**
   * <p>A list that contains one <code>TrafficPolicy</code> element for each traffic policy
   * 			version that is associated with the specified traffic policy.</p>
   */
  TrafficPolicies: TrafficPolicy[] | undefined;

  /**
   * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of
   * 			traffic policies by submitting another <code>ListTrafficPolicyVersions</code> request and specifying the value of <code>NextMarker</code>
   * 			in the <code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>TrafficPolicyVersionMarker</code> identifies the first traffic policy
   * 			that Amazon Route 53 will return if you submit another request. Call <code>ListTrafficPolicyVersions</code> again and specify the value of
   * 			<code>TrafficPolicyVersionMarker</code> in the <code>TrafficPolicyVersionMarker</code> request parameter.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  TrafficPolicyVersionMarker: string | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the <code>ListTrafficPolicyVersions</code> request that produced
   * 			the current response.</p>
   */
  MaxItems: number | undefined;
}

export namespace ListTrafficPolicyVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrafficPolicyVersionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about that can be associated with your hosted zone.</p>
 */
export interface ListVPCAssociationAuthorizationsRequest {
  /**
   * <p>The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>
   *             <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs
   * 			that can be associated with the specified hosted zone. To get the next page of results, submit another request,
   * 			and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter
   * 			in another <code>ListVPCAssociationAuthorizations</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return.
   * 			If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.</p>
   */
  MaxResults?: number;
}

export namespace ListVPCAssociationAuthorizationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVPCAssociationAuthorizationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListVPCAssociationAuthorizationsResponse {
  /**
   * <p>The ID of the hosted zone that you can associate the listed VPCs with.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>When the response includes a <code>NextToken</code> element, there are more VPCs that can be associated
   * 			with the specified hosted zone. To get the next page of VPCs, submit another <code>ListVPCAssociationAuthorizations</code> request,
   * 			and include the value of the <code>NextToken</code> element from the response in the <code>nexttoken</code> request parameter.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of VPCs that are authorized to be associated with the specified hosted zone.</p>
   */
  VPCs: VPC[] | undefined;
}

export namespace ListVPCAssociationAuthorizationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVPCAssociationAuthorizationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
 * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 */
export interface TestDNSAnswerRequest {
  /**
   * <p>The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The name of the resource record set that you want Amazon Route 53 to simulate a query for.</p>
   */
  RecordName: string | undefined;

  /**
   * <p>The type of the resource record set.</p>
   */
  RecordType: RRType | string | undefined;

  /**
   * <p>If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver.
   * 			If you omit this value, <code>TestDnsAnswer</code> uses the IP address of a DNS resolver in the Amazon Web Services US East (N. Virginia) Region
   * 			(<code>us-east-1</code>).</p>
   */
  ResolverIP?: string;

  /**
   * <p>If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client
   * 			in the applicable location, for example, <code>192.0.2.44</code> or <code>2001:db8:85a3::8a2e:370:7334</code>.</p>
   */
  EDNS0ClientSubnetIP?: string;

  /**
   * <p>If you specify an IP address for <code>edns0clientsubnetip</code>, you can optionally specify the number of bits of the IP address
   * 			that you want the checking tool to include in the DNS query. For example, if you specify <code>192.0.2.44</code> for
   * 			<code>edns0clientsubnetip</code> and <code>24</code> for <code>edns0clientsubnetmask</code>, the checking tool will simulate a request from
   * 			192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses.</p>
   * 		       <p>The range of valid values depends on whether <code>edns0clientsubnetip</code> is an IPv4 or an IPv6 address:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>IPv4</b>: Specify a value between 0 and 32</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IPv6</b>: Specify a value between 0 and 128</p>
   *             </li>
   *          </ul>
   */
  EDNS0ClientSubnetMask?: string;
}

export namespace TestDNSAnswerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestDNSAnswerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to a <code>TestDNSAnswer</code> request. </p>
 */
export interface TestDNSAnswerResponse {
  /**
   * <p>The Amazon Route 53 name server used to respond to the request.</p>
   */
  Nameserver: string | undefined;

  /**
   * <p>The name of the resource record set that you submitted a request for.</p>
   */
  RecordName: string | undefined;

  /**
   * <p>The type of the resource record set that you submitted a request for.</p>
   */
  RecordType: RRType | string | undefined;

  /**
   * <p>A list that contains values that Amazon Route 53 returned for this resource record set.</p>
   */
  RecordData: string[] | undefined;

  /**
   * <p>A code that indicates whether the request is valid or not. The most common response code is <code>NOERROR</code>, meaning that
   * 			the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error.
   * 			For a list of possible response codes, see
   * 			<a href="http://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6">DNS RCODES</a> on the IANA website. </p>
   */
  ResponseCode: string | undefined;

  /**
   * <p>The protocol that Amazon Route 53 used to respond to the request, either <code>UDP</code> or <code>TCP</code>. </p>
   */
  Protocol: string | undefined;
}

export namespace TestDNSAnswerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestDNSAnswerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of <code>HealthCheckVersion</code>
 * 			in the health check.</p>
 */
export interface HealthCheckVersionMismatch extends __SmithyException, $MetadataBearer {
  name: "HealthCheckVersionMismatch";
  $fault: "client";
  message?: string;
}

export namespace HealthCheckVersionMismatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckVersionMismatch): any => ({
    ...obj,
  });
}

export type ResettableElementName = "ChildHealthChecks" | "FullyQualifiedDomainName" | "Regions" | "ResourcePath";

/**
 * <p>A complex type that contains information about a request to update a health check.</p>
 */
export interface UpdateHealthCheckRequest {
  /**
   * <p>The ID for the health check for which you want detailed information. When you created the health check,
   * 			<code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p>
   */
  HealthCheckId: string | undefined;

  /**
   * <p>A sequential counter that Amazon Route 53 sets to <code>1</code> when you create a health check and increments by 1 each time you
   * 			update settings for the health check.</p>
   * 		       <p>We recommend that you use <code>GetHealthCheck</code> or <code>ListHealthChecks</code> to get the current value of
   * 			<code>HealthCheckVersion</code> for the health check that you want to update, and that you include that value in your
   * 			<code>UpdateHealthCheck</code> request. This prevents Route 53 from overwriting an intervening update:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If the value in the <code>UpdateHealthCheck</code> request matches the value of <code>HealthCheckVersion</code> in the
   * 					health check, Route 53 updates the health check with the new settings.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If the value of <code>HealthCheckVersion</code> in the health check is greater, the health check was changed after you
   * 					got the version number. Route 53 does not update the health check, and it returns a <code>HealthCheckVersionMismatch</code> error.</p>
   * 			         </li>
   *          </ul>
   */
  HealthCheckVersion?: number;

  /**
   * <p>The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for
   * 			<code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code>
   * 			at the interval that you specify in <code>RequestInterval</code>. Using an IP address that is returned by DNS, Route 53 then
   * 			checks the health of the endpoint.</p>
   * 		       <p>Use one of the following formats for the value of <code>IPAddress</code>: </p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.),
   * 				for example, <code>192.0.2.44</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:),
   * 				for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952,
   * 				for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and
   * 			specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance never changes. For more information,
   * 			see the applicable documentation:</p>
   * 		       <ul>
   *             <li>
   *                <p>Linux: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the
   * 				<i>Amazon EC2 User Guide for Linux Instances</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Windows: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the
   * 				<i>Amazon EC2 User Guide for Windows Instances</i>
   *                </p>
   *             </li>
   *          </ul>
   * 		       <note>
   *             <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an
   * 			existing health check to add or remove the value of <code>IPAddress</code>. </p>
   * 		       </note>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>.
   * 		</p>
   * 		       <p>Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or
   * 			multicast ranges. For more information about IP addresses for which you can't create health checks, see the following
   * 			documents:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  IPAddress?: string;

  /**
   * <p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p>
   * 		       <note>
   * 			         <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or
   * 				<code>CALCULATED</code>.</p>
   * 		       </note>
   */
  Port?: number;

  /**
   * <p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint
   * 			will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html.
   * 			You can also include query string parameters, for example, <code>/welcome.html?language=jp&login=y</code>. </p>
   * 		       <p>Specify this value only if you want to change it.</p>
   */
  ResourcePath?: string;

  /**
   * <p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p>
   *
   * 		       <note>
   *             <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an
   * 			existing health check to add or remove the value of <code>IPAddress</code>. </p>
   *          </note>
   *
   * 		       <p>
   *             <b>If you specify a value for</b>
   *             <code>IPAddress</code>:</p>
   * 		       <p>Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code>
   * 			in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint
   * 			on which you want Route 53 to perform health checks.</p>
   * 		       <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for
   * 					<code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for
   * 					<code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes
   * 					<i>
   *                      <code>FullyQualifiedDomainName</code>:<code>Port</code>
   *                   </i> to the endpoint in the <code>Host</code> header.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code>
   * 			in the <code>Host</code> header in each of the above cases.</p>
   *
   * 		       <p>
   *             <b>If you don't specify a value for</b>
   *             <code>IPAddress</code>:</p>
   * 		       <p>If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to the domain that you specify in
   * 			<code>FullyQualifiedDomainName</code> at the interval you specify in <code>RequestInterval</code>. Using an IPv4 address that is
   * 			returned by DNS, Route 53 then checks the health of the endpoint.</p>
   * 		       <note>
   *             <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint.
   * 			If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>,
   * 			the health check fails with a "DNS resolution failed" error.</p>
   *          </note>
   * 		       <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by
   * 			<code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a
   * 			health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>,
   * 			specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (www.example.com).</p>
   * 		       <important>
   * 			         <p>In this configuration, if the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and
   * 				you then associate the health check with those resource record sets, health check results will be unpredictable.</p>
   * 		       </important>
   * 		       <p>In addition, if the value of <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or
   * 			<code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does
   * 			when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a
   * 			<code>Host</code> header.</p>
   */
  FullyQualifiedDomainName?: string;

  /**
   * <p>If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want
   * 			Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers
   * 			the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)</p>
   */
  SearchString?: string;

  /**
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint
   * 			from unhealthy to healthy or vice versa. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>
   */
  FailureThreshold?: number;

  /**
   * <p>Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it
   * 			otherwise would be considered healthy.</p>
   */
  Inverted?: boolean;

  /**
   * <p>Stops Route 53 from performing health checks. When you disable a health check, here's what happens:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Health checks that check the health of endpoints:</b>
   * 				Route 53 stops submitting requests to your application, server, or other resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Calculated health checks:</b>
   * 				Route 53 stops aggregating the status of the referenced health checks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Health checks that monitor CloudWatch alarms:</b>
   * 				Route 53 stops monitoring the corresponding CloudWatch metrics.</p>
   *             </li>
   *          </ul>
   *
   * 		       <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover,
   * 			Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>.
   * 		</p>
   *
   * 		       <p>Charges for a health check still apply when the health check is disabled. For more information, see
   * 			<a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The number of child health checks that are associated with a <code>CALCULATED</code> health that Amazon Route 53 must consider healthy for the
   * 			<code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a
   * 			<code>CALCULATED</code> health check, use the <code>ChildHealthChecks</code> and <code>ChildHealthCheck</code> elements.</p>
   * 		       <p>Note the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p>
   * 			         </li>
   *          </ul>
   */
  HealthThreshold?: number;

  /**
   * <p>A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a
   * 			<code>CALCULATED</code> health check.</p>
   */
  ChildHealthChecks?: string[];

  /**
   * <p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code>
   * 			message during <code>TLS</code> negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable
   * 			SSL/TLS certificate.</p>
   * 		       <p>Some endpoints require that HTTPS requests include the host name in the <code>client_hello</code> message. If you don't enable SNI,
   * 			the status of the health check will be SSL alert <code>handshake_failure</code>. A health check can also have that status for other reasons.
   * 			If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p>
   * 		       <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more
   * 			in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for
   * 			<code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not
   * 			include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the
   * 			second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>
   */
  EnableSNI?: boolean;

  /**
   * <p>A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check
   * 			the specified endpoint from.</p>
   */
  Regions?: (HealthCheckRegion | string)[];

  /**
   * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
   * 			the specified health check is healthy.</p>
   */
  AlarmIdentifier?: AlarmIdentifier;

  /**
   * <p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign
   * 			to the health check:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>Healthy</code>: Route 53 considers the health check to be healthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastKnownStatus</code>: Route 53 uses the status of the health check from the last time CloudWatch had sufficient data
   * 				to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.</p>
   *             </li>
   *          </ul>
   */
  InsufficientDataHealthStatus?: InsufficientDataHealthStatus | string;

  /**
   * <p>A complex type that contains one <code>ResettableElementName</code> element for each element that you want to reset to the default value.
   * 			Valid values for <code>ResettableElementName</code> include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ChildHealthChecks</code>: Amazon Route 53 resets
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ChildHealthChecks">ChildHealthChecks</a>
   * 				to null.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FullyQualifiedDomainName</code>: Route 53 resets
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>.
   * 				to null.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Regions</code>: Route 53 resets the
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>
   * 				list to the default set of regions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourcePath</code>: Route 53 resets
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ResourcePath">ResourcePath</a>
   * 				to null.</p>
   *             </li>
   *          </ul>
   */
  ResetElements?: (ResettableElementName | string)[];
}

export namespace UpdateHealthCheckRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHealthCheckRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to the <code>UpdateHealthCheck</code> request.</p>
 */
export interface UpdateHealthCheckResponse {
  /**
   * <p>A complex type that contains the response to an <code>UpdateHealthCheck</code> request.</p>
   */
  HealthCheck: HealthCheck | undefined;
}

export namespace UpdateHealthCheckResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHealthCheckResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to update the comment for a hosted zone.</p>
 */
export interface UpdateHostedZoneCommentRequest {
  /**
   * <p>The ID for the hosted zone that you want to update the comment for.</p>
   */
  Id: string | undefined;

  /**
   * <p>The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the
   * 			<code>Comment</code> element, if any.</p>
   */
  Comment?: string;
}

export namespace UpdateHostedZoneCommentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHostedZoneCommentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
 */
export interface UpdateHostedZoneCommentResponse {
  /**
   * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
   */
  HostedZone: HostedZone | undefined;
}

export namespace UpdateHostedZoneCommentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHostedZoneCommentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to update the comment for.</p>
 */
export interface UpdateTrafficPolicyCommentRequest {
  /**
   * <p>The value of <code>Id</code> for the traffic policy that you want to update the comment for.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of <code>Version</code> for the traffic policy that you want to update the comment for.</p>
   */
  Version: number | undefined;

  /**
   * <p>The new comment for the specified traffic policy and version.</p>
   */
  Comment: string | undefined;
}

export namespace UpdateTrafficPolicyCommentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrafficPolicyCommentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains the response information for the traffic policy.</p>
 */
export interface UpdateTrafficPolicyCommentResponse {
  /**
   * <p>A complex type that contains settings for the specified traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace UpdateTrafficPolicyCommentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrafficPolicyCommentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type
 * 			than the current type for the instance. You specified the type in the JSON document in the <code>CreateTrafficPolicy</code> or
 * 			<code>CreateTrafficPolicyVersion</code>request. </p>
 */
export interface ConflictingTypes extends __SmithyException, $MetadataBearer {
  name: "ConflictingTypes";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ConflictingTypes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingTypes): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.</p>
 */
export interface UpdateTrafficPolicyInstanceRequest {
  /**
   * <p>The ID of the traffic policy instance that you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.</p>
   */
  TTL: number | undefined;

  /**
   * <p>The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.</p>
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.</p>
   */
  TrafficPolicyVersion: number | undefined;
}

export namespace UpdateTrafficPolicyInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrafficPolicyInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53
 * 			created based on a specified traffic policy.</p>
 */
export interface UpdateTrafficPolicyInstanceResponse {
  /**
   * <p>A complex type that contains settings for the updated traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;
}

export namespace UpdateTrafficPolicyInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrafficPolicyInstanceResponse): any => ({
    ...obj,
  });
}
