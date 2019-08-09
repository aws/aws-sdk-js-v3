import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the <a>GetResourceConfigHistory</a> action.</p>
 */
export interface GetResourceConfigHistoryInput {
  /**
   * <p>The resource type.</p>
   */
  resourceType:
    | "AWS::EC2::CustomerGateway"
    | "AWS::EC2::EIP"
    | "AWS::EC2::Host"
    | "AWS::EC2::Instance"
    | "AWS::EC2::InternetGateway"
    | "AWS::EC2::NetworkAcl"
    | "AWS::EC2::NetworkInterface"
    | "AWS::EC2::RouteTable"
    | "AWS::EC2::SecurityGroup"
    | "AWS::EC2::Subnet"
    | "AWS::CloudTrail::Trail"
    | "AWS::EC2::Volume"
    | "AWS::EC2::VPC"
    | "AWS::EC2::VPNConnection"
    | "AWS::EC2::VPNGateway"
    | "AWS::IAM::Group"
    | "AWS::IAM::Policy"
    | "AWS::IAM::Role"
    | "AWS::IAM::User"
    | "AWS::ACM::Certificate"
    | "AWS::RDS::DBInstance"
    | "AWS::RDS::DBSubnetGroup"
    | "AWS::RDS::DBSecurityGroup"
    | "AWS::RDS::DBSnapshot"
    | "AWS::RDS::EventSubscription"
    | "AWS::ElasticLoadBalancingV2::LoadBalancer"
    | "AWS::S3::Bucket"
    | "AWS::SSM::ManagedInstanceInventory"
    | "AWS::Redshift::Cluster"
    | "AWS::Redshift::ClusterSnapshot"
    | "AWS::Redshift::ClusterParameterGroup"
    | "AWS::Redshift::ClusterSecurityGroup"
    | "AWS::Redshift::ClusterSubnetGroup"
    | "AWS::Redshift::EventSubscription"
    | "AWS::CloudWatch::Alarm"
    | "AWS::CloudFormation::Stack"
    | "AWS::DynamoDB::Table"
    | "AWS::AutoScaling::AutoScalingGroup"
    | "AWS::AutoScaling::LaunchConfiguration"
    | "AWS::AutoScaling::ScalingPolicy"
    | "AWS::AutoScaling::ScheduledAction"
    | "AWS::CodeBuild::Project"
    | "AWS::WAF::RateBasedRule"
    | "AWS::WAF::Rule"
    | "AWS::WAF::WebACL"
    | "AWS::WAFRegional::RateBasedRule"
    | "AWS::WAFRegional::Rule"
    | "AWS::WAFRegional::WebACL"
    | "AWS::CloudFront::Distribution"
    | "AWS::CloudFront::StreamingDistribution"
    | "AWS::WAF::RuleGroup"
    | "AWS::WAFRegional::RuleGroup"
    | "AWS::Lambda::Function"
    | "AWS::ElasticBeanstalk::Application"
    | "AWS::ElasticBeanstalk::ApplicationVersion"
    | "AWS::ElasticBeanstalk::Environment"
    | "AWS::ElasticLoadBalancing::LoadBalancer"
    | "AWS::XRay::EncryptionConfig"
    | "AWS::SSM::AssociationCompliance"
    | "AWS::SSM::PatchCompliance"
    | "AWS::Shield::Protection"
    | "AWS::ShieldRegional::Protection"
    | "AWS::Config::ResourceCompliance"
    | "AWS::CodePipeline::Pipeline"
    | string;

  /**
   * <p>The ID of the resource (for example., <code>sg-xxxxxx</code>).</p>
   */
  resourceId: string;

  /**
   * <p>The time stamp that indicates a later time. If not specified, current time is taken.</p>
   */
  laterTime?: Date | string | number;

  /**
   * <p>The time stamp that indicates an earlier time. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.</p>
   */
  earlierTime?: Date | string | number;

  /**
   * <p>The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.</p>
   */
  chronologicalOrder?: "Reverse" | "Forward" | string;

  /**
   * <p>The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
