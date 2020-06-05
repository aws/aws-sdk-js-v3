import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface AccountLimit {
  __type?: "AccountLimit";
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
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountLimit => __isa(o, "AccountLimit");
}

export type AccountLimitType =
  | "MAX_HEALTH_CHECKS_BY_OWNER"
  | "MAX_HOSTED_ZONES_BY_OWNER"
  | "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER"
  | "MAX_TRAFFIC_POLICIES_BY_OWNER"
  | "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER";

/**
 * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
 * 			the specified health check is healthy.</p>
 */
export interface AlarmIdentifier {
  __type?: "AlarmIdentifier";
  /**
   * <p>The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.</p>
   * 		       <note>
   *             <p>Route 53 supports CloudWatch alarms with the following features:</p>
   * 			         <ul>
   *                <li>
   *                   <p>Standard-resolution metrics. High-resolution metrics aren't supported. For more information, see
   * 					<a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a>
   * 					in the <i>Amazon CloudWatch User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren't supported.</p>
   *                </li>
   *             </ul>
   * 		       </note>
   */
  Name: string | undefined;

  /**
   * <p>For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy,
   * 			the region that the alarm was created in.</p>
   * 		       <p>For the current list of CloudWatch regions, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region">Amazon CloudWatch</a> in
   * 			the <i>AWS Regions and Endpoints</i> chapter of the <i>Amazon Web Services General Reference</i>.</p>
   */
  Region: CloudWatchRegion | string | undefined;
}

export namespace AlarmIdentifier {
  export const filterSensitiveLog = (obj: AlarmIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlarmIdentifier =>
    __isa(o, "AlarmIdentifier");
}

/**
 * <p>
 *             <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or
 * 			an Amazon S3 bucket, that you want to route traffic to.</p>
 * 		       <p>When creating resource record sets for a private hosted zone, note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone
 * 					is unsupported.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For information about creating failover resource record sets in a private hosted zone, see
 * 					<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p>
 * 			         </li>
 *          </ul>
 */
export interface AliasTarget {
  __type?: "AliasTarget";
  /**
   * <p>
   *             <i>Alias resource record sets only:</i> The value that you specify depends on where you want to route queries:</p>
   * 		       <dl>
   *             <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt>
   *             <dd>
   *                <p>Specify the applicable domain name for your API. You can get the applicable value using the AWS CLI command
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
   * 					this is the domain name for the corresponding CloudFront distribution. You can get the value of <code>DnsName</code> using the AWS CLI command
   * 					<a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html">describe-vpc-endpoints</a>.</p>
   * 				        </dd>
   *             <dt>CloudFront distribution</dt>
   *             <dd>
   *                <p>Specify the domain name that CloudFront assigned when you created your distribution.</p>
   * 					          <p>Your CloudFront distribution must include an alternate domain name that matches the name of the resource record set.
   * 						For example, if the name of the resource record set is <i>acme.example.com</i>, your CloudFront distribution must
   * 						include <i>acme.example.com</i> as one of the alternate domain names. For more information, see
   * 						<a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html">Using Alternate Domain Names (CNAMEs)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
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
   *                         <i>AWS Management Console</i>: For information about how to get the value by using the console,
   * 								see <a href="http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html">Using Custom Domains with AWS Elastic Beanstalk</a> in the
   * 								<i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <i>Elastic Beanstalk API</i>: Use the <code>DescribeEnvironments</code> action to get
   * 								the value of the <code>CNAME</code> attribute. For more information, see
   * 								<a href="http://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html">DescribeEnvironments</a>
   * 								in the <i>AWS Elastic Beanstalk API Reference</i>.</p>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <i>AWS CLI</i>: Use the <code>describe-environments</code> command to get the value of the
   * 								<code>CNAME</code> attribute. For more information, see
   * 								<a href="http://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/describe-environments.html">describe-environments</a> in the
   * 								<i>AWS Command Line Interface Reference</i>.</p>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>ELB load balancer</dt>
   *             <dd>
   *                <p>Specify the DNS name that is associated with the load balancer. Get the DNS name by using the AWS Management Console,
   * 					the ELB API, or the AWS CLI. </p>
   * 					          <ul>
   *                   <li>
   * 							              <p>
   *                         <b>AWS Management Console</b>: Go to the EC2 page, choose <b>Load Balancers</b>
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
   * 									<a href="http://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers:
   * 									<a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>AWS CLI</b>: Use <code>describe-load-balancers</code> to get the value of <code>DNSName</code>.
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
   *             <dt>Amazon S3 bucket that is configured as a static website</dt>
   *             <dd>
   *                <p>Specify the domain name of the Amazon S3 website endpoint that you created the bucket in, for example,
   * 					<code>s3-website.us-east-2.amazonaws.com</code>. For more information about valid values, see the table
   * 					<a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Amazon Simple Storage Service (S3) Website Endpoints</a>
   * 					in the <i>Amazon Web Services General Reference</i>. For more information about using S3 buckets for websites,
   * 					see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html">Getting Started with Amazon Route 53</a>
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
   * 			When <code>EvaluateTargetHealth</code> is <code>true</code>, an alias resource record set inherits the health of the referenced AWS resource,
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
   *                <p>If the AWS resource that you specify in <code>DNSName</code> is a record or a group of records
   * 					(for example, a group of weighted records) but is not another alias record, we recommend that you associate a health check
   * 					with all of the records in the alias target. For more information, see
   * 					<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting">What Happens When You Omit Health Checks?</a>
   * 					in the <i>Amazon Route 53 Developer Guide</i>.</p>
   *             </dd>
   *          </dl>
   *
   * 		       <p>For more information and examples, see
   * 			<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Amazon Route 53 Health Checks and DNS Failover</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  EvaluateTargetHealth: boolean | undefined;

  /**
   * <p>
   *             <i>Alias resource records sets only</i>: The value used depends on where you want to route traffic:</p>
   * 		       <dl>
   *             <dt>Amazon API Gateway custom regional APIs and edge-optimized APIs</dt>
   *             <dd>
   *                <p>Specify the hosted zone ID for your API. You can get the applicable value using the AWS CLI command
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
   * 					using the AWS CLI command
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
   * 						<a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">AWS Elastic Beanstalk</a> in the
   * 						"AWS Regions and Endpoints" chapter of the <i>Amazon Web Services General Reference</i>.</p>
   * 				        </dd>
   *             <dt>ELB load balancer</dt>
   *             <dd>
   * 					          <p>Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the
   * 						hosted zone ID:</p>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elb_region">Elastic Load Balancing</a> table
   * 							in the "AWS Regions and Endpoints" chapter of the <i>Amazon Web Services General Reference</i>: Use the value that corresponds with
   * 							the region that you created your load balancer in. Note that there are separate columns for Application and Classic Load Balancers
   * 							and for Network Load Balancers.</p>
   *                   </li>
   *                   <li>
   * 							              <p>
   *                         <b>AWS Management Console</b>: Go to the Amazon EC2 page, choose
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
   * 									<a href="http://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   * 									to get the value of <code>CanonicalHostedZoneNameId</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>Application and Network Load Balancers: Use
   * 									<a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a>
   * 									to get the value of <code>CanonicalHostedZoneId</code>.</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   * 							              <p>
   *                         <b>AWS CLI</b>: Use <code>describe-load-balancers</code> to get the applicable value.
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
   *             <dt>An Amazon S3 bucket configured as a static website</dt>
   *             <dd>
   * 					          <p>Specify the hosted zone ID for the region that you created the bucket in. For more information about
   * 						valid values, see the <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Amazon Simple Storage Service Website Endpoints</a> table in the
   * 						"AWS Regions and Endpoints" chapter of the <i>Amazon Web Services General Reference</i>.</p>
   * 				        </dd>
   *             <dt>Another Route 53 resource record set in your hosted zone</dt>
   *             <dd>
   * 					          <p>Specify the hosted zone ID of your hosted zone. (An alias resource record set
   * 						can't reference a resource record set in a different hosted zone.)</p>
   * 				        </dd>
   *          </dl>
   */
  HostedZoneId: string | undefined;
}

export namespace AliasTarget {
  export const filterSensitiveLog = (obj: AliasTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is AliasTarget => __isa(o, "AliasTarget");
}

/**
 * <p>A complex type that contains information about the request to associate a VPC with a private hosted zone.</p>
 */
export interface AssociateVPCWithHostedZoneRequest {
  __type?: "AssociateVPCWithHostedZoneRequest";
  /**
   * <p>
   *             <i>Optional:</i> A comment about the association request.</p>
   */
  Comment?: string;

  /**
   * <p>The ID of the private hosted zone that you want to associate an Amazon VPC with.</p>
   * 		       <p>Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains information about the VPC that you want to associate with a private hosted zone.</p>
   */
  VPC: VPC | undefined;
}

export namespace AssociateVPCWithHostedZoneRequest {
  export const filterSensitiveLog = (
    obj: AssociateVPCWithHostedZoneRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateVPCWithHostedZoneRequest =>
    __isa(o, "AssociateVPCWithHostedZoneRequest");
}

/**
 * <p>A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.</p>
 */
export interface AssociateVPCWithHostedZoneResponse {
  __type?: "AssociateVPCWithHostedZoneResponse";
  /**
   * <p>A complex type that describes the changes made to your hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace AssociateVPCWithHostedZoneResponse {
  export const filterSensitiveLog = (
    obj: AssociateVPCWithHostedZoneResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateVPCWithHostedZoneResponse =>
    __isa(o, "AssociateVPCWithHostedZoneResponse");
}

/**
 * <p>The information for each resource record set that you want to change.</p>
 */
export interface Change {
  __type?: "Change";
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
  export const filterSensitiveLog = (obj: Change): any => ({
    ...obj
  });
  export const isa = (o: any): o is Change => __isa(o, "Change");
}

export type ChangeAction = "CREATE" | "DELETE" | "UPSERT";

/**
 * <p>The information for a change request.</p>
 */
export interface ChangeBatch {
  __type?: "ChangeBatch";
  /**
   * <p>Information about the changes to make to the record sets.</p>
   */
  Changes: Change[] | undefined;

  /**
   * <p>
   *             <i>Optional:</i> Any comments you want to include about a change batch
   * 			request.</p>
   */
  Comment?: string;
}

export namespace ChangeBatch {
  export const filterSensitiveLog = (obj: ChangeBatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeBatch => __isa(o, "ChangeBatch");
}

/**
 * <p>A complex type that describes change information about changes made to your hosted
 * 			zone.</p>
 */
export interface ChangeInfo {
  __type?: "ChangeInfo";
  /**
   * <p>A complex type that describes change information about changes made to your hosted
   * 			zone.</p>
   * 		       <p>This element contains an ID that you use when performing a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>
   * 			action to get detailed information about the change.</p>
   */
  Comment?: string;

  /**
   * <p>The ID of the request.</p>
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
}

export namespace ChangeInfo {
  export const filterSensitiveLog = (obj: ChangeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeInfo => __isa(o, "ChangeInfo");
}

/**
 * <p>A complex type that contains change information for the resource record set.</p>
 */
export interface ChangeResourceRecordSetsRequest {
  __type?: "ChangeResourceRecordSetsRequest";
  /**
   * <p>A complex type that contains an optional comment and the <code>Changes</code> element.</p>
   */
  ChangeBatch: ChangeBatch | undefined;

  /**
   * <p>The ID of the hosted zone that contains the resource record sets that you want to change.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace ChangeResourceRecordSetsRequest {
  export const filterSensitiveLog = (
    obj: ChangeResourceRecordSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeResourceRecordSetsRequest =>
    __isa(o, "ChangeResourceRecordSetsRequest");
}

/**
 * <p>A complex type containing the response for the request.</p>
 */
export interface ChangeResourceRecordSetsResponse {
  __type?: "ChangeResourceRecordSetsResponse";
  /**
   * <p>A complex type that contains information about changes made to your hosted zone.</p>
   * 		       <p>This element contains an ID that you use when performing a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>
   * 			action to get detailed information about the change.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace ChangeResourceRecordSetsResponse {
  export const filterSensitiveLog = (
    obj: ChangeResourceRecordSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeResourceRecordSetsResponse =>
    __isa(o, "ChangeResourceRecordSetsResponse");
}

export type ChangeStatus = "INSYNC" | "PENDING";

/**
 * <p>A complex type that contains information about the tags that you want to add, edit, or delete.</p>
 */
export interface ChangeTagsForResourceRequest {
  __type?: "ChangeTagsForResourceRequest";
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

  /**
   * <p>The ID of the resource for which you want to add, change, or delete tags.</p>
   */
  ResourceId: string | undefined;

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
}

export namespace ChangeTagsForResourceRequest {
  export const filterSensitiveLog = (
    obj: ChangeTagsForResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeTagsForResourceRequest =>
    __isa(o, "ChangeTagsForResourceRequest");
}

/**
 * <p>Empty response for the request.</p>
 */
export interface ChangeTagsForResourceResponse {
  __type?: "ChangeTagsForResourceResponse";
}

export namespace ChangeTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ChangeTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeTagsForResourceResponse =>
    __isa(o, "ChangeTagsForResourceResponse");
}

/**
 * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
 */
export interface CloudWatchAlarmConfiguration {
  __type?: "CloudWatchAlarmConfiguration";
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric.
   * 			For information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a>
   * 			in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.</p>
   */
  EvaluationPeriods: number | undefined;

  /**
   * <p>The name of the CloudWatch metric that the alarm is associated with.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric that the alarm is associated with. For more information, see
   * 			<a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a>
   * 			in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.</p>
   */
  Period: number | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.</p>
   */
  Statistic: Statistic | string | undefined;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.</p>
   */
  Threshold: number | undefined;
}

export namespace CloudWatchAlarmConfiguration {
  export const filterSensitiveLog = (
    obj: CloudWatchAlarmConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchAlarmConfiguration =>
    __isa(o, "CloudWatchAlarmConfiguration");
}

export type CloudWatchRegion =
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
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2";

export type ComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanOrEqualToThreshold"
  | "LessThanThreshold";

/**
 * <p>Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request. </p>
 */
export interface ConcurrentModification
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModification";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace ConcurrentModification {
  export const filterSensitiveLog = (obj: ConcurrentModification): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModification =>
    __isa(o, "ConcurrentModification");
}

/**
 * <p>The cause of this error depends on whether you're trying to create a public or a private hosted zone:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>Public hosted zone:</b> Two hosted zones that have the same name or that have a
 * 				parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone
 * 				that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a
 * 				delegation set that shares one or more name servers with the existing hosted zone. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
 * 			         </li>
 *             <li>
 *                <p>
 *                   <b>Private hosted zone:</b> You specified an Amazon VPC that you're already using
 * 				for another hosted zone, and the domain that you specified for one of the hosted zones is a subdomain of the domain that you specified
 * 				for the other hosted zone. For example, you can't use the same Amazon VPC for the hosted zones for example.com and test.example.com.</p>
 *             </li>
 *          </ul>
 */
export interface ConflictingDomainExists
  extends __SmithyException,
    $MetadataBearer {
  name: "ConflictingDomainExists";
  $fault: "client";
  message?: string;
}

export namespace ConflictingDomainExists {
  export const filterSensitiveLog = (obj: ConflictingDomainExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictingDomainExists =>
    __isa(o, "ConflictingDomainExists");
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
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace ConflictingTypes {
  export const filterSensitiveLog = (obj: ConflictingTypes): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictingTypes =>
    __isa(o, "ConflictingTypes");
}

/**
 * <p>A complex type that contains the health check request information.</p>
 */
export interface CreateHealthCheckRequest {
  __type?: "CreateHealthCheckRequest";
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
  export const filterSensitiveLog = (obj: CreateHealthCheckRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHealthCheckRequest =>
    __isa(o, "CreateHealthCheckRequest");
}

/**
 * <p>A complex type containing the response information for the new health check.</p>
 */
export interface CreateHealthCheckResponse {
  __type?: "CreateHealthCheckResponse";
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
  export const filterSensitiveLog = (obj: CreateHealthCheckResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHealthCheckResponse =>
    __isa(o, "CreateHealthCheckResponse");
}

/**
 * <p>A complex type that contains information about the request to create a public or private hosted zone.</p>
 */
export interface CreateHostedZoneRequest {
  __type?: "CreateHostedZoneRequest";
  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without
   * 			the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a
   * 			<code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set
   * 			when you created it. For more information about reusable delegation sets, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
   */
  DelegationSetId?: string;

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
}

export namespace CreateHostedZoneRequest {
  export const filterSensitiveLog = (obj: CreateHostedZoneRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHostedZoneRequest =>
    __isa(o, "CreateHostedZoneRequest");
}

/**
 * <p>A complex type containing the response information for the hosted zone.</p>
 */
export interface CreateHostedZoneResponse {
  __type?: "CreateHostedZoneResponse";
  /**
   * <p>A complex type that contains information about the <code>CreateHostedZone</code> request.</p>
   */
  ChangeInfo: ChangeInfo | undefined;

  /**
   * <p>A complex type that describes the name servers for this hosted zone.</p>
   */
  DelegationSet: DelegationSet | undefined;

  /**
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZone: HostedZone | undefined;

  /**
   * <p>The unique URL representing the new hosted zone.</p>
   */
  Location: string | undefined;

  /**
   * <p>A complex type that contains information about an Amazon VPC that you associated with this hosted zone.</p>
   */
  VPC?: VPC;
}

export namespace CreateHostedZoneResponse {
  export const filterSensitiveLog = (obj: CreateHostedZoneResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHostedZoneResponse =>
    __isa(o, "CreateHostedZoneResponse");
}

export interface CreateQueryLoggingConfigRequest {
  __type?: "CreateQueryLoggingConfigRequest";
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
   * 			or the applicable command in one of the AWS SDKs.</p>
   */
  CloudWatchLogsLogGroupArn: string | undefined;

  /**
   * <p>The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.</p>
   */
  HostedZoneId: string | undefined;
}

export namespace CreateQueryLoggingConfigRequest {
  export const filterSensitiveLog = (
    obj: CreateQueryLoggingConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQueryLoggingConfigRequest =>
    __isa(o, "CreateQueryLoggingConfigRequest");
}

export interface CreateQueryLoggingConfigResponse {
  __type?: "CreateQueryLoggingConfigResponse";
  /**
   * <p>The unique URL representing the new query logging configuration.</p>
   */
  Location: string | undefined;

  /**
   * <p>A complex type that contains the ID for a query logging configuration, the ID of the hosted zone that you want to
   * 			log queries for, and the ARN for the log group that you want Amazon Route 53 to send query logs to.</p>
   */
  QueryLoggingConfig: QueryLoggingConfig | undefined;
}

export namespace CreateQueryLoggingConfigResponse {
  export const filterSensitiveLog = (
    obj: CreateQueryLoggingConfigResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQueryLoggingConfigResponse =>
    __isa(o, "CreateQueryLoggingConfigResponse");
}

export interface CreateReusableDelegationSetRequest {
  __type?: "CreateReusableDelegationSetRequest";
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
  export const filterSensitiveLog = (
    obj: CreateReusableDelegationSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReusableDelegationSetRequest =>
    __isa(o, "CreateReusableDelegationSetRequest");
}

export interface CreateReusableDelegationSetResponse {
  __type?: "CreateReusableDelegationSetResponse";
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
  export const filterSensitiveLog = (
    obj: CreateReusableDelegationSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReusableDelegationSetResponse =>
    __isa(o, "CreateReusableDelegationSetResponse");
}

/**
 * <p>A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.</p>
 */
export interface CreateTrafficPolicyInstanceRequest {
  __type?: "CreateTrafficPolicyInstanceRequest";
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
  export const filterSensitiveLog = (
    obj: CreateTrafficPolicyInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyInstanceRequest =>
    __isa(o, "CreateTrafficPolicyInstanceRequest");
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.</p>
 */
export interface CreateTrafficPolicyInstanceResponse {
  __type?: "CreateTrafficPolicyInstanceResponse";
  /**
   * <p>A unique URL that represents a new traffic policy instance.</p>
   */
  Location: string | undefined;

  /**
   * <p>A complex type that contains settings for the new traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;
}

export namespace CreateTrafficPolicyInstanceResponse {
  export const filterSensitiveLog = (
    obj: CreateTrafficPolicyInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyInstanceResponse =>
    __isa(o, "CreateTrafficPolicyInstanceResponse");
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to create.</p>
 */
export interface CreateTrafficPolicyRequest {
  __type?: "CreateTrafficPolicyRequest";
  /**
   * <p>(Optional) Any comments that you want to include about the traffic policy.</p>
   */
  Comment?: string;

  /**
   * <p>The definition of this traffic policy in JSON format. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>The name of the traffic policy.</p>
   */
  Name: string | undefined;
}

export namespace CreateTrafficPolicyRequest {
  export const filterSensitiveLog = (obj: CreateTrafficPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyRequest =>
    __isa(o, "CreateTrafficPolicyRequest");
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.</p>
 */
export interface CreateTrafficPolicyResponse {
  __type?: "CreateTrafficPolicyResponse";
  /**
   * <p>A unique URL that represents a new traffic policy.</p>
   */
  Location: string | undefined;

  /**
   * <p>A complex type that contains settings for the new traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace CreateTrafficPolicyResponse {
  export const filterSensitiveLog = (
    obj: CreateTrafficPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyResponse =>
    __isa(o, "CreateTrafficPolicyResponse");
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to create a new version for.</p>
 */
export interface CreateTrafficPolicyVersionRequest {
  __type?: "CreateTrafficPolicyVersionRequest";
  /**
   * <p>The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.</p>
   */
  Comment?: string;

  /**
   * <p>The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code>
   * 			request. For more information about the JSON format, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>The ID of the traffic policy for which you want to create a new version.</p>
   */
  Id: string | undefined;
}

export namespace CreateTrafficPolicyVersionRequest {
  export const filterSensitiveLog = (
    obj: CreateTrafficPolicyVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyVersionRequest =>
    __isa(o, "CreateTrafficPolicyVersionRequest");
}

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.</p>
 */
export interface CreateTrafficPolicyVersionResponse {
  __type?: "CreateTrafficPolicyVersionResponse";
  /**
   * <p>A unique URL that represents a new traffic policy version.</p>
   */
  Location: string | undefined;

  /**
   * <p>A complex type that contains settings for the new version of the traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace CreateTrafficPolicyVersionResponse {
  export const filterSensitiveLog = (
    obj: CreateTrafficPolicyVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrafficPolicyVersionResponse =>
    __isa(o, "CreateTrafficPolicyVersionResponse");
}

/**
 * <p>A complex type that contains information about the request to authorize associating a VPC with your private hosted zone.
 * 			Authorization is only required when a private hosted zone and a VPC were created by using different accounts.</p>
 */
export interface CreateVPCAssociationAuthorizationRequest {
  __type?: "CreateVPCAssociationAuthorizationRequest";
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
  export const filterSensitiveLog = (
    obj: CreateVPCAssociationAuthorizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVPCAssociationAuthorizationRequest =>
    __isa(o, "CreateVPCAssociationAuthorizationRequest");
}

/**
 * <p>A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.</p>
 */
export interface CreateVPCAssociationAuthorizationResponse {
  __type?: "CreateVPCAssociationAuthorizationResponse";
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
  export const filterSensitiveLog = (
    obj: CreateVPCAssociationAuthorizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVPCAssociationAuthorizationResponse =>
    __isa(o, "CreateVPCAssociationAuthorizationResponse");
}

/**
 * <p>A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code>
 * 			for the delegation set.</p>
 */
export interface DelegationSet {
  __type?: "DelegationSet";
  /**
   * <p>The value that you specified for <code>CallerReference</code> when you created the reusable delegation set.</p>
   */
  CallerReference?: string;

  /**
   * <p>The ID that Amazon Route 53 assigns to a reusable delegation set.</p>
   */
  Id?: string;

  /**
   * <p>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   */
  NameServers: string[] | undefined;
}

export namespace DelegationSet {
  export const filterSensitiveLog = (obj: DelegationSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSet => __isa(o, "DelegationSet");
}

/**
 * <p>A delegation set with the same owner and caller reference combination has already been created.</p>
 */
export interface DelegationSetAlreadyCreated
  extends __SmithyException,
    $MetadataBearer {
  name: "DelegationSetAlreadyCreated";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace DelegationSetAlreadyCreated {
  export const filterSensitiveLog = (
    obj: DelegationSetAlreadyCreated
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSetAlreadyCreated =>
    __isa(o, "DelegationSetAlreadyCreated");
}

/**
 * <p>The specified delegation set has already been marked as reusable.</p>
 */
export interface DelegationSetAlreadyReusable
  extends __SmithyException,
    $MetadataBearer {
  name: "DelegationSetAlreadyReusable";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace DelegationSetAlreadyReusable {
  export const filterSensitiveLog = (
    obj: DelegationSetAlreadyReusable
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSetAlreadyReusable =>
    __isa(o, "DelegationSetAlreadyReusable");
}

/**
 * <p>The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set
 * 			can be deleted.</p>
 */
export interface DelegationSetInUse extends __SmithyException, $MetadataBearer {
  name: "DelegationSetInUse";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace DelegationSetInUse {
  export const filterSensitiveLog = (obj: DelegationSetInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSetInUse =>
    __isa(o, "DelegationSetInUse");
}

/**
 * <p>You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a
 * 			limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 */
export interface DelegationSetNotAvailable
  extends __SmithyException,
    $MetadataBearer {
  name: "DelegationSetNotAvailable";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace DelegationSetNotAvailable {
  export const filterSensitiveLog = (obj: DelegationSetNotAvailable): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSetNotAvailable =>
    __isa(o, "DelegationSetNotAvailable");
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface DelegationSetNotReusable
  extends __SmithyException,
    $MetadataBearer {
  name: "DelegationSetNotReusable";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace DelegationSetNotReusable {
  export const filterSensitiveLog = (obj: DelegationSetNotReusable): any => ({
    ...obj
  });
  export const isa = (o: any): o is DelegationSetNotReusable =>
    __isa(o, "DelegationSetNotReusable");
}

/**
 * <p>This action deletes a health check.</p>
 */
export interface DeleteHealthCheckRequest {
  __type?: "DeleteHealthCheckRequest";
  /**
   * <p>The ID of the health check that you want to delete.</p>
   */
  HealthCheckId: string | undefined;
}

export namespace DeleteHealthCheckRequest {
  export const filterSensitiveLog = (obj: DeleteHealthCheckRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHealthCheckRequest =>
    __isa(o, "DeleteHealthCheckRequest");
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteHealthCheckResponse {
  __type?: "DeleteHealthCheckResponse";
}

export namespace DeleteHealthCheckResponse {
  export const filterSensitiveLog = (obj: DeleteHealthCheckResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHealthCheckResponse =>
    __isa(o, "DeleteHealthCheckResponse");
}

/**
 * <p>A request to delete a hosted zone.</p>
 */
export interface DeleteHostedZoneRequest {
  __type?: "DeleteHostedZoneRequest";
  /**
   * <p>The ID of the hosted zone you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteHostedZoneRequest {
  export const filterSensitiveLog = (obj: DeleteHostedZoneRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHostedZoneRequest =>
    __isa(o, "DeleteHostedZoneRequest");
}

/**
 * <p>A complex type that contains the response to a <code>DeleteHostedZone</code> request.</p>
 */
export interface DeleteHostedZoneResponse {
  __type?: "DeleteHostedZoneResponse";
  /**
   * <p>A complex type that contains the ID, the status, and the date and time of a request to delete a hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DeleteHostedZoneResponse {
  export const filterSensitiveLog = (obj: DeleteHostedZoneResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHostedZoneResponse =>
    __isa(o, "DeleteHostedZoneResponse");
}

export interface DeleteQueryLoggingConfigRequest {
  __type?: "DeleteQueryLoggingConfigRequest";
  /**
   * <p>The ID of the configuration that you want to delete. </p>
   */
  Id: string | undefined;
}

export namespace DeleteQueryLoggingConfigRequest {
  export const filterSensitiveLog = (
    obj: DeleteQueryLoggingConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQueryLoggingConfigRequest =>
    __isa(o, "DeleteQueryLoggingConfigRequest");
}

export interface DeleteQueryLoggingConfigResponse {
  __type?: "DeleteQueryLoggingConfigResponse";
}

export namespace DeleteQueryLoggingConfigResponse {
  export const filterSensitiveLog = (
    obj: DeleteQueryLoggingConfigResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQueryLoggingConfigResponse =>
    __isa(o, "DeleteQueryLoggingConfigResponse");
}

/**
 * <p>A request to delete a reusable delegation set.</p>
 */
export interface DeleteReusableDelegationSetRequest {
  __type?: "DeleteReusableDelegationSetRequest";
  /**
   * <p>The ID of the reusable delegation set that you want to delete.</p>
   */
  Id: string | undefined;
}

export namespace DeleteReusableDelegationSetRequest {
  export const filterSensitiveLog = (
    obj: DeleteReusableDelegationSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReusableDelegationSetRequest =>
    __isa(o, "DeleteReusableDelegationSetRequest");
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteReusableDelegationSetResponse {
  __type?: "DeleteReusableDelegationSetResponse";
}

export namespace DeleteReusableDelegationSetResponse {
  export const filterSensitiveLog = (
    obj: DeleteReusableDelegationSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReusableDelegationSetResponse =>
    __isa(o, "DeleteReusableDelegationSetResponse");
}

/**
 * <p>A request to delete a specified traffic policy instance.</p>
 */
export interface DeleteTrafficPolicyInstanceRequest {
  __type?: "DeleteTrafficPolicyInstanceRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteTrafficPolicyInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrafficPolicyInstanceRequest =>
    __isa(o, "DeleteTrafficPolicyInstanceRequest");
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteTrafficPolicyInstanceResponse {
  __type?: "DeleteTrafficPolicyInstanceResponse";
}

export namespace DeleteTrafficPolicyInstanceResponse {
  export const filterSensitiveLog = (
    obj: DeleteTrafficPolicyInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrafficPolicyInstanceResponse =>
    __isa(o, "DeleteTrafficPolicyInstanceResponse");
}

/**
 * <p>A request to delete a specified traffic policy version.</p>
 */
export interface DeleteTrafficPolicyRequest {
  __type?: "DeleteTrafficPolicyRequest";
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
  export const filterSensitiveLog = (obj: DeleteTrafficPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrafficPolicyRequest =>
    __isa(o, "DeleteTrafficPolicyRequest");
}

/**
 * <p>An empty element.</p>
 */
export interface DeleteTrafficPolicyResponse {
  __type?: "DeleteTrafficPolicyResponse";
}

export namespace DeleteTrafficPolicyResponse {
  export const filterSensitiveLog = (
    obj: DeleteTrafficPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrafficPolicyResponse =>
    __isa(o, "DeleteTrafficPolicyResponse");
}

/**
 * <p>A complex type that contains information about the request to remove authorization to associate a VPC
 * 			that was created by one AWS account with a hosted zone that was created with a different AWS account. </p>
 */
export interface DeleteVPCAssociationAuthorizationRequest {
  __type?: "DeleteVPCAssociationAuthorizationRequest";
  /**
   * <p>When removing authorization to associate a VPC that was created by one AWS account with a hosted zone
   * 			that was created with a different AWS account, the ID of the hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>When removing authorization to associate a VPC that was created by one AWS account with a hosted zone
   * 			that was created with a different AWS account, a complex type that includes the ID and region of the VPC.</p>
   */
  VPC: VPC | undefined;
}

export namespace DeleteVPCAssociationAuthorizationRequest {
  export const filterSensitiveLog = (
    obj: DeleteVPCAssociationAuthorizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVPCAssociationAuthorizationRequest =>
    __isa(o, "DeleteVPCAssociationAuthorizationRequest");
}

/**
 * <p>Empty response for the request.</p>
 */
export interface DeleteVPCAssociationAuthorizationResponse {
  __type?: "DeleteVPCAssociationAuthorizationResponse";
}

export namespace DeleteVPCAssociationAuthorizationResponse {
  export const filterSensitiveLog = (
    obj: DeleteVPCAssociationAuthorizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVPCAssociationAuthorizationResponse =>
    __isa(o, "DeleteVPCAssociationAuthorizationResponse");
}

/**
 * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.</p>
 */
export interface Dimension {
  __type?: "Dimension";
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
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj
  });
  export const isa = (o: any): o is Dimension => __isa(o, "Dimension");
}

/**
 * <p>A complex type that contains information about the VPC that you want to disassociate from a
 * 			specified private hosted zone.</p>
 */
export interface DisassociateVPCFromHostedZoneRequest {
  __type?: "DisassociateVPCFromHostedZoneRequest";
  /**
   * <p>
   *             <i>Optional:</i> A comment about the disassociation request.</p>
   */
  Comment?: string;

  /**
   * <p>The ID of the private hosted zone that you want to disassociate a VPC from.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>A complex type that contains information about the VPC that you're disassociating
   * 			from the specified hosted zone.</p>
   */
  VPC: VPC | undefined;
}

export namespace DisassociateVPCFromHostedZoneRequest {
  export const filterSensitiveLog = (
    obj: DisassociateVPCFromHostedZoneRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateVPCFromHostedZoneRequest =>
    __isa(o, "DisassociateVPCFromHostedZoneRequest");
}

/**
 * <p>A complex type that contains the response information for the disassociate request.</p>
 */
export interface DisassociateVPCFromHostedZoneResponse {
  __type?: "DisassociateVPCFromHostedZoneResponse";
  /**
   * <p>A complex type that describes the changes made to the specified private hosted zone.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace DisassociateVPCFromHostedZoneResponse {
  export const filterSensitiveLog = (
    obj: DisassociateVPCFromHostedZoneResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateVPCFromHostedZoneResponse =>
    __isa(o, "DisassociateVPCFromHostedZoneResponse");
}

/**
 * <p>A complex type that contains information about a geographic location.</p>
 */
export interface GeoLocation {
  __type?: "GeoLocation";
  /**
   * <p>The two-letter code for the continent.</p>
   * 		       <p>Valid values: <code>AF</code> | <code>AN</code> | <code>AS</code> | <code>EU</code> | <code>OC</code> | <code>NA</code> | <code>SA</code>
   *          </p>
   * 		       <p>Constraint: Specifying <code>ContinentCode</code> with either <code>CountryCode</code> or <code>SubdivisionCode</code> returns an
   * 			<code>InvalidInput</code> error.</p>
   */
  ContinentCode?: string;

  /**
   * <p>The two-letter code for the country.</p>
   */
  CountryCode?: string;

  /**
   * <p>The code for the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionCode?: string;
}

export namespace GeoLocation {
  export const filterSensitiveLog = (obj: GeoLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoLocation => __isa(o, "GeoLocation");
}

/**
 * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.</p>
 */
export interface GeoLocationDetails {
  __type?: "GeoLocationDetails";
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
   * <p>The code for the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionCode?: string;

  /**
   * <p>The full name of the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionName?: string;
}

export namespace GeoLocationDetails {
  export const filterSensitiveLog = (obj: GeoLocationDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoLocationDetails =>
    __isa(o, "GeoLocationDetails");
}

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetAccountLimitRequest {
  __type?: "GetAccountLimitRequest";
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
  export const filterSensitiveLog = (obj: GetAccountLimitRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountLimitRequest =>
    __isa(o, "GetAccountLimitRequest");
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetAccountLimitResponse {
  __type?: "GetAccountLimitResponse";
  /**
   * <p>The current number of entities that you have created of the specified type. For example, if you specified
   * 			<code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of <code>Type</code> in the request, the value of <code>Count</code>
   * 			is the current number of health checks that you have created using the current account.</p>
   */
  Count: number | undefined;

  /**
   * <p>The current setting for the specified limit. For example, if you specified <code>MAX_HEALTH_CHECKS_BY_OWNER</code> for the value of
   * 			<code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of health checks that you can create
   * 			using the current account.</p>
   */
  Limit: AccountLimit | undefined;
}

export namespace GetAccountLimitResponse {
  export const filterSensitiveLog = (obj: GetAccountLimitResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountLimitResponse =>
    __isa(o, "GetAccountLimitResponse");
}

/**
 * <p>The input for a GetChange request.</p>
 */
export interface GetChangeRequest {
  __type?: "GetChangeRequest";
  /**
   * <p>The ID of the change batch request. The value that you specify here is the value that <code>ChangeResourceRecordSets</code>
   * 			returned in the <code>Id</code> element when you submitted the request.</p>
   */
  Id: string | undefined;
}

export namespace GetChangeRequest {
  export const filterSensitiveLog = (obj: GetChangeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeRequest =>
    __isa(o, "GetChangeRequest");
}

/**
 * <p>A complex type that contains the <code>ChangeInfo</code> element.</p>
 */
export interface GetChangeResponse {
  __type?: "GetChangeResponse";
  /**
   * <p>A complex type that contains information about the specified change batch.</p>
   */
  ChangeInfo: ChangeInfo | undefined;
}

export namespace GetChangeResponse {
  export const filterSensitiveLog = (obj: GetChangeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeResponse =>
    __isa(o, "GetChangeResponse");
}

/**
 * <p>Empty request.</p>
 */
export interface GetCheckerIpRangesRequest {
  __type?: "GetCheckerIpRangesRequest";
}

export namespace GetCheckerIpRangesRequest {
  export const filterSensitiveLog = (obj: GetCheckerIpRangesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCheckerIpRangesRequest =>
    __isa(o, "GetCheckerIpRangesRequest");
}

/**
 * <p>A complex type that contains the <code>CheckerIpRanges</code> element.</p>
 */
export interface GetCheckerIpRangesResponse {
  __type?: "GetCheckerIpRangesResponse";
  /**
   * <p>A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health
   * 			checkers.</p>
   */
  CheckerIpRanges: string[] | undefined;
}

export namespace GetCheckerIpRangesResponse {
  export const filterSensitiveLog = (obj: GetCheckerIpRangesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCheckerIpRangesResponse =>
    __isa(o, "GetCheckerIpRangesResponse");
}

/**
 * <p>A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p>
 */
export interface GetGeoLocationRequest {
  __type?: "GetGeoLocationRequest";
  /**
   * <p>Amazon Route 53 supports the following continent codes:</p>
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
   * <p>Amazon Route 53 uses the one- to three-letter subdivision codes that are specified in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>. Route 53 doesn't support subdivision codes
   * 			for all countries. If you specify <code>subdivisioncode</code>, you must also specify <code>countrycode</code>. </p>
   */
  SubdivisionCode?: string;
}

export namespace GetGeoLocationRequest {
  export const filterSensitiveLog = (obj: GetGeoLocationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGeoLocationRequest =>
    __isa(o, "GetGeoLocationRequest");
}

/**
 * <p>A complex type that contains the response information for the specified geolocation code.</p>
 */
export interface GetGeoLocationResponse {
  __type?: "GetGeoLocationResponse";
  /**
   * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.</p>
   */
  GeoLocationDetails: GeoLocationDetails | undefined;
}

export namespace GetGeoLocationResponse {
  export const filterSensitiveLog = (obj: GetGeoLocationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGeoLocationResponse =>
    __isa(o, "GetGeoLocationResponse");
}

/**
 * <p>A request for the number of health checks that are associated with the current AWS account.</p>
 */
export interface GetHealthCheckCountRequest {
  __type?: "GetHealthCheckCountRequest";
}

export namespace GetHealthCheckCountRequest {
  export const filterSensitiveLog = (obj: GetHealthCheckCountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckCountRequest =>
    __isa(o, "GetHealthCheckCountRequest");
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckCount</code> request.</p>
 */
export interface GetHealthCheckCountResponse {
  __type?: "GetHealthCheckCountResponse";
  /**
   * <p>The number of health checks associated with the current AWS account.</p>
   */
  HealthCheckCount: number | undefined;
}

export namespace GetHealthCheckCountResponse {
  export const filterSensitiveLog = (
    obj: GetHealthCheckCountResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckCountResponse =>
    __isa(o, "GetHealthCheckCountResponse");
}

/**
 * <p>A request for the reason that a health check failed most recently.</p>
 */
export interface GetHealthCheckLastFailureReasonRequest {
  __type?: "GetHealthCheckLastFailureReasonRequest";
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
  export const filterSensitiveLog = (
    obj: GetHealthCheckLastFailureReasonRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckLastFailureReasonRequest =>
    __isa(o, "GetHealthCheckLastFailureReasonRequest");
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.</p>
 */
export interface GetHealthCheckLastFailureReasonResponse {
  __type?: "GetHealthCheckLastFailureReasonResponse";
  /**
   * <p>A list that contains one <code>Observation</code> element for each Amazon Route 53 health checker that is reporting a last failure reason. </p>
   */
  HealthCheckObservations: HealthCheckObservation[] | undefined;
}

export namespace GetHealthCheckLastFailureReasonResponse {
  export const filterSensitiveLog = (
    obj: GetHealthCheckLastFailureReasonResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckLastFailureReasonResponse =>
    __isa(o, "GetHealthCheckLastFailureReasonResponse");
}

/**
 * <p>A request to get information about a specified health check. </p>
 */
export interface GetHealthCheckRequest {
  __type?: "GetHealthCheckRequest";
  /**
   * <p>The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set,
   * 			you use this value to specify which health check to use. The value can be up to 64 characters long.</p>
   */
  HealthCheckId: string | undefined;
}

export namespace GetHealthCheckRequest {
  export const filterSensitiveLog = (obj: GetHealthCheckRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckRequest =>
    __isa(o, "GetHealthCheckRequest");
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheck</code> request.</p>
 */
export interface GetHealthCheckResponse {
  __type?: "GetHealthCheckResponse";
  /**
   * <p>A complex type that contains information about one health check that is associated with
   * 			the current AWS account.</p>
   */
  HealthCheck: HealthCheck | undefined;
}

export namespace GetHealthCheckResponse {
  export const filterSensitiveLog = (obj: GetHealthCheckResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckResponse =>
    __isa(o, "GetHealthCheckResponse");
}

/**
 * <p>A request to get the status for a health check.</p>
 */
export interface GetHealthCheckStatusRequest {
  __type?: "GetHealthCheckStatusRequest";
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
  export const filterSensitiveLog = (
    obj: GetHealthCheckStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckStatusRequest =>
    __isa(o, "GetHealthCheckStatusRequest");
}

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheck</code>
 * 			request.</p>
 */
export interface GetHealthCheckStatusResponse {
  __type?: "GetHealthCheckStatusResponse";
  /**
   * <p>A list that contains one <code>HealthCheckObservation</code> element for each Amazon Route 53 health checker that is reporting a status
   * 			about the health check endpoint.</p>
   */
  HealthCheckObservations: HealthCheckObservation[] | undefined;
}

export namespace GetHealthCheckStatusResponse {
  export const filterSensitiveLog = (
    obj: GetHealthCheckStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHealthCheckStatusResponse =>
    __isa(o, "GetHealthCheckStatusResponse");
}

/**
 * <p>A request to retrieve a count of all the hosted zones that are associated with the current AWS account.</p>
 */
export interface GetHostedZoneCountRequest {
  __type?: "GetHostedZoneCountRequest";
}

export namespace GetHostedZoneCountRequest {
  export const filterSensitiveLog = (obj: GetHostedZoneCountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneCountRequest =>
    __isa(o, "GetHostedZoneCountRequest");
}

/**
 * <p>A complex type that contains the response to a <code>GetHostedZoneCount</code> request.</p>
 */
export interface GetHostedZoneCountResponse {
  __type?: "GetHostedZoneCountResponse";
  /**
   * <p>The total number of public and private hosted zones that are associated with the current AWS account.</p>
   */
  HostedZoneCount: number | undefined;
}

export namespace GetHostedZoneCountResponse {
  export const filterSensitiveLog = (obj: GetHostedZoneCountResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneCountResponse =>
    __isa(o, "GetHostedZoneCountResponse");
}

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetHostedZoneLimitRequest {
  __type?: "GetHostedZoneLimitRequest";
  /**
   * <p>The ID of the hosted zone that you want to get a limit for.</p>
   */
  HostedZoneId: string | undefined;

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
}

export namespace GetHostedZoneLimitRequest {
  export const filterSensitiveLog = (obj: GetHostedZoneLimitRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneLimitRequest =>
    __isa(o, "GetHostedZoneLimitRequest");
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetHostedZoneLimitResponse {
  __type?: "GetHostedZoneLimitResponse";
  /**
   * <p>The current number of entities that you have created of the specified type. For example, if you specified
   * 			<code>MAX_RRSETS_BY_ZONE</code> for the value of <code>Type</code> in the request, the value of <code>Count</code>
   * 			is the current number of records that you have created in the specified hosted zone.</p>
   */
  Count: number | undefined;

  /**
   * <p>The current setting for the specified limit. For example, if you specified <code>MAX_RRSETS_BY_ZONE</code> for the value of
   * 			<code>Type</code> in the request, the value of <code>Limit</code> is the maximum number of records that you can create
   * 			in the specified hosted zone.</p>
   */
  Limit: HostedZoneLimit | undefined;
}

export namespace GetHostedZoneLimitResponse {
  export const filterSensitiveLog = (obj: GetHostedZoneLimitResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneLimitResponse =>
    __isa(o, "GetHostedZoneLimitResponse");
}

/**
 * <p>A request to get information about a specified hosted zone. </p>
 */
export interface GetHostedZoneRequest {
  __type?: "GetHostedZoneRequest";
  /**
   * <p>The ID of the hosted zone that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetHostedZoneRequest {
  export const filterSensitiveLog = (obj: GetHostedZoneRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneRequest =>
    __isa(o, "GetHostedZoneRequest");
}

/**
 * <p>A complex type that contain the response to a <code>GetHostedZone</code> request.</p>
 */
export interface GetHostedZoneResponse {
  __type?: "GetHostedZoneResponse";
  /**
   * <p>A complex type that lists the Amazon Route 53 name servers for the specified hosted zone.</p>
   */
  DelegationSet?: DelegationSet;

  /**
   * <p>A complex type that contains general information about the specified hosted zone.</p>
   */
  HostedZone: HostedZone | undefined;

  /**
   * <p>A complex type that contains information about the VPCs that are associated with the specified hosted zone.</p>
   */
  VPCs?: VPC[];
}

export namespace GetHostedZoneResponse {
  export const filterSensitiveLog = (obj: GetHostedZoneResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHostedZoneResponse =>
    __isa(o, "GetHostedZoneResponse");
}

export interface GetQueryLoggingConfigRequest {
  __type?: "GetQueryLoggingConfigRequest";
  /**
   * <p>The ID of the configuration for DNS query logging that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetQueryLoggingConfigRequest {
  export const filterSensitiveLog = (
    obj: GetQueryLoggingConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQueryLoggingConfigRequest =>
    __isa(o, "GetQueryLoggingConfigRequest");
}

export interface GetQueryLoggingConfigResponse {
  __type?: "GetQueryLoggingConfigResponse";
  /**
   * <p>A complex type that contains information about the query logging configuration that you specified in a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html">GetQueryLoggingConfig</a> request.</p>
   */
  QueryLoggingConfig: QueryLoggingConfig | undefined;
}

export namespace GetQueryLoggingConfigResponse {
  export const filterSensitiveLog = (
    obj: GetQueryLoggingConfigResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQueryLoggingConfigResponse =>
    __isa(o, "GetQueryLoggingConfigResponse");
}

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetReusableDelegationSetLimitRequest {
  __type?: "GetReusableDelegationSetLimitRequest";
  /**
   * <p>The ID of the delegation set that you want to get the limit for.</p>
   */
  DelegationSetId: string | undefined;

  /**
   * <p>Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate
   * 			with the specified reusable delegation set.</p>
   */
  Type: ReusableDelegationSetLimitType | string | undefined;
}

export namespace GetReusableDelegationSetLimitRequest {
  export const filterSensitiveLog = (
    obj: GetReusableDelegationSetLimitRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReusableDelegationSetLimitRequest =>
    __isa(o, "GetReusableDelegationSetLimitRequest");
}

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetReusableDelegationSetLimitResponse {
  __type?: "GetReusableDelegationSetLimitResponse";
  /**
   * <p>The current number of hosted zones that you can associate with the specified reusable delegation set.</p>
   */
  Count: number | undefined;

  /**
   * <p>The current setting for the limit on hosted zones that you can associate with the specified reusable delegation set.</p>
   */
  Limit: ReusableDelegationSetLimit | undefined;
}

export namespace GetReusableDelegationSetLimitResponse {
  export const filterSensitiveLog = (
    obj: GetReusableDelegationSetLimitResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReusableDelegationSetLimitResponse =>
    __isa(o, "GetReusableDelegationSetLimitResponse");
}

/**
 * <p>A request to get information about a specified reusable delegation set.</p>
 */
export interface GetReusableDelegationSetRequest {
  __type?: "GetReusableDelegationSetRequest";
  /**
   * <p>The ID of the reusable delegation set that you want to get a list of name servers for.</p>
   */
  Id: string | undefined;
}

export namespace GetReusableDelegationSetRequest {
  export const filterSensitiveLog = (
    obj: GetReusableDelegationSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReusableDelegationSetRequest =>
    __isa(o, "GetReusableDelegationSetRequest");
}

/**
 * <p>A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.</p>
 */
export interface GetReusableDelegationSetResponse {
  __type?: "GetReusableDelegationSetResponse";
  /**
   * <p>A complex type that contains information about the reusable delegation set.</p>
   */
  DelegationSet: DelegationSet | undefined;
}

export namespace GetReusableDelegationSetResponse {
  export const filterSensitiveLog = (
    obj: GetReusableDelegationSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReusableDelegationSetResponse =>
    __isa(o, "GetReusableDelegationSetResponse");
}

/**
 * <p>Request to get the number of traffic policy instances that are associated with the current AWS account.</p>
 */
export interface GetTrafficPolicyInstanceCountRequest {
  __type?: "GetTrafficPolicyInstanceCountRequest";
}

export namespace GetTrafficPolicyInstanceCountRequest {
  export const filterSensitiveLog = (
    obj: GetTrafficPolicyInstanceCountRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyInstanceCountRequest =>
    __isa(o, "GetTrafficPolicyInstanceCountRequest");
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceCountResponse {
  __type?: "GetTrafficPolicyInstanceCountResponse";
  /**
   * <p>The number of traffic policy instances that are associated with the current AWS account.</p>
   */
  TrafficPolicyInstanceCount: number | undefined;
}

export namespace GetTrafficPolicyInstanceCountResponse {
  export const filterSensitiveLog = (
    obj: GetTrafficPolicyInstanceCountResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyInstanceCountResponse =>
    __isa(o, "GetTrafficPolicyInstanceCountResponse");
}

/**
 * <p>Gets information about a specified traffic policy instance.</p>
 */
export interface GetTrafficPolicyInstanceRequest {
  __type?: "GetTrafficPolicyInstanceRequest";
  /**
   * <p>The ID of the traffic policy instance that you want to get information about.</p>
   */
  Id: string | undefined;
}

export namespace GetTrafficPolicyInstanceRequest {
  export const filterSensitiveLog = (
    obj: GetTrafficPolicyInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyInstanceRequest =>
    __isa(o, "GetTrafficPolicyInstanceRequest");
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceResponse {
  __type?: "GetTrafficPolicyInstanceResponse";
  /**
   * <p>A complex type that contains settings for the traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;
}

export namespace GetTrafficPolicyInstanceResponse {
  export const filterSensitiveLog = (
    obj: GetTrafficPolicyInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyInstanceResponse =>
    __isa(o, "GetTrafficPolicyInstanceResponse");
}

/**
 * <p>Gets information about a specific traffic policy version.</p>
 */
export interface GetTrafficPolicyRequest {
  __type?: "GetTrafficPolicyRequest";
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
  export const filterSensitiveLog = (obj: GetTrafficPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyRequest =>
    __isa(o, "GetTrafficPolicyRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface GetTrafficPolicyResponse {
  __type?: "GetTrafficPolicyResponse";
  /**
   * <p>A complex type that contains settings for the specified traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace GetTrafficPolicyResponse {
  export const filterSensitiveLog = (obj: GetTrafficPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTrafficPolicyResponse =>
    __isa(o, "GetTrafficPolicyResponse");
}

/**
 * <p>A complex type that contains information about one health check that is associated with the current AWS account.</p>
 */
export interface HealthCheck {
  __type?: "HealthCheck";
  /**
   * <p>A unique string that you specified when you created the health check.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
   */
  CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;

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
   * <p>The identifier that Amazon Route 53assigned to the health check when you created it. When you add or update a resource record set, you use
   * 			this value to specify which health check to use. The value can be up to 64 characters long. </p>
   */
  Id: string | undefined;

  /**
   * <p>If the health check was created by another service, the service that created the health check. When a health check is created
   * 			by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  LinkedService?: LinkedService;
}

export namespace HealthCheck {
  export const filterSensitiveLog = (obj: HealthCheck): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheck => __isa(o, "HealthCheck");
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
export interface HealthCheckAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "HealthCheckAlreadyExists";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HealthCheckAlreadyExists {
  export const filterSensitiveLog = (obj: HealthCheckAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckAlreadyExists =>
    __isa(o, "HealthCheckAlreadyExists");
}

/**
 * <p>A complex type that contains information about the health check.</p>
 */
export interface HealthCheckConfig {
  __type?: "HealthCheckConfig";
  /**
   * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
   * 			the specified health check is healthy.</p>
   */
  AlarmIdentifier?: AlarmIdentifier;

  /**
   * <p>(CALCULATED Health Checks Only) A complex type that contains one <code>ChildHealthCheck</code> element for each health check that
   * 			you want to associate with a <code>CALCULATED</code> health check.</p>
   */
  ChildHealthChecks?: string[];

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
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint
   * 			from unhealthy to healthy or vice versa. For more information, see
   * 			<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>
   */
  FailureThreshold?: number;

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
   * <p>Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it
   * 			otherwise would be considered healthy.</p>
   */
  Inverted?: boolean;

  /**
   * <p>Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint, and to
   * 			display CloudWatch latency graphs on the <b>Health Checks</b> page in the Route 53 console.</p>
   * 		       <important>
   * 			         <p>You can't change the value of <code>MeasureLatency</code> after you create a health check.</p>
   * 		       </important>
   */
  MeasureLatency?: boolean;

  /**
   * <p>The port on the endpoint on which you want Amazon Route 53 to perform health checks. Specify a value for <code>Port</code> only when you
   * 			specify a value for <code>IPAddress</code>.</p>
   */
  Port?: number;

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
   * <p>The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next
   * 			health check request. Each Route 53 health checker makes requests at this interval.</p>
   * 		       <important>
   * 			         <p>You can't change the value of <code>RequestInterval</code> after you create a health check.</p>
   * 		       </important>
   * 		       <p>If you don't specify a value for <code>RequestInterval</code>, the default value is <code>30</code> seconds.</p>
   */
  RequestInterval?: number;

  /**
   * <p>The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint
   * 			will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html.
   * 			You can also include query string parameters, for example, <code>/welcome.html?language=jp&login=y</code>.
   * 		</p>
   */
  ResourcePath?: string;

  /**
   * <p>If the value of Type is <code>HTTP_STR_MATCH</code> or <code>HTTP_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the
   * 			response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.</p>
   * 		       <p>Route 53 considers case when searching for <code>SearchString</code> in the response body. </p>
   */
  SearchString?: string;

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
   *          </ul>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Route 53
   * 			Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  Type: HealthCheckType | string | undefined;
}

export namespace HealthCheckConfig {
  export const filterSensitiveLog = (obj: HealthCheckConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckConfig =>
    __isa(o, "HealthCheckConfig");
}

/**
 * <p>This error code is not in use.</p>
 */
export interface HealthCheckInUse extends __SmithyException, $MetadataBearer {
  name: "HealthCheckInUse";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HealthCheckInUse {
  export const filterSensitiveLog = (obj: HealthCheckInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckInUse =>
    __isa(o, "HealthCheckInUse");
}

/**
 * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.</p>
 */
export interface HealthCheckObservation {
  __type?: "HealthCheckObservation";
  /**
   * <p>The IP address of the Amazon Route 53 health checker that provided the failure reason in <code>StatusReport</code>.</p>
   */
  IPAddress?: string;

  /**
   * <p>The region of the Amazon Route 53 health checker that provided the status in <code>StatusReport</code>.</p>
   */
  Region?: HealthCheckRegion | string;

  /**
   * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.</p>
   */
  StatusReport?: StatusReport;
}

export namespace HealthCheckObservation {
  export const filterSensitiveLog = (obj: HealthCheckObservation): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckObservation =>
    __isa(o, "HealthCheckObservation");
}

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
  TCP = "TCP"
}

/**
 * <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of <code>HealthCheckVersion</code>
 * 			in the health check.</p>
 */
export interface HealthCheckVersionMismatch
  extends __SmithyException,
    $MetadataBearer {
  name: "HealthCheckVersionMismatch";
  $fault: "client";
  message?: string;
}

export namespace HealthCheckVersionMismatch {
  export const filterSensitiveLog = (obj: HealthCheckVersionMismatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthCheckVersionMismatch =>
    __isa(o, "HealthCheckVersionMismatch");
}

/**
 * <p>A complex type that contains general information about the hosted zone.</p>
 */
export interface HostedZone {
  __type?: "HostedZone";
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
   * <p>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</p>
   */
  Id: string | undefined;

  /**
   * <p>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created
   * 			by another service, you can't edit or delete it using Route 53. </p>
   */
  LinkedService?: LinkedService;

  /**
   * <p>The name of the domain. For public hosted zones, this is the name that you have
   * 			registered with your DNS registrar.</p>
   * 		       <p>For information about how to specify characters other than <code>a-z</code>,
   * 			<code>0-9</code>, and <code>-</code> (hyphen) and how to specify internationalized domain names, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The number of resource record sets in the hosted zone.</p>
   */
  ResourceRecordSetCount?: number;
}

export namespace HostedZone {
  export const filterSensitiveLog = (obj: HostedZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZone => __isa(o, "HostedZone");
}

/**
 * <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created
 * 			with the specified <code>CallerReference</code>.</p>
 */
export interface HostedZoneAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "HostedZoneAlreadyExists";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HostedZoneAlreadyExists {
  export const filterSensitiveLog = (obj: HostedZoneAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneAlreadyExists =>
    __isa(o, "HostedZoneAlreadyExists");
}

/**
 * <p>A complex type that contains an optional comment about your hosted zone. If you don't
 * 			want to specify a comment, omit both the <code>HostedZoneConfig</code> and
 * 			<code>Comment</code> elements.</p>
 */
export interface HostedZoneConfig {
  __type?: "HostedZoneConfig";
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
  export const filterSensitiveLog = (obj: HostedZoneConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneConfig =>
    __isa(o, "HostedZoneConfig");
}

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface HostedZoneLimit {
  __type?: "HostedZoneLimit";
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
  export const filterSensitiveLog = (obj: HostedZoneLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneLimit =>
    __isa(o, "HostedZoneLimit");
}

export type HostedZoneLimitType =
  | "MAX_RRSETS_BY_ZONE"
  | "MAX_VPCS_ASSOCIATED_BY_ZONE";

/**
 * <p>The hosted zone contains resource records that are not SOA or NS records.</p>
 */
export interface HostedZoneNotEmpty extends __SmithyException, $MetadataBearer {
  name: "HostedZoneNotEmpty";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HostedZoneNotEmpty {
  export const filterSensitiveLog = (obj: HostedZoneNotEmpty): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneNotEmpty =>
    __isa(o, "HostedZoneNotEmpty");
}

/**
 * <p>The specified HostedZone can't be found.</p>
 */
export interface HostedZoneNotFound extends __SmithyException, $MetadataBearer {
  name: "HostedZoneNotFound";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HostedZoneNotFound {
  export const filterSensitiveLog = (obj: HostedZoneNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneNotFound =>
    __isa(o, "HostedZoneNotFound");
}

/**
 * <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 */
export interface HostedZoneNotPrivate
  extends __SmithyException,
    $MetadataBearer {
  name: "HostedZoneNotPrivate";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace HostedZoneNotPrivate {
  export const filterSensitiveLog = (obj: HostedZoneNotPrivate): any => ({
    ...obj
  });
  export const isa = (o: any): o is HostedZoneNotPrivate =>
    __isa(o, "HostedZoneNotPrivate");
}

/**
 * <p>The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.</p>
 */
export interface IncompatibleVersion
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatibleVersion";
  $fault: "client";
  message?: string;
}

export namespace IncompatibleVersion {
  export const filterSensitiveLog = (obj: IncompatibleVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncompatibleVersion =>
    __isa(o, "IncompatibleVersion");
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
 *          </ul>
 */
export interface InsufficientCloudWatchLogsResourcePolicy
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientCloudWatchLogsResourcePolicy";
  $fault: "client";
  message?: string;
}

export namespace InsufficientCloudWatchLogsResourcePolicy {
  export const filterSensitiveLog = (
    obj: InsufficientCloudWatchLogsResourcePolicy
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientCloudWatchLogsResourcePolicy =>
    __isa(o, "InsufficientCloudWatchLogsResourcePolicy");
}

export type InsufficientDataHealthStatus =
  | "Healthy"
  | "LastKnownStatus"
  | "Unhealthy";

/**
 * <p>Parameter name is invalid.</p>
 */
export interface InvalidArgument extends __SmithyException, $MetadataBearer {
  name: "InvalidArgument";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace InvalidArgument {
  export const filterSensitiveLog = (obj: InvalidArgument): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgument =>
    __isa(o, "InvalidArgument");
}

/**
 * <p>This exception contains a list of messages that might contain one or more error messages. Each error message indicates
 * 			one error in the change batch.</p>
 */
export interface InvalidChangeBatch extends __SmithyException, $MetadataBearer {
  name: "InvalidChangeBatch";
  $fault: "client";
  message?: string;
  /**
   * <p>Descriptive message for the error response.</p>
   */
  messages?: string[];
}

export namespace InvalidChangeBatch {
  export const filterSensitiveLog = (obj: InvalidChangeBatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidChangeBatch =>
    __isa(o, "InvalidChangeBatch");
}

/**
 * <p>The specified domain name is not valid.</p>
 */
export interface InvalidDomainName extends __SmithyException, $MetadataBearer {
  name: "InvalidDomainName";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace InvalidDomainName {
  export const filterSensitiveLog = (obj: InvalidDomainName): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDomainName =>
    __isa(o, "InvalidDomainName");
}

/**
 * <p>The input is not valid.</p>
 */
export interface InvalidInput extends __SmithyException, $MetadataBearer {
  name: "InvalidInput";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace InvalidInput {
  export const filterSensitiveLog = (obj: InvalidInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInput => __isa(o, "InvalidInput");
}

/**
 * <p>The value that you specified to get the second or subsequent page of results is invalid.</p>
 */
export interface InvalidPaginationToken
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPaginationToken";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationToken {
  export const filterSensitiveLog = (obj: InvalidPaginationToken): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPaginationToken =>
    __isa(o, "InvalidPaginationToken");
}

/**
 * <p>The format of the traffic policy document that you specified in the <code>Document</code> element is invalid.</p>
 */
export interface InvalidTrafficPolicyDocument
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTrafficPolicyDocument";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace InvalidTrafficPolicyDocument {
  export const filterSensitiveLog = (
    obj: InvalidTrafficPolicyDocument
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTrafficPolicyDocument =>
    __isa(o, "InvalidTrafficPolicyDocument");
}

/**
 * <p>The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.</p>
 */
export interface InvalidVPCId extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCId";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace InvalidVPCId {
  export const filterSensitiveLog = (obj: InvalidVPCId): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidVPCId => __isa(o, "InvalidVPCId");
}

/**
 * <p>The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with
 * 			the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.</p>
 */
export interface LastVPCAssociation extends __SmithyException, $MetadataBearer {
  name: "LastVPCAssociation";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace LastVPCAssociation {
  export const filterSensitiveLog = (obj: LastVPCAssociation): any => ({
    ...obj
  });
  export const isa = (o: any): o is LastVPCAssociation =>
    __isa(o, "LastVPCAssociation");
}

/**
 * <p>This operation can't be completed either because the current account has reached the limit on reusable delegation sets
 * 			that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone.
 * 			To get the current limit on the number of reusable delegation sets, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.
 * 			To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html">GetHostedZoneLimit</a>.
 * 			To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface LimitsExceeded extends __SmithyException, $MetadataBearer {
  name: "LimitsExceeded";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace LimitsExceeded {
  export const filterSensitiveLog = (obj: LimitsExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitsExceeded =>
    __isa(o, "LimitsExceeded");
}

/**
 * <p>If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that
 * 			describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
 */
export interface LinkedService {
  __type?: "LinkedService";
  /**
   * <p>If the health check or hosted zone was created by another service, an optional description that can be provided by the other service.
   * 			When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  Description?: string;

  /**
   * <p>If the health check or hosted zone was created by another service, the service that created the resource. When a resource is created
   * 			by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  ServicePrincipal?: string;
}

export namespace LinkedService {
  export const filterSensitiveLog = (obj: LinkedService): any => ({
    ...obj
  });
  export const isa = (o: any): o is LinkedService => __isa(o, "LinkedService");
}

/**
 * <p>A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets. </p>
 */
export interface ListGeoLocationsRequest {
  __type?: "ListGeoLocationsRequest";
  /**
   * <p>(Optional) The maximum number of geolocations to be included in the response body for this request. If more than <code>maxitems</code>
   * 			geolocations remain to be listed, then the value of the <code>IsTruncated</code> element in the response is <code>true</code>.</p>
   */
  MaxItems?: string;

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
   * 		       <p>Route 53 uses the two-letter country codes that are specified in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.</p>
   */
  StartCountryCode?: string;

  /**
   * <p>The code for the subdivision (for example, state or province) with which you want to start listing locations that Amazon Route 53 supports
   * 			for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if
   * 			<code>NextSubdivisionCode</code> from the previous response has a value, enter that value in <code>startsubdivisioncode</code>
   * 			to return the next page of results.</p>
   * 		       <p>To list subdivisions of a country, you must include both <code>startcountrycode</code> and <code>startsubdivisioncode</code>.</p>
   */
  StartSubdivisionCode?: string;
}

export namespace ListGeoLocationsRequest {
  export const filterSensitiveLog = (obj: ListGeoLocationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGeoLocationsRequest =>
    __isa(o, "ListGeoLocationsRequest");
}

/**
 * <p>A complex type containing the response information for the request.</p>
 */
export interface ListGeoLocationsResponse {
  __type?: "ListGeoLocationsResponse";
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
   * <p>The value that you specified for <code>MaxItems</code> in the request.</p>
   */
  MaxItems: string | undefined;

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
}

export namespace ListGeoLocationsResponse {
  export const filterSensitiveLog = (obj: ListGeoLocationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGeoLocationsResponse =>
    __isa(o, "ListGeoLocationsResponse");
}

/**
 * <p>A request to retrieve a list of the health checks that are associated with the current AWS account.</p>
 */
export interface ListHealthChecksRequest {
  __type?: "ListHealthChecksRequest";
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
  MaxItems?: string;
}

export namespace ListHealthChecksRequest {
  export const filterSensitiveLog = (obj: ListHealthChecksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHealthChecksRequest =>
    __isa(o, "ListHealthChecksRequest");
}

/**
 * <p>A complex type that contains the response to a <code>ListHealthChecks</code> request.</p>
 */
export interface ListHealthChecksResponse {
  __type?: "ListHealthChecksResponse";
  /**
   * <p>A complex type that contains one <code>HealthCheck</code> element for each health check that is associated with the current
   * 			AWS account.</p>
   */
  HealthChecks: HealthCheck[] | undefined;

  /**
   * <p>A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of
   * 			health checks by submitting another <code>ListHealthChecks</code> request and specifying the value of <code>NextMarker</code> in the
   * 			<code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListHealthChecks</code>, <code>Marker</code> is the value that you specified for the
   * 			<code>marker</code> parameter in the previous request.</p>
   */
  Marker: string | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHealthChecks</code> that produced the
   * 			current response.</p>
   */
  MaxItems: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first health check that Amazon Route 53
   * 			returns if you submit another <code>ListHealthChecks</code> request and specify the value of <code>NextMarker</code> in
   * 			the <code>marker</code> parameter.</p>
   */
  NextMarker?: string;
}

export namespace ListHealthChecksResponse {
  export const filterSensitiveLog = (obj: ListHealthChecksResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHealthChecksResponse =>
    __isa(o, "ListHealthChecksResponse");
}

/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the current AWS account in ASCII order by domain
 * 			name. </p>
 */
export interface ListHostedZonesByNameRequest {
  __type?: "ListHostedZonesByNameRequest";
  /**
   * <p>(Optional) For your first request to <code>ListHostedZonesByName</code>, include the <code>dnsname</code> parameter only if you want to
   * 			specify the name of the first hosted zone in the response. If you don't include the <code>dnsname</code> parameter, Amazon Route 53 returns all of
   * 			the hosted zones that were created by the current AWS account, in ASCII order. For subsequent requests, include both <code>dnsname</code> and
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
  MaxItems?: string;
}

export namespace ListHostedZonesByNameRequest {
  export const filterSensitiveLog = (
    obj: ListHostedZonesByNameRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHostedZonesByNameRequest =>
    __isa(o, "ListHostedZonesByNameRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListHostedZonesByNameResponse {
  __type?: "ListHostedZonesByNameResponse";
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
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZones: HostedZone[] | undefined;

  /**
   * <p>A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of
   * 			<code>maxitems</code> hosted zones by calling <code>ListHostedZonesByName</code> again and specifying the values of <code>NextDNSName</code> and
   * 			<code>NextHostedZoneId</code> elements in the <code>dnsname</code> and <code>hostedzoneid</code> parameters.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZonesByName</code> that produced the
   * 			current response.</p>
   */
  MaxItems: string | undefined;

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
}

export namespace ListHostedZonesByNameResponse {
  export const filterSensitiveLog = (
    obj: ListHostedZonesByNameResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHostedZonesByNameResponse =>
    __isa(o, "ListHostedZonesByNameResponse");
}

/**
 * <p>A request to retrieve a list of the public and private hosted zones that are associated with the current AWS account.</p>
 */
export interface ListHostedZonesRequest {
  __type?: "ListHostedZonesRequest";
  /**
   * <p>If you're using reusable delegation sets and you want to list all of the hosted zones that are associated
   * 			with a reusable delegation set, specify the ID of that reusable delegation set. </p>
   */
  DelegationSetId?: string;

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
  MaxItems?: string;
}

export namespace ListHostedZonesRequest {
  export const filterSensitiveLog = (obj: ListHostedZonesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHostedZonesRequest =>
    __isa(o, "ListHostedZonesRequest");
}

export interface ListHostedZonesResponse {
  __type?: "ListHostedZonesResponse";
  /**
   * <p>A complex type that contains general information about the hosted zone.</p>
   */
  HostedZones: HostedZone[] | undefined;

  /**
   * <p>A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get more hosted zones
   * 			by submitting another <code>ListHostedZones</code> request and specifying the value of <code>NextMarker</code> in the
   * 			<code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListHostedZones</code>, <code>Marker</code> is the value that you specified for the
   * 			<code>marker</code> parameter in the request that produced the current response.</p>
   */
  Marker: string | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListHostedZones</code> that
   * 			produced the current response.</p>
   */
  MaxItems: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the first hosted zone in the next group
   * 			of hosted zones. Submit another <code>ListHostedZones</code> request, and specify the value of <code>NextMarker</code> from the response in the
   * 			<code>marker</code> parameter.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListHostedZonesResponse {
  export const filterSensitiveLog = (obj: ListHostedZonesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHostedZonesResponse =>
    __isa(o, "ListHostedZonesResponse");
}

export interface ListQueryLoggingConfigsRequest {
  __type?: "ListQueryLoggingConfigsRequest";
  /**
   * <p>(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in
   * 			<code>HostedZoneId</code>. </p>
   * 		       <p>If you don't specify a hosted zone ID, <code>ListQueryLoggingConfigs</code> returns all of the configurations
   * 			that are associated with the current AWS account.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request.
   * 			If the current AWS account has more than <code>MaxResults</code> configurations, use the value of
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html#API_ListQueryLoggingConfigs_RequestSyntax">NextToken</a>
   * 			in the response to get the next page of results.</p>
   * 		       <p>If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configurations.</p>
   */
  MaxResults?: string;

  /**
   * <p>(Optional) If the current AWS account has more than <code>MaxResults</code> query logging configurations, use <code>NextToken</code>
   * 			to get the second and subsequent pages of results.</p>
   * 		       <p>For the first <code>ListQueryLoggingConfigs</code> request, omit this value.</p>
   * 		       <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value
   * 			for <code>NextToken</code> in the request.</p>
   */
  NextToken?: string;
}

export namespace ListQueryLoggingConfigsRequest {
  export const filterSensitiveLog = (
    obj: ListQueryLoggingConfigsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueryLoggingConfigsRequest =>
    __isa(o, "ListQueryLoggingConfigsRequest");
}

export interface ListQueryLoggingConfigsResponse {
  __type?: "ListQueryLoggingConfigsResponse";
  /**
   * <p>If a response includes the last of the query logging configurations that are associated with the current AWS account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   * 		       <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html">ListQueryLoggingConfigs</a>
   * 			request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array that contains one
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_QueryLoggingConfig.html">QueryLoggingConfig</a> element
   * 			for each configuration for DNS query logging that is associated with the current AWS account.</p>
   */
  QueryLoggingConfigs: QueryLoggingConfig[] | undefined;
}

export namespace ListQueryLoggingConfigsResponse {
  export const filterSensitiveLog = (
    obj: ListQueryLoggingConfigsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueryLoggingConfigsResponse =>
    __isa(o, "ListQueryLoggingConfigsResponse");
}

/**
 * <p>A request for the resource record sets that are associated with a specified hosted zone.</p>
 */
export interface ListResourceRecordSetsRequest {
  __type?: "ListResourceRecordSetsRequest";
  /**
   * <p>The ID of the hosted zone that contains the resource record sets that you want to list.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>(Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes
   * 			more than <code>maxitems</code> resource record sets, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of the <code>NextRecordName</code> and <code>NextRecordType</code> elements in the response identify the first
   * 			resource record set in the next group of <code>maxitems</code> resource record sets.</p>
   */
  MaxItems?: string;

  /**
   * <p>
   *             <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type,
   * 			specify the value of <code>NextRecordIdentifier</code> from the previous response to get the next resource record set that has the current
   * 			DNS name and type.</p>
   */
  StartRecordIdentifier?: string;

  /**
   * <p>The first name in the lexicographic ordering of resource record sets that you want to list.</p>
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
   *                   <b>Amazon S3 bucket</b>: A</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon VPC interface VPC endpoint</b>: A</p>
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
}

export namespace ListResourceRecordSetsRequest {
  export const filterSensitiveLog = (
    obj: ListResourceRecordSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceRecordSetsRequest =>
    __isa(o, "ListResourceRecordSetsRequest");
}

/**
 * <p>A complex type that contains list information for the resource record set.</p>
 */
export interface ListResourceRecordSetsResponse {
  __type?: "ListResourceRecordSetsResponse";
  /**
   * <p>A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a
   * 			follow-up pagination request by using the <code>NextRecordName</code> element.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The maximum number of records you requested.</p>
   */
  MaxItems: string | undefined;

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
   * <p>Information about multiple resource record sets.</p>
   */
  ResourceRecordSets: ResourceRecordSet[] | undefined;
}

export namespace ListResourceRecordSetsResponse {
  export const filterSensitiveLog = (
    obj: ListResourceRecordSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourceRecordSetsResponse =>
    __isa(o, "ListResourceRecordSetsResponse");
}

/**
 * <p>A request to get a list of the reusable delegation sets that are associated with the current AWS account.</p>
 */
export interface ListReusableDelegationSetsRequest {
  __type?: "ListReusableDelegationSetsRequest";
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
  MaxItems?: string;
}

export namespace ListReusableDelegationSetsRequest {
  export const filterSensitiveLog = (
    obj: ListReusableDelegationSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReusableDelegationSetsRequest =>
    __isa(o, "ListReusableDelegationSetsRequest");
}

/**
 * <p>A complex type that contains information about the reusable delegation sets that are associated with the current AWS account.</p>
 */
export interface ListReusableDelegationSetsResponse {
  __type?: "ListReusableDelegationSetsResponse";
  /**
   * <p>A complex type that contains one <code>DelegationSet</code> element for each reusable delegation set that was created
   * 			by the current AWS account.</p>
   */
  DelegationSets: DelegationSet[] | undefined;

  /**
   * <p>A flag that indicates whether there are more reusable delegation sets to be listed.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>For the second and subsequent calls to <code>ListReusableDelegationSets</code>, <code>Marker</code> is the value that you specified
   * 			for the <code>marker</code> parameter in the request that produced the current response.</p>
   */
  Marker: string | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the call to <code>ListReusableDelegationSets</code> that
   * 			produced the current response.</p>
   */
  MaxItems: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>NextMarker</code> identifies the next reusable delegation set
   * 			that Amazon Route 53 will return if you submit another <code>ListReusableDelegationSets</code> request and specify the value of <code>NextMarker</code>
   * 			in the <code>marker</code> parameter.</p>
   */
  NextMarker?: string;
}

export namespace ListReusableDelegationSetsResponse {
  export const filterSensitiveLog = (
    obj: ListReusableDelegationSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReusableDelegationSetsResponse =>
    __isa(o, "ListReusableDelegationSetsResponse");
}

/**
 * <p>A complex type containing information about a request for a list of the tags that are associated with an individual resource.</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ID of the resource for which you want to retrieve tags.</p>
   */
  ResourceId: string | undefined;

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
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

/**
 * <p>A complex type that contains information about the health checks or hosted zones for which you want to list tags.</p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A <code>ResourceTagSet</code> containing tags associated with the specified resource.</p>
   */
  ResourceTagSet: ResourceTagSet | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>A complex type that contains information about the health checks or hosted zones for which you want to list tags.</p>
 */
export interface ListTagsForResourcesRequest {
  __type?: "ListTagsForResourcesRequest";
  /**
   * <p>A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.</p>
   */
  ResourceIds: string[] | undefined;

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
}

export namespace ListTagsForResourcesRequest {
  export const filterSensitiveLog = (
    obj: ListTagsForResourcesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourcesRequest =>
    __isa(o, "ListTagsForResourcesRequest");
}

/**
 * <p>A complex type containing tags for the specified resources.</p>
 */
export interface ListTagsForResourcesResponse {
  __type?: "ListTagsForResourcesResponse";
  /**
   * <p>A list of <code>ResourceTagSet</code>s containing tags associated with the specified resources.</p>
   */
  ResourceTagSets: ResourceTagSet[] | undefined;
}

export namespace ListTagsForResourcesResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourcesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourcesResponse =>
    __isa(o, "ListTagsForResourcesResponse");
}

/**
 * <p>A complex type that contains the information about the request to list the traffic policies that are associated
 * 			with the current AWS account.</p>
 */
export interface ListTrafficPoliciesRequest {
  __type?: "ListTrafficPoliciesRequest";
  /**
   * <p>(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than
   * 			<code>MaxItems</code> traffic policies, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the
   * 			value of <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy that Route 53 will return if you submit
   * 			another request.</p>
   */
  MaxItems?: string;

  /**
   * <p>(Conditional) For your first request to <code>ListTrafficPolicies</code>, don't include the <code>TrafficPolicyIdMarker</code> parameter.</p>
   * 		       <p>If you have more traffic policies than the value of <code>MaxItems</code>, <code>ListTrafficPolicies</code> returns only the first
   * 			<code>MaxItems</code> traffic policies. To get the next group of policies, submit another request to <code>ListTrafficPolicies</code>.
   * 			For the value of <code>TrafficPolicyIdMarker</code>, specify the value of <code>TrafficPolicyIdMarker</code> that was returned in the
   * 			previous response.</p>
   */
  TrafficPolicyIdMarker?: string;
}

export namespace ListTrafficPoliciesRequest {
  export const filterSensitiveLog = (obj: ListTrafficPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPoliciesRequest =>
    __isa(o, "ListTrafficPoliciesRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPoliciesResponse {
  __type?: "ListTrafficPoliciesResponse";
  /**
   * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of
   * 			traffic policies by submitting another <code>ListTrafficPolicies</code> request and specifying the value of <code>TrafficPolicyIdMarker</code>
   * 			in the <code>TrafficPolicyIdMarker</code> request parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the <code>ListTrafficPolicies</code> request that produced
   * 			the current response.</p>
   */
  MaxItems: string | undefined;

  /**
   * <p>If the value of <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy
   * 			in the next group of <code>MaxItems</code> traffic policies.</p>
   */
  TrafficPolicyIdMarker: string | undefined;

  /**
   * <p>A list that contains one <code>TrafficPolicySummary</code> element for each traffic policy that was created by the current AWS account.</p>
   */
  TrafficPolicySummaries: TrafficPolicySummary[] | undefined;
}

export namespace ListTrafficPoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListTrafficPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPoliciesResponse =>
    __isa(o, "ListTrafficPoliciesResponse");
}

/**
 * <p>A request for the traffic policy instances that you created in a specified hosted zone.</p>
 */
export interface ListTrafficPolicyInstancesByHostedZoneRequest {
  __type?: "ListTrafficPolicyInstancesByHostedZoneRequest";
  /**
   * <p>The ID of the hosted zone that you want to list traffic policy instances for.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The maximum number of traffic policy instances to be included in the response body for this request. If you have more than
   * 			<code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   */
  MaxItems?: string;

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
}

export namespace ListTrafficPolicyInstancesByHostedZoneRequest {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesByHostedZoneRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListTrafficPolicyInstancesByHostedZoneRequest =>
    __isa(o, "ListTrafficPolicyInstancesByHostedZoneRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesByHostedZoneResponse {
  __type?: "ListTrafficPolicyInstancesByHostedZoneResponse";
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
  MaxItems: string | undefined;

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
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request. </p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;
}

export namespace ListTrafficPolicyInstancesByHostedZoneResponse {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesByHostedZoneResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListTrafficPolicyInstancesByHostedZoneResponse =>
    __isa(o, "ListTrafficPolicyInstancesByHostedZoneResponse");
}

/**
 * <p>A complex type that contains the information about the request to list your traffic policy instances.</p>
 */
export interface ListTrafficPolicyInstancesByPolicyRequest {
  __type?: "ListTrafficPolicyInstancesByPolicyRequest";
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request. </p>
   * 		       <p>For the value of <code>hostedzoneid</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response,
   * 			which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>The maximum number of traffic policy instances to be included in the response body for this request. If you have more than
   * 			<code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>,
   * 			and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code>
   * 			represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p>
   */
  MaxItems?: string;

  /**
   * <p>The ID of the traffic policy for which you want to list traffic policy instances.</p>
   */
  TrafficPolicyId: string | undefined;

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
   * <p>The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the
   * 			traffic policy that is specified by <code>TrafficPolicyId</code>.</p>
   */
  TrafficPolicyVersion: number | undefined;
}

export namespace ListTrafficPolicyInstancesByPolicyRequest {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesByPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPolicyInstancesByPolicyRequest =>
    __isa(o, "ListTrafficPolicyInstancesByPolicyRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesByPolicyResponse {
  __type?: "ListTrafficPolicyInstancesByPolicyResponse";
  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first
   * 			traffic policy instance in the next group of traffic policy instances.</p>
   */
  HostedZoneIdMarker?: string;

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
  MaxItems: string | undefined;

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
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request.</p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;
}

export namespace ListTrafficPolicyInstancesByPolicyResponse {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesByPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListTrafficPolicyInstancesByPolicyResponse =>
    __isa(o, "ListTrafficPolicyInstancesByPolicyResponse");
}

/**
 * <p>A request to get information about the traffic policy instances that you created by using the current AWS account.</p>
 */
export interface ListTrafficPolicyInstancesRequest {
  __type?: "ListTrafficPolicyInstancesRequest";
  /**
   * <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances.
   * 			To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>HostedZoneId</code>,
   * 			specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance
   * 			in the next group of traffic policy instances.</p>
   * 		       <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a <code>ListTrafficPolicyInstances</code> request.
   * 			If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is
   * 			<code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and
   * 			<code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance in the next group of <code>MaxItems</code>
   * 			traffic policy instances.</p>
   */
  MaxItems?: string;

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
}

export namespace ListTrafficPolicyInstancesRequest {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPolicyInstancesRequest =>
    __isa(o, "ListTrafficPolicyInstancesRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesResponse {
  __type?: "ListTrafficPolicyInstancesResponse";
  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first
   * 			traffic policy instance that Route 53 will return if you submit another <code>ListTrafficPolicyInstances</code> request. </p>
   */
  HostedZoneIdMarker?: string;

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
  MaxItems: string | undefined;

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
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements
   * 			in the request.</p>
   */
  TrafficPolicyInstances: TrafficPolicyInstance[] | undefined;
}

export namespace ListTrafficPolicyInstancesResponse {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyInstancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPolicyInstancesResponse =>
    __isa(o, "ListTrafficPolicyInstancesResponse");
}

/**
 * <p>A complex type that contains the information about the request to list your traffic
 * 			policies.</p>
 */
export interface ListTrafficPolicyVersionsRequest {
  __type?: "ListTrafficPolicyVersionsRequest";
  /**
   * <p>Specify the value of <code>Id</code> of the traffic policy for which you want to list all versions.</p>
   */
  Id: string | undefined;

  /**
   * <p>The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified
   * 			traffic policy has more than <code>MaxItems</code> versions, the value of <code>IsTruncated</code> in the response is <code>true</code>,
   * 			and the value of the <code>TrafficPolicyVersionMarker</code> element is the ID of the first version that Route 53 will return if you submit
   * 			another request.</p>
   */
  MaxItems?: string;

  /**
   * <p>For your first request to <code>ListTrafficPolicyVersions</code>, don't include the <code>TrafficPolicyVersionMarker</code> parameter.</p>
   * 		       <p>If you have more traffic policy versions than the value of <code>MaxItems</code>, <code>ListTrafficPolicyVersions</code> returns only
   * 			the first group of <code>MaxItems</code> versions. To get more traffic policy versions, submit another <code>ListTrafficPolicyVersions</code>
   * 			request. For the value of <code>TrafficPolicyVersionMarker</code>, specify the value of <code>TrafficPolicyVersionMarker</code> in the previous
   * 			response.</p>
   */
  TrafficPolicyVersionMarker?: string;
}

export namespace ListTrafficPolicyVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPolicyVersionsRequest =>
    __isa(o, "ListTrafficPolicyVersionsRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyVersionsResponse {
  __type?: "ListTrafficPolicyVersionsResponse";
  /**
   * <p>A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of
   * 			traffic policies by submitting another <code>ListTrafficPolicyVersions</code> request and specifying the value of <code>NextMarker</code>
   * 			in the <code>marker</code> parameter.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The value that you specified for the <code>maxitems</code> parameter in the <code>ListTrafficPolicyVersions</code> request that produced
   * 			the current response.</p>
   */
  MaxItems: string | undefined;

  /**
   * <p>A list that contains one <code>TrafficPolicy</code> element for each traffic policy
   * 			version that is associated with the specified traffic policy.</p>
   */
  TrafficPolicies: TrafficPolicy[] | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, the value of <code>TrafficPolicyVersionMarker</code> identifies the first traffic policy
   * 			that Amazon Route 53 will return if you submit another request. Call <code>ListTrafficPolicyVersions</code> again and specify the value of
   * 			<code>TrafficPolicyVersionMarker</code> in the <code>TrafficPolicyVersionMarker</code> request parameter.</p>
   * 		       <p>This element is present only if <code>IsTruncated</code> is <code>true</code>.</p>
   */
  TrafficPolicyVersionMarker: string | undefined;
}

export namespace ListTrafficPolicyVersionsResponse {
  export const filterSensitiveLog = (
    obj: ListTrafficPolicyVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrafficPolicyVersionsResponse =>
    __isa(o, "ListTrafficPolicyVersionsResponse");
}

/**
 * <p>A complex type that contains information about that can be associated with your hosted zone.</p>
 */
export interface ListVPCAssociationAuthorizationsRequest {
  __type?: "ListVPCAssociationAuthorizationsRequest";
  /**
   * <p>The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>
   *             <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return.
   * 			If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.</p>
   */
  MaxResults?: string;

  /**
   * <p>
   *             <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs
   * 			that can be associated with the specified hosted zone. To get the next page of results, submit another request,
   * 			and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter
   * 			in another <code>ListVPCAssociationAuthorizations</code> request.</p>
   */
  NextToken?: string;
}

export namespace ListVPCAssociationAuthorizationsRequest {
  export const filterSensitiveLog = (
    obj: ListVPCAssociationAuthorizationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVPCAssociationAuthorizationsRequest =>
    __isa(o, "ListVPCAssociationAuthorizationsRequest");
}

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListVPCAssociationAuthorizationsResponse {
  __type?: "ListVPCAssociationAuthorizationsResponse";
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
  export const filterSensitiveLog = (
    obj: ListVPCAssociationAuthorizationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVPCAssociationAuthorizationsResponse =>
    __isa(o, "ListVPCAssociationAuthorizationsResponse");
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
  export const filterSensitiveLog = (obj: NoSuchChange): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchChange => __isa(o, "NoSuchChange");
}

/**
 * <p>There is no CloudWatch Logs log group with the specified ARN.</p>
 */
export interface NoSuchCloudWatchLogsLogGroup
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchCloudWatchLogsLogGroup";
  $fault: "client";
  message?: string;
}

export namespace NoSuchCloudWatchLogsLogGroup {
  export const filterSensitiveLog = (
    obj: NoSuchCloudWatchLogsLogGroup
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchCloudWatchLogsLogGroup =>
    __isa(o, "NoSuchCloudWatchLogsLogGroup");
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 */
export interface NoSuchDelegationSet
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchDelegationSet";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchDelegationSet {
  export const filterSensitiveLog = (obj: NoSuchDelegationSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchDelegationSet =>
    __isa(o, "NoSuchDelegationSet");
}

/**
 * <p>Amazon Route 53 doesn't support the specified geographic location.</p>
 */
export interface NoSuchGeoLocation extends __SmithyException, $MetadataBearer {
  name: "NoSuchGeoLocation";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchGeoLocation {
  export const filterSensitiveLog = (obj: NoSuchGeoLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchGeoLocation =>
    __isa(o, "NoSuchGeoLocation");
}

/**
 * <p>No health check exists with the specified ID.</p>
 */
export interface NoSuchHealthCheck extends __SmithyException, $MetadataBearer {
  name: "NoSuchHealthCheck";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchHealthCheck {
  export const filterSensitiveLog = (obj: NoSuchHealthCheck): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchHealthCheck =>
    __isa(o, "NoSuchHealthCheck");
}

/**
 * <p>No hosted zone exists with the ID that you specified.</p>
 */
export interface NoSuchHostedZone extends __SmithyException, $MetadataBearer {
  name: "NoSuchHostedZone";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchHostedZone {
  export const filterSensitiveLog = (obj: NoSuchHostedZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchHostedZone =>
    __isa(o, "NoSuchHostedZone");
}

/**
 * <p>There is no DNS query logging configuration with the specified ID.</p>
 */
export interface NoSuchQueryLoggingConfig
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchQueryLoggingConfig";
  $fault: "client";
  message?: string;
}

export namespace NoSuchQueryLoggingConfig {
  export const filterSensitiveLog = (obj: NoSuchQueryLoggingConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchQueryLoggingConfig =>
    __isa(o, "NoSuchQueryLoggingConfig");
}

/**
 * <p>No traffic policy exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicy
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchTrafficPolicy";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchTrafficPolicy {
  export const filterSensitiveLog = (obj: NoSuchTrafficPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchTrafficPolicy =>
    __isa(o, "NoSuchTrafficPolicy");
}

/**
 * <p>No traffic policy instance exists with the specified ID.</p>
 */
export interface NoSuchTrafficPolicyInstance
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchTrafficPolicyInstance";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NoSuchTrafficPolicyInstance {
  export const filterSensitiveLog = (
    obj: NoSuchTrafficPolicyInstance
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchTrafficPolicyInstance =>
    __isa(o, "NoSuchTrafficPolicyInstance");
}

/**
 * <p>Associating the specified VPC with the specified hosted zone has not been authorized.</p>
 */
export interface NotAuthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotAuthorizedException =>
    __isa(o, "NotAuthorizedException");
}

/**
 * <p>If Amazon Route 53 can't process a request before the next request arrives, it will reject
 * 			subsequent requests for the same hosted zone and return an <code>HTTP 400 error</code>
 * 			(<code>Bad request</code>). If Route 53 returns this error repeatedly for the same request, we
 * 			recommend that you wait, in intervals of increasing duration, before you try the request
 * 			again.</p>
 */
export interface PriorRequestNotComplete
  extends __SmithyException,
    $MetadataBearer {
  name: "PriorRequestNotComplete";
  $fault: "client";
  message?: string;
}

export namespace PriorRequestNotComplete {
  export const filterSensitiveLog = (obj: PriorRequestNotComplete): any => ({
    ...obj
  });
  export const isa = (o: any): o is PriorRequestNotComplete =>
    __isa(o, "PriorRequestNotComplete");
}

/**
 * <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a
 * 			VPC with a public hosted zone.</p>
 */
export interface PublicZoneVPCAssociation
  extends __SmithyException,
    $MetadataBearer {
  name: "PublicZoneVPCAssociation";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace PublicZoneVPCAssociation {
  export const filterSensitiveLog = (obj: PublicZoneVPCAssociation): any => ({
    ...obj
  });
  export const isa = (o: any): o is PublicZoneVPCAssociation =>
    __isa(o, "PublicZoneVPCAssociation");
}

/**
 * <p>A complex type that contains information about a configuration for DNS query logging.</p>
 */
export interface QueryLoggingConfig {
  __type?: "QueryLoggingConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.</p>
   */
  CloudWatchLogsLogGroupArn: string | undefined;

  /**
   * <p>The ID of the hosted zone that CloudWatch Logs is logging queries for. </p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The ID for a configuration for DNS query logging.</p>
   */
  Id: string | undefined;
}

export namespace QueryLoggingConfig {
  export const filterSensitiveLog = (obj: QueryLoggingConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryLoggingConfig =>
    __isa(o, "QueryLoggingConfig");
}

/**
 * <p>You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists
 * 			for this hosted zone.</p>
 */
export interface QueryLoggingConfigAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "QueryLoggingConfigAlreadyExists";
  $fault: "client";
  message?: string;
}

export namespace QueryLoggingConfigAlreadyExists {
  export const filterSensitiveLog = (
    obj: QueryLoggingConfigAlreadyExists
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryLoggingConfigAlreadyExists =>
    __isa(o, "QueryLoggingConfigAlreadyExists");
}

export type ResettableElementName =
  | "ChildHealthChecks"
  | "FullyQualifiedDomainName"
  | "Regions"
  | "ResourcePath";

/**
 * <p>Information specific to the resource record.</p>
 * 		       <note>
 *             <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p>
 *          </note>
 */
export interface ResourceRecord {
  __type?: "ResourceRecord";
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
  export const filterSensitiveLog = (obj: ResourceRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceRecord =>
    __isa(o, "ResourceRecord");
}

/**
 * <p>Information about the resource record set to create or delete.</p>
 */
export interface ResourceRecordSet {
  __type?: "ResourceRecordSet";
  /**
   * <p>
   *             <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or an
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
   * 					<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a> in the
   * 					<i>Amazon Route 53 Developer Guide</i>.</p>
   * 			         </li>
   *          </ul>
   */
  AliasTarget?: AliasTarget;

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
   *                   <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  Failover?: ResourceRecordSetFailover | string;

  /**
   * <p>
   *             <i>Geolocation resource record sets only:</i> A complex type that lets you control how Amazon Route 53 responds to DNS queries
   * 			based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address
   * 			of <code>192.0.2.111</code>, create a resource record set with a <code>Type</code> of <code>A</code> and a <code>ContinentCode</code> of
   * 			<code>AF</code>.</p>
   * 		       <note>
   * 			         <p>Creating geolocation and geolocation alias resource record sets in private hosted zones is not supported.</p>
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
   * 				that it can't identify. We recommend that you create a resource record set for which the value of <code>CountryCode</code> is <code>*</code>,
   * 				which handles both queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses
   * 				that aren't mapped to a location. If you don't create a <code>*</code> resource record set, Route 53 returns a "no answer" response for queries
   * 				from those locations.</p>
   * 		       </important>
   * 		       <p>You can't create non-geolocation resource record sets that have the same values for the <code>Name</code> and <code>Type</code> elements
   * 			as geolocation resource record sets.</p>
   */
  GeoLocation?: GeoLocation;

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
   *                   <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html">Route 53 Health Checks and DNS Failover</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>
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
   * 			and how to specify internationalized domain names, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in
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
   * <p>
   *             <i>Latency-based resource record sets only:</i> The Amazon EC2 Region where you created the resource that this
   * 			resource record set refers to. The resource typically is an AWS resource, such as an EC2 instance or an ELB load balancer, and is
   * 			referred to by an IP address or a DNS domain name, depending on the record type.</p>
   * 		       <note>
   * 			         <p>Creating latency and latency alias resource record sets in private hosted zones is not supported.</p>
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
   * <p>Information about the resource records to act upon.</p>
   * 		       <note>
   *             <p>If you're creating an alias resource record set, omit <code>ResourceRecords</code>.</p>
   *          </note>
   */
  ResourceRecords?: ResourceRecord[];

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
   * <p>When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. <code>TrafficPolicyInstanceId</code> is the ID
   * 			of the traffic policy instance that Route 53 created this resource record set for.</p>
   * 		       <important>
   *             <p>To delete the resource record set that is associated with a traffic policy instance, use <code>DeleteTrafficPolicyInstance</code>.
   * 			Route 53 will delete the resource record set automatically. If you delete the resource record set by using <code>ChangeResourceRecordSets</code>,
   * 			Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use. </p>
   * 		       </important>
   */
  TrafficPolicyInstanceId?: string;

  /**
   * <p>The DNS record type. For information about different record types and how data is encoded for them, see
   * 			<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html">Supported DNS Resource Record Types</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> |
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
   *                   <b>AWS Elastic Beanstalk environment that has a regionalized subdomain</b>: <code>A</code>
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
   * 					<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html">Options for Configuring Route 53 Active-Active and Active-Passive Failover</a>
   * 					in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 			         </li>
   *          </ul>
   */
  Weight?: number;
}

export namespace ResourceRecordSet {
  export const filterSensitiveLog = (obj: ResourceRecordSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceRecordSet =>
    __isa(o, "ResourceRecordSet");
}

export type ResourceRecordSetFailover = "PRIMARY" | "SECONDARY";

export type ResourceRecordSetRegion =
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
 * <p>A complex type containing a resource and its associated tags.</p>
 */
export interface ResourceTagSet {
  __type?: "ResourceTagSet";
  /**
   * <p>The ID for the specified resource.</p>
   */
  ResourceId?: string;

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
   * <p>The tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ResourceTagSet {
  export const filterSensitiveLog = (obj: ResourceTagSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTagSet =>
    __isa(o, "ResourceTagSet");
}

/**
 * <p>A complex type that contains the type of limit that you specified in the request and the current value for that limit.</p>
 */
export interface ReusableDelegationSetLimit {
  __type?: "ReusableDelegationSetLimit";
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
  export const filterSensitiveLog = (obj: ReusableDelegationSetLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReusableDelegationSetLimit =>
    __isa(o, "ReusableDelegationSetLimit");
}

export type ReusableDelegationSetLimitType = "MAX_ZONES_BY_REUSABLE_DELEGATION_SET";

export type RRType =
  | "A"
  | "AAAA"
  | "CAA"
  | "CNAME"
  | "MX"
  | "NAPTR"
  | "NS"
  | "PTR"
  | "SOA"
  | "SPF"
  | "SRV"
  | "TXT";

export type Statistic =
  | "Average"
  | "Maximum"
  | "Minimum"
  | "SampleCount"
  | "Sum";

/**
 * <p>A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.</p>
 */
export interface StatusReport {
  __type?: "StatusReport";
  /**
   * <p>The date and time that the health checker performed the health check in
   * 			<a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC).
   * 			For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
   */
  CheckedTime?: Date;

  /**
   * <p>A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.</p>
   */
  Status?: string;
}

export namespace StatusReport {
  export const filterSensitiveLog = (obj: StatusReport): any => ({
    ...obj
  });
  export const isa = (o: any): o is StatusReport => __isa(o, "StatusReport");
}

/**
 * <p>A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export type TagResourceType = "healthcheck" | "hostedzone";

/**
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
 * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 */
export interface TestDNSAnswerRequest {
  __type?: "TestDNSAnswerRequest";
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
   * 			If you omit this value, <code>TestDnsAnswer</code> uses the IP address of a DNS resolver in the AWS US East (N. Virginia) Region
   * 			(<code>us-east-1</code>).</p>
   */
  ResolverIP?: string;
}

export namespace TestDNSAnswerRequest {
  export const filterSensitiveLog = (obj: TestDNSAnswerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestDNSAnswerRequest =>
    __isa(o, "TestDNSAnswerRequest");
}

/**
 * <p>A complex type that contains the response to a <code>TestDNSAnswer</code> request. </p>
 */
export interface TestDNSAnswerResponse {
  __type?: "TestDNSAnswerResponse";
  /**
   * <p>The Amazon Route 53 name server used to respond to the request.</p>
   */
  Nameserver: string | undefined;

  /**
   * <p>The protocol that Amazon Route 53 used to respond to the request, either <code>UDP</code> or <code>TCP</code>. </p>
   */
  Protocol: string | undefined;

  /**
   * <p>A list that contains values that Amazon Route 53 returned for this resource record set.</p>
   */
  RecordData: string[] | undefined;

  /**
   * <p>The name of the resource record set that you submitted a request for.</p>
   */
  RecordName: string | undefined;

  /**
   * <p>The type of the resource record set that you submitted a request for.</p>
   */
  RecordType: RRType | string | undefined;

  /**
   * <p>A code that indicates whether the request is valid or not. The most common response code is <code>NOERROR</code>, meaning that
   * 			the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error.
   * 			For a list of possible response codes, see
   * 			<a href="http://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6">DNS RCODES</a> on the IANA website. </p>
   */
  ResponseCode: string | undefined;
}

export namespace TestDNSAnswerResponse {
  export const filterSensitiveLog = (obj: TestDNSAnswerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestDNSAnswerResponse =>
    __isa(o, "TestDNSAnswerResponse");
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>This health check can't be created because the current account has reached the limit on the number of active health checks.</p>
 * 		       <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>For information about how to get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a
 * 			higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 *
 * 		       <p>You have reached the maximum number of active health checks for an AWS account. To request a higher limit,
 * 			<a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyHealthChecks
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyHealthChecks";
  $fault: "client";
  message?: string;
}

export namespace TooManyHealthChecks {
  export const filterSensitiveLog = (obj: TooManyHealthChecks): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyHealthChecks =>
    __isa(o, "TooManyHealthChecks");
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
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyHostedZones extends __SmithyException, $MetadataBearer {
  name: "TooManyHostedZones";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TooManyHostedZones {
  export const filterSensitiveLog = (obj: TooManyHostedZones): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyHostedZones =>
    __isa(o, "TooManyHostedZones");
}

/**
 * <p>This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.</p>
 * 		       <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>To get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.
 * 		</p>
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyTrafficPolicies
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTrafficPolicies";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicies {
  export const filterSensitiveLog = (obj: TooManyTrafficPolicies): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTrafficPolicies =>
    __isa(o, "TooManyTrafficPolicies");
}

/**
 * <p>This traffic policy instance can't be created because the current account has reached the limit on the number of
 * 			traffic policy instances.</p>
 * 		       <p>For information about default limits, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       <p>For information about how to get the current limit for an account, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 * 		       <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyTrafficPolicyInstances
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTrafficPolicyInstances";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicyInstances {
  export const filterSensitiveLog = (
    obj: TooManyTrafficPolicyInstances
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTrafficPolicyInstances =>
    __isa(o, "TooManyTrafficPolicyInstances");
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
export interface TooManyTrafficPolicyVersionsForCurrentPolicy
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTrafficPolicyVersionsForCurrentPolicy";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TooManyTrafficPolicyVersionsForCurrentPolicy {
  export const filterSensitiveLog = (
    obj: TooManyTrafficPolicyVersionsForCurrentPolicy
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is TooManyTrafficPolicyVersionsForCurrentPolicy =>
    __isa(o, "TooManyTrafficPolicyVersionsForCurrentPolicy");
}

/**
 * <p>You've created the maximum number of authorizations that can be created for the specified hosted zone.
 * 			To authorize another VPC to be associated with the hosted zone, submit a <code>DeleteVPCAssociationAuthorization</code> request
 * 			to remove an existing authorization. To get a list of existing authorizations, submit a
 * 			<code>ListVPCAssociationAuthorizations</code> request.</p>
 */
export interface TooManyVPCAssociationAuthorizations
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyVPCAssociationAuthorizations";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TooManyVPCAssociationAuthorizations {
  export const filterSensitiveLog = (
    obj: TooManyVPCAssociationAuthorizations
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyVPCAssociationAuthorizations =>
    __isa(o, "TooManyVPCAssociationAuthorizations");
}

/**
 * <p>A complex type that contains settings for a traffic policy.</p>
 */
export interface TrafficPolicy {
  __type?: "TrafficPolicy";
  /**
   * <p>The comment that you specify in the <code>CreateTrafficPolicy</code> request, if any.</p>
   */
  Comment?: string;

  /**
   * <p>The definition of a traffic policy in JSON format. You specify the JSON document to use for a new
   * 			traffic policy in the <code>CreateTrafficPolicy</code> request. For more information about the JSON format, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
   */
  Document: string | undefined;

  /**
   * <p>The ID that Amazon Route 53 assigned to a traffic policy when you created it.</p>
   */
  Id: string | undefined;

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
   * <p>The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy,
   * 			the value of <code>Version</code> is always 1.</p>
   */
  Version: number | undefined;
}

export namespace TrafficPolicy {
  export const filterSensitiveLog = (obj: TrafficPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicy => __isa(o, "TrafficPolicy");
}

/**
 * <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 */
export interface TrafficPolicyAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "TrafficPolicyAlreadyExists";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TrafficPolicyAlreadyExists {
  export const filterSensitiveLog = (obj: TrafficPolicyAlreadyExists): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicyAlreadyExists =>
    __isa(o, "TrafficPolicyAlreadyExists");
}

/**
 * <p>A complex type that contains settings for the new traffic policy instance.</p>
 */
export interface TrafficPolicyInstance {
  __type?: "TrafficPolicyInstance";
  /**
   * <p>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</p>
   */
  HostedZoneId: string | undefined;

  /**
   * <p>The ID that Amazon Route 53 assigned to the new traffic policy instance.</p>
   */
  Id: string | undefined;

  /**
   * <p>If <code>State</code> is <code>Failed</code>, an explanation of the reason for the failure. If <code>State</code> is another value,
   * 			<code>Message</code> is empty.</p>
   */
  Message: string | undefined;

  /**
   * <p>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the
   * 			resource record sets that are associated with this traffic policy instance. </p>
   */
  Name: string | undefined;

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
   * <p>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</p>
   */
  TTL: number | undefined;

  /**
   * <p>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyId: string | undefined;

  /**
   * <p>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. </p>
   */
  TrafficPolicyType: RRType | string | undefined;

  /**
   * <p>The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</p>
   */
  TrafficPolicyVersion: number | undefined;
}

export namespace TrafficPolicyInstance {
  export const filterSensitiveLog = (obj: TrafficPolicyInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicyInstance =>
    __isa(o, "TrafficPolicyInstance");
}

/**
 * <p>There is already a traffic policy instance with the specified ID.</p>
 */
export interface TrafficPolicyInstanceAlreadyExists
  extends __SmithyException,
    $MetadataBearer {
  name: "TrafficPolicyInstanceAlreadyExists";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TrafficPolicyInstanceAlreadyExists {
  export const filterSensitiveLog = (
    obj: TrafficPolicyInstanceAlreadyExists
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicyInstanceAlreadyExists =>
    __isa(o, "TrafficPolicyInstanceAlreadyExists");
}

/**
 * <p>One or more traffic policy instances were created by using the specified traffic policy.</p>
 */
export interface TrafficPolicyInUse extends __SmithyException, $MetadataBearer {
  name: "TrafficPolicyInUse";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace TrafficPolicyInUse {
  export const filterSensitiveLog = (obj: TrafficPolicyInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicyInUse =>
    __isa(o, "TrafficPolicyInUse");
}

/**
 * <p>A complex type that contains information about the latest version of one traffic policy
 * 			that is associated with the current AWS account.</p>
 */
export interface TrafficPolicySummary {
  __type?: "TrafficPolicySummary";
  /**
   * <p>The ID that Amazon Route 53 assigned to the traffic policy when you created it.</p>
   */
  Id: string | undefined;

  /**
   * <p>The version number of the latest version of the traffic policy.</p>
   */
  LatestVersion: number | undefined;

  /**
   * <p>The name that you specified for the traffic policy when you created it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The number of traffic policies that are associated with the current AWS account.</p>
   */
  TrafficPolicyCount: number | undefined;

  /**
   * <p>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy
   * 			to create a traffic policy instance.</p>
   */
  Type: RRType | string | undefined;
}

export namespace TrafficPolicySummary {
  export const filterSensitiveLog = (obj: TrafficPolicySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrafficPolicySummary =>
    __isa(o, "TrafficPolicySummary");
}

/**
 * <p>A complex type that contains information about a request to update a health check.</p>
 */
export interface UpdateHealthCheckRequest {
  __type?: "UpdateHealthCheckRequest";
  /**
   * <p>A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether
   * 			the specified health check is healthy.</p>
   */
  AlarmIdentifier?: AlarmIdentifier;

  /**
   * <p>A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a
   * 			<code>CALCULATED</code> health check.</p>
   */
  ChildHealthChecks?: string[];

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
   * <p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint
   * 			from unhealthy to healthy or vice versa. For more information, see
   * 			<a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>
   */
  FailureThreshold?: number;

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
   * <p>Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it
   * 			otherwise would be considered healthy.</p>
   */
  Inverted?: boolean;

  /**
   * <p>The port on the endpoint on which you want Amazon Route 53 to perform health checks.</p>
   */
  Port?: number;

  /**
   * <p>A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check
   * 			the specified endpoint from.</p>
   */
  Regions?: (HealthCheckRegion | string)[];

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

  /**
   * <p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint
   * 			will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html.
   * 			You can also include query string parameters, for example, <code>/welcome.html?language=jp&login=y</code>. </p>
   * 		       <p>Specify this value only if you want to change it.</p>
   */
  ResourcePath?: string;

  /**
   * <p>If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTP_STR_MATCH</code>, the string that you want
   * 			Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers
   * 			the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)</p>
   */
  SearchString?: string;
}

export namespace UpdateHealthCheckRequest {
  export const filterSensitiveLog = (obj: UpdateHealthCheckRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHealthCheckRequest =>
    __isa(o, "UpdateHealthCheckRequest");
}

/**
 * <p>A complex type that contains the response to the <code>UpdateHealthCheck</code> request.</p>
 */
export interface UpdateHealthCheckResponse {
  __type?: "UpdateHealthCheckResponse";
  /**
   * <p>A complex type that contains the response to an <code>UpdateHealthCheck</code> request.</p>
   */
  HealthCheck: HealthCheck | undefined;
}

export namespace UpdateHealthCheckResponse {
  export const filterSensitiveLog = (obj: UpdateHealthCheckResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHealthCheckResponse =>
    __isa(o, "UpdateHealthCheckResponse");
}

/**
 * <p>A request to update the comment for a hosted zone.</p>
 */
export interface UpdateHostedZoneCommentRequest {
  __type?: "UpdateHostedZoneCommentRequest";
  /**
   * <p>The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the
   * 			<code>Comment</code> element, if any.</p>
   */
  Comment?: string;

  /**
   * <p>The ID for the hosted zone that you want to update the comment for.</p>
   */
  Id: string | undefined;
}

export namespace UpdateHostedZoneCommentRequest {
  export const filterSensitiveLog = (
    obj: UpdateHostedZoneCommentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHostedZoneCommentRequest =>
    __isa(o, "UpdateHostedZoneCommentRequest");
}

/**
 * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
 */
export interface UpdateHostedZoneCommentResponse {
  __type?: "UpdateHostedZoneCommentResponse";
  /**
   * <p>A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.</p>
   */
  HostedZone: HostedZone | undefined;
}

export namespace UpdateHostedZoneCommentResponse {
  export const filterSensitiveLog = (
    obj: UpdateHostedZoneCommentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHostedZoneCommentResponse =>
    __isa(o, "UpdateHostedZoneCommentResponse");
}

/**
 * <p>A complex type that contains information about the traffic policy that you want to update the comment for.</p>
 */
export interface UpdateTrafficPolicyCommentRequest {
  __type?: "UpdateTrafficPolicyCommentRequest";
  /**
   * <p>The new comment for the specified traffic policy and version.</p>
   */
  Comment: string | undefined;

  /**
   * <p>The value of <code>Id</code> for the traffic policy that you want to update the comment for.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of <code>Version</code> for the traffic policy that you want to update the comment for.</p>
   */
  Version: number | undefined;
}

export namespace UpdateTrafficPolicyCommentRequest {
  export const filterSensitiveLog = (
    obj: UpdateTrafficPolicyCommentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrafficPolicyCommentRequest =>
    __isa(o, "UpdateTrafficPolicyCommentRequest");
}

/**
 * <p>A complex type that contains the response information for the traffic policy.</p>
 */
export interface UpdateTrafficPolicyCommentResponse {
  __type?: "UpdateTrafficPolicyCommentResponse";
  /**
   * <p>A complex type that contains settings for the specified traffic policy.</p>
   */
  TrafficPolicy: TrafficPolicy | undefined;
}

export namespace UpdateTrafficPolicyCommentResponse {
  export const filterSensitiveLog = (
    obj: UpdateTrafficPolicyCommentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrafficPolicyCommentResponse =>
    __isa(o, "UpdateTrafficPolicyCommentResponse");
}

/**
 * <p>A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.</p>
 */
export interface UpdateTrafficPolicyInstanceRequest {
  __type?: "UpdateTrafficPolicyInstanceRequest";
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
  export const filterSensitiveLog = (
    obj: UpdateTrafficPolicyInstanceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrafficPolicyInstanceRequest =>
    __isa(o, "UpdateTrafficPolicyInstanceRequest");
}

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53
 * 			created based on a specified traffic policy.</p>
 */
export interface UpdateTrafficPolicyInstanceResponse {
  __type?: "UpdateTrafficPolicyInstanceResponse";
  /**
   * <p>A complex type that contains settings for the updated traffic policy instance.</p>
   */
  TrafficPolicyInstance: TrafficPolicyInstance | undefined;
}

export namespace UpdateTrafficPolicyInstanceResponse {
  export const filterSensitiveLog = (
    obj: UpdateTrafficPolicyInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrafficPolicyInstanceResponse =>
    __isa(o, "UpdateTrafficPolicyInstanceResponse");
}

/**
 * <p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p>
 */
export interface VPC {
  __type?: "VPC";
  /**
   * <p>(Private hosted zones only) The ID of an Amazon VPC. </p>
   */
  VPCId?: string;

  /**
   * <p>(Private hosted zones only) The region that an Amazon VPC was created in.</p>
   */
  VPCRegion?: VPCRegion | string;
}

export namespace VPC {
  export const filterSensitiveLog = (obj: VPC): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPC => __isa(o, "VPC");
}

/**
 * <p>The VPC that you specified is not authorized to be associated with the hosted zone.</p>
 */
export interface VPCAssociationAuthorizationNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "VPCAssociationAuthorizationNotFound";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace VPCAssociationAuthorizationNotFound {
  export const filterSensitiveLog = (
    obj: VPCAssociationAuthorizationNotFound
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPCAssociationAuthorizationNotFound =>
    __isa(o, "VPCAssociationAuthorizationNotFound");
}

/**
 * <p>The specified VPC and hosted zone are not currently associated.</p>
 */
export interface VPCAssociationNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "VPCAssociationNotFound";
  $fault: "client";
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

export namespace VPCAssociationNotFound {
  export const filterSensitiveLog = (obj: VPCAssociationNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is VPCAssociationNotFound =>
    __isa(o, "VPCAssociationNotFound");
}

export type VPCRegion =
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
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2";
