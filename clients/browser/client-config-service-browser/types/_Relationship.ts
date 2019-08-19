/**
 * <p>The relationship of the related resource to the main resource.</p>
 */
export interface _Relationship {
  /**
   * <p>The resource type of the related resource.</p>
   */
  resourceType?:
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
   * <p>The ID of the related resource (for example, <code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the related resource, if available.</p>
   */
  resourceName?: string;

  /**
   * <p>The type of relationship with the related resource.</p>
   */
  relationshipName?: string;
}

export type _UnmarshalledRelationship = _Relationship;
