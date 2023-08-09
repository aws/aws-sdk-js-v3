// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationRecordersRequest, DescribeConfigurationRecordersResponse } from "../models/models_0";
import {
  de_DescribeConfigurationRecordersCommand,
  se_DescribeConfigurationRecordersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRecordersCommand}.
 */
export interface DescribeConfigurationRecordersCommandInput extends DescribeConfigurationRecordersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRecordersCommand}.
 */
export interface DescribeConfigurationRecordersCommandOutput
  extends DescribeConfigurationRecordersResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the details for the specified configuration recorders.
 * 			If the configuration recorder is not specified, this action returns
 * 			the details for all configuration recorders associated with the
 * 			account.</p>
 *          <note>
 *             <p>You can specify only one configuration recorder for each Amazon Web Services Region for each account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecordersCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecordersCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationRecordersRequest
 *   ConfigurationRecorderNames: [ // ConfigurationRecorderNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationRecordersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRecordersResponse
 * //   ConfigurationRecorders: [ // ConfigurationRecorderList
 * //     { // ConfigurationRecorder
 * //       name: "STRING_VALUE",
 * //       roleARN: "STRING_VALUE",
 * //       recordingGroup: { // RecordingGroup
 * //         allSupported: true || false,
 * //         includeGlobalResourceTypes: true || false,
 * //         resourceTypes: [ // ResourceTypeList
 * //           "AWS::EC2::CustomerGateway" || "AWS::EC2::EIP" || "AWS::EC2::Host" || "AWS::EC2::Instance" || "AWS::EC2::InternetGateway" || "AWS::EC2::NetworkAcl" || "AWS::EC2::NetworkInterface" || "AWS::EC2::RouteTable" || "AWS::EC2::SecurityGroup" || "AWS::EC2::Subnet" || "AWS::CloudTrail::Trail" || "AWS::EC2::Volume" || "AWS::EC2::VPC" || "AWS::EC2::VPNConnection" || "AWS::EC2::VPNGateway" || "AWS::EC2::RegisteredHAInstance" || "AWS::EC2::NatGateway" || "AWS::EC2::EgressOnlyInternetGateway" || "AWS::EC2::VPCEndpoint" || "AWS::EC2::VPCEndpointService" || "AWS::EC2::FlowLog" || "AWS::EC2::VPCPeeringConnection" || "AWS::Elasticsearch::Domain" || "AWS::IAM::Group" || "AWS::IAM::Policy" || "AWS::IAM::Role" || "AWS::IAM::User" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::ACM::Certificate" || "AWS::RDS::DBInstance" || "AWS::RDS::DBSubnetGroup" || "AWS::RDS::DBSecurityGroup" || "AWS::RDS::DBSnapshot" || "AWS::RDS::DBCluster" || "AWS::RDS::DBClusterSnapshot" || "AWS::RDS::EventSubscription" || "AWS::S3::Bucket" || "AWS::S3::AccountPublicAccessBlock" || "AWS::Redshift::Cluster" || "AWS::Redshift::ClusterSnapshot" || "AWS::Redshift::ClusterParameterGroup" || "AWS::Redshift::ClusterSecurityGroup" || "AWS::Redshift::ClusterSubnetGroup" || "AWS::Redshift::EventSubscription" || "AWS::SSM::ManagedInstanceInventory" || "AWS::CloudWatch::Alarm" || "AWS::CloudFormation::Stack" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::AutoScaling::AutoScalingGroup" || "AWS::AutoScaling::LaunchConfiguration" || "AWS::AutoScaling::ScalingPolicy" || "AWS::AutoScaling::ScheduledAction" || "AWS::DynamoDB::Table" || "AWS::CodeBuild::Project" || "AWS::WAF::RateBasedRule" || "AWS::WAF::Rule" || "AWS::WAF::RuleGroup" || "AWS::WAF::WebACL" || "AWS::WAFRegional::RateBasedRule" || "AWS::WAFRegional::Rule" || "AWS::WAFRegional::RuleGroup" || "AWS::WAFRegional::WebACL" || "AWS::CloudFront::Distribution" || "AWS::CloudFront::StreamingDistribution" || "AWS::Lambda::Function" || "AWS::NetworkFirewall::Firewall" || "AWS::NetworkFirewall::FirewallPolicy" || "AWS::NetworkFirewall::RuleGroup" || "AWS::ElasticBeanstalk::Application" || "AWS::ElasticBeanstalk::ApplicationVersion" || "AWS::ElasticBeanstalk::Environment" || "AWS::WAFv2::WebACL" || "AWS::WAFv2::RuleGroup" || "AWS::WAFv2::IPSet" || "AWS::WAFv2::RegexPatternSet" || "AWS::WAFv2::ManagedRuleSet" || "AWS::XRay::EncryptionConfig" || "AWS::SSM::AssociationCompliance" || "AWS::SSM::PatchCompliance" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection" || "AWS::Config::ConformancePackCompliance" || "AWS::Config::ResourceCompliance" || "AWS::ApiGateway::Stage" || "AWS::ApiGateway::RestApi" || "AWS::ApiGatewayV2::Stage" || "AWS::ApiGatewayV2::Api" || "AWS::CodePipeline::Pipeline" || "AWS::ServiceCatalog::CloudFormationProvisionedProduct" || "AWS::ServiceCatalog::CloudFormationProduct" || "AWS::ServiceCatalog::Portfolio" || "AWS::SQS::Queue" || "AWS::KMS::Key" || "AWS::QLDB::Ledger" || "AWS::SecretsManager::Secret" || "AWS::SNS::Topic" || "AWS::SSM::FileData" || "AWS::Backup::BackupPlan" || "AWS::Backup::BackupSelection" || "AWS::Backup::BackupVault" || "AWS::Backup::RecoveryPoint" || "AWS::ECR::Repository" || "AWS::ECS::Cluster" || "AWS::ECS::Service" || "AWS::ECS::TaskDefinition" || "AWS::EFS::AccessPoint" || "AWS::EFS::FileSystem" || "AWS::EKS::Cluster" || "AWS::OpenSearch::Domain" || "AWS::EC2::TransitGateway" || "AWS::Kinesis::Stream" || "AWS::Kinesis::StreamConsumer" || "AWS::CodeDeploy::Application" || "AWS::CodeDeploy::DeploymentConfig" || "AWS::CodeDeploy::DeploymentGroup" || "AWS::EC2::LaunchTemplate" || "AWS::ECR::PublicRepository" || "AWS::GuardDuty::Detector" || "AWS::EMR::SecurityConfiguration" || "AWS::SageMaker::CodeRepository" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::Route53Resolver::ResolverRule" || "AWS::Route53Resolver::ResolverRuleAssociation" || "AWS::DMS::ReplicationSubnetGroup" || "AWS::DMS::EventSubscription" || "AWS::MSK::Cluster" || "AWS::StepFunctions::Activity" || "AWS::WorkSpaces::Workspace" || "AWS::WorkSpaces::ConnectionAlias" || "AWS::SageMaker::Model" || "AWS::ElasticLoadBalancingV2::Listener" || "AWS::StepFunctions::StateMachine" || "AWS::Batch::JobQueue" || "AWS::Batch::ComputeEnvironment" || "AWS::AccessAnalyzer::Analyzer" || "AWS::Athena::WorkGroup" || "AWS::Athena::DataCatalog" || "AWS::Detective::Graph" || "AWS::GlobalAccelerator::Accelerator" || "AWS::GlobalAccelerator::EndpointGroup" || "AWS::GlobalAccelerator::Listener" || "AWS::EC2::TransitGatewayAttachment" || "AWS::EC2::TransitGatewayRouteTable" || "AWS::DMS::Certificate" || "AWS::AppConfig::Application" || "AWS::AppSync::GraphQLApi" || "AWS::DataSync::LocationSMB" || "AWS::DataSync::LocationFSxLustre" || "AWS::DataSync::LocationS3" || "AWS::DataSync::LocationEFS" || "AWS::DataSync::Task" || "AWS::DataSync::LocationNFS" || "AWS::EC2::NetworkInsightsAccessScopeAnalysis" || "AWS::EKS::FargateProfile" || "AWS::Glue::Job" || "AWS::GuardDuty::ThreatIntelSet" || "AWS::GuardDuty::IPSet" || "AWS::SageMaker::Workteam" || "AWS::SageMaker::NotebookInstanceLifecycleConfig" || "AWS::ServiceDiscovery::Service" || "AWS::ServiceDiscovery::PublicDnsNamespace" || "AWS::SES::ContactList" || "AWS::SES::ConfigurationSet" || "AWS::Route53::HostedZone" || "AWS::IoTEvents::Input" || "AWS::IoTEvents::DetectorModel" || "AWS::IoTEvents::AlarmModel" || "AWS::ServiceDiscovery::HttpNamespace" || "AWS::Events::EventBus" || "AWS::ImageBuilder::ContainerRecipe" || "AWS::ImageBuilder::DistributionConfiguration" || "AWS::ImageBuilder::InfrastructureConfiguration" || "AWS::DataSync::LocationObjectStorage" || "AWS::DataSync::LocationHDFS" || "AWS::Glue::Classifier" || "AWS::Route53RecoveryReadiness::Cell" || "AWS::Route53RecoveryReadiness::ReadinessCheck" || "AWS::ECR::RegistryPolicy" || "AWS::Backup::ReportPlan" || "AWS::Lightsail::Certificate" || "AWS::RUM::AppMonitor" || "AWS::Events::Endpoint" || "AWS::SES::ReceiptRuleSet" || "AWS::Events::Archive" || "AWS::Events::ApiDestination" || "AWS::Lightsail::Disk" || "AWS::FIS::ExperimentTemplate" || "AWS::DataSync::LocationFSxWindows" || "AWS::SES::ReceiptFilter" || "AWS::GuardDuty::Filter" || "AWS::SES::Template" || "AWS::AmazonMQ::Broker" || "AWS::AppConfig::Environment" || "AWS::AppConfig::ConfigurationProfile" || "AWS::Cloud9::EnvironmentEC2" || "AWS::EventSchemas::Registry" || "AWS::EventSchemas::RegistryPolicy" || "AWS::EventSchemas::Discoverer" || "AWS::FraudDetector::Label" || "AWS::FraudDetector::EntityType" || "AWS::FraudDetector::Variable" || "AWS::FraudDetector::Outcome" || "AWS::IoT::Authorizer" || "AWS::IoT::SecurityProfile" || "AWS::IoT::RoleAlias" || "AWS::IoT::Dimension" || "AWS::IoTAnalytics::Datastore" || "AWS::Lightsail::Bucket" || "AWS::Lightsail::StaticIp" || "AWS::MediaPackage::PackagingGroup" || "AWS::Route53RecoveryReadiness::RecoveryGroup" || "AWS::ResilienceHub::ResiliencyPolicy" || "AWS::Transfer::Workflow" || "AWS::EKS::IdentityProviderConfig" || "AWS::EKS::Addon" || "AWS::Glue::MLTransform" || "AWS::IoT::Policy" || "AWS::IoT::MitigationAction" || "AWS::IoTTwinMaker::Workspace" || "AWS::IoTTwinMaker::Entity" || "AWS::IoTAnalytics::Dataset" || "AWS::IoTAnalytics::Pipeline" || "AWS::IoTAnalytics::Channel" || "AWS::IoTSiteWise::Dashboard" || "AWS::IoTSiteWise::Project" || "AWS::IoTSiteWise::Portal" || "AWS::IoTSiteWise::AssetModel" || "AWS::IVS::Channel" || "AWS::IVS::RecordingConfiguration" || "AWS::IVS::PlaybackKeyPair" || "AWS::KinesisAnalyticsV2::Application" || "AWS::RDS::GlobalCluster" || "AWS::S3::MultiRegionAccessPoint" || "AWS::DeviceFarm::TestGridProject" || "AWS::Budgets::BudgetsAction" || "AWS::Lex::Bot" || "AWS::CodeGuruReviewer::RepositoryAssociation" || "AWS::IoT::CustomMetric" || "AWS::Route53Resolver::FirewallDomainList" || "AWS::RoboMaker::RobotApplicationVersion" || "AWS::EC2::TrafficMirrorSession" || "AWS::IoTSiteWise::Gateway" || "AWS::Lex::BotAlias" || "AWS::LookoutMetrics::Alert" || "AWS::IoT::AccountAuditConfiguration" || "AWS::EC2::TrafficMirrorTarget" || "AWS::S3::StorageLens" || "AWS::IoT::ScheduledAudit" || "AWS::Events::Connection" || "AWS::EventSchemas::Schema" || "AWS::MediaPackage::PackagingConfiguration" || "AWS::KinesisVideo::SignalingChannel" || "AWS::AppStream::DirectoryConfig" || "AWS::LookoutVision::Project" || "AWS::Route53RecoveryControl::Cluster" || "AWS::Route53RecoveryControl::SafetyRule" || "AWS::Route53RecoveryControl::ControlPanel" || "AWS::Route53RecoveryControl::RoutingControl" || "AWS::Route53RecoveryReadiness::ResourceSet" || "AWS::RoboMaker::SimulationApplication" || "AWS::RoboMaker::RobotApplication" || "AWS::HealthLake::FHIRDatastore" || "AWS::Pinpoint::Segment" || "AWS::Pinpoint::ApplicationSettings" || "AWS::Events::Rule" || "AWS::EC2::DHCPOptions" || "AWS::EC2::NetworkInsightsPath" || "AWS::EC2::TrafficMirrorFilter" || "AWS::EC2::IPAM" || "AWS::IoTTwinMaker::Scene" || "AWS::NetworkManager::TransitGatewayRegistration" || "AWS::CustomerProfiles::Domain" || "AWS::AutoScaling::WarmPool" || "AWS::Connect::PhoneNumber" || "AWS::AppConfig::DeploymentStrategy" || "AWS::AppFlow::Flow" || "AWS::AuditManager::Assessment" || "AWS::CloudWatch::MetricStream" || "AWS::DeviceFarm::InstanceProfile" || "AWS::DeviceFarm::Project" || "AWS::EC2::EC2Fleet" || "AWS::EC2::SubnetRouteTableAssociation" || "AWS::ECR::PullThroughCacheRule" || "AWS::GroundStation::Config" || "AWS::ImageBuilder::ImagePipeline" || "AWS::IoT::FleetMetric" || "AWS::IoTWireless::ServiceProfile" || "AWS::NetworkManager::Device" || "AWS::NetworkManager::GlobalNetwork" || "AWS::NetworkManager::Link" || "AWS::NetworkManager::Site" || "AWS::Panorama::Package" || "AWS::Pinpoint::App" || "AWS::Redshift::ScheduledAction" || "AWS::Route53Resolver::FirewallRuleGroupAssociation" || "AWS::SageMaker::AppImageConfig" || "AWS::SageMaker::Image" || "AWS::ECS::TaskSet" || "AWS::Cassandra::Keyspace" || "AWS::Signer::SigningProfile" || "AWS::Amplify::App" || "AWS::AppMesh::VirtualNode" || "AWS::AppMesh::VirtualService" || "AWS::AppRunner::VpcConnector" || "AWS::AppStream::Application" || "AWS::CodeArtifact::Repository" || "AWS::EC2::PrefixList" || "AWS::EC2::SpotFleet" || "AWS::Evidently::Project" || "AWS::Forecast::Dataset" || "AWS::IAM::SAMLProvider" || "AWS::IAM::ServerCertificate" || "AWS::Pinpoint::Campaign" || "AWS::Pinpoint::InAppTemplate" || "AWS::SageMaker::Domain" || "AWS::Transfer::Agreement" || "AWS::Transfer::Connector" || "AWS::KinesisFirehose::DeliveryStream",
 * //         ],
 * //         exclusionByResourceTypes: { // ExclusionByResourceTypes
 * //           resourceTypes: [
 * //             "AWS::EC2::CustomerGateway" || "AWS::EC2::EIP" || "AWS::EC2::Host" || "AWS::EC2::Instance" || "AWS::EC2::InternetGateway" || "AWS::EC2::NetworkAcl" || "AWS::EC2::NetworkInterface" || "AWS::EC2::RouteTable" || "AWS::EC2::SecurityGroup" || "AWS::EC2::Subnet" || "AWS::CloudTrail::Trail" || "AWS::EC2::Volume" || "AWS::EC2::VPC" || "AWS::EC2::VPNConnection" || "AWS::EC2::VPNGateway" || "AWS::EC2::RegisteredHAInstance" || "AWS::EC2::NatGateway" || "AWS::EC2::EgressOnlyInternetGateway" || "AWS::EC2::VPCEndpoint" || "AWS::EC2::VPCEndpointService" || "AWS::EC2::FlowLog" || "AWS::EC2::VPCPeeringConnection" || "AWS::Elasticsearch::Domain" || "AWS::IAM::Group" || "AWS::IAM::Policy" || "AWS::IAM::Role" || "AWS::IAM::User" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::ACM::Certificate" || "AWS::RDS::DBInstance" || "AWS::RDS::DBSubnetGroup" || "AWS::RDS::DBSecurityGroup" || "AWS::RDS::DBSnapshot" || "AWS::RDS::DBCluster" || "AWS::RDS::DBClusterSnapshot" || "AWS::RDS::EventSubscription" || "AWS::S3::Bucket" || "AWS::S3::AccountPublicAccessBlock" || "AWS::Redshift::Cluster" || "AWS::Redshift::ClusterSnapshot" || "AWS::Redshift::ClusterParameterGroup" || "AWS::Redshift::ClusterSecurityGroup" || "AWS::Redshift::ClusterSubnetGroup" || "AWS::Redshift::EventSubscription" || "AWS::SSM::ManagedInstanceInventory" || "AWS::CloudWatch::Alarm" || "AWS::CloudFormation::Stack" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::AutoScaling::AutoScalingGroup" || "AWS::AutoScaling::LaunchConfiguration" || "AWS::AutoScaling::ScalingPolicy" || "AWS::AutoScaling::ScheduledAction" || "AWS::DynamoDB::Table" || "AWS::CodeBuild::Project" || "AWS::WAF::RateBasedRule" || "AWS::WAF::Rule" || "AWS::WAF::RuleGroup" || "AWS::WAF::WebACL" || "AWS::WAFRegional::RateBasedRule" || "AWS::WAFRegional::Rule" || "AWS::WAFRegional::RuleGroup" || "AWS::WAFRegional::WebACL" || "AWS::CloudFront::Distribution" || "AWS::CloudFront::StreamingDistribution" || "AWS::Lambda::Function" || "AWS::NetworkFirewall::Firewall" || "AWS::NetworkFirewall::FirewallPolicy" || "AWS::NetworkFirewall::RuleGroup" || "AWS::ElasticBeanstalk::Application" || "AWS::ElasticBeanstalk::ApplicationVersion" || "AWS::ElasticBeanstalk::Environment" || "AWS::WAFv2::WebACL" || "AWS::WAFv2::RuleGroup" || "AWS::WAFv2::IPSet" || "AWS::WAFv2::RegexPatternSet" || "AWS::WAFv2::ManagedRuleSet" || "AWS::XRay::EncryptionConfig" || "AWS::SSM::AssociationCompliance" || "AWS::SSM::PatchCompliance" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection" || "AWS::Config::ConformancePackCompliance" || "AWS::Config::ResourceCompliance" || "AWS::ApiGateway::Stage" || "AWS::ApiGateway::RestApi" || "AWS::ApiGatewayV2::Stage" || "AWS::ApiGatewayV2::Api" || "AWS::CodePipeline::Pipeline" || "AWS::ServiceCatalog::CloudFormationProvisionedProduct" || "AWS::ServiceCatalog::CloudFormationProduct" || "AWS::ServiceCatalog::Portfolio" || "AWS::SQS::Queue" || "AWS::KMS::Key" || "AWS::QLDB::Ledger" || "AWS::SecretsManager::Secret" || "AWS::SNS::Topic" || "AWS::SSM::FileData" || "AWS::Backup::BackupPlan" || "AWS::Backup::BackupSelection" || "AWS::Backup::BackupVault" || "AWS::Backup::RecoveryPoint" || "AWS::ECR::Repository" || "AWS::ECS::Cluster" || "AWS::ECS::Service" || "AWS::ECS::TaskDefinition" || "AWS::EFS::AccessPoint" || "AWS::EFS::FileSystem" || "AWS::EKS::Cluster" || "AWS::OpenSearch::Domain" || "AWS::EC2::TransitGateway" || "AWS::Kinesis::Stream" || "AWS::Kinesis::StreamConsumer" || "AWS::CodeDeploy::Application" || "AWS::CodeDeploy::DeploymentConfig" || "AWS::CodeDeploy::DeploymentGroup" || "AWS::EC2::LaunchTemplate" || "AWS::ECR::PublicRepository" || "AWS::GuardDuty::Detector" || "AWS::EMR::SecurityConfiguration" || "AWS::SageMaker::CodeRepository" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::Route53Resolver::ResolverRule" || "AWS::Route53Resolver::ResolverRuleAssociation" || "AWS::DMS::ReplicationSubnetGroup" || "AWS::DMS::EventSubscription" || "AWS::MSK::Cluster" || "AWS::StepFunctions::Activity" || "AWS::WorkSpaces::Workspace" || "AWS::WorkSpaces::ConnectionAlias" || "AWS::SageMaker::Model" || "AWS::ElasticLoadBalancingV2::Listener" || "AWS::StepFunctions::StateMachine" || "AWS::Batch::JobQueue" || "AWS::Batch::ComputeEnvironment" || "AWS::AccessAnalyzer::Analyzer" || "AWS::Athena::WorkGroup" || "AWS::Athena::DataCatalog" || "AWS::Detective::Graph" || "AWS::GlobalAccelerator::Accelerator" || "AWS::GlobalAccelerator::EndpointGroup" || "AWS::GlobalAccelerator::Listener" || "AWS::EC2::TransitGatewayAttachment" || "AWS::EC2::TransitGatewayRouteTable" || "AWS::DMS::Certificate" || "AWS::AppConfig::Application" || "AWS::AppSync::GraphQLApi" || "AWS::DataSync::LocationSMB" || "AWS::DataSync::LocationFSxLustre" || "AWS::DataSync::LocationS3" || "AWS::DataSync::LocationEFS" || "AWS::DataSync::Task" || "AWS::DataSync::LocationNFS" || "AWS::EC2::NetworkInsightsAccessScopeAnalysis" || "AWS::EKS::FargateProfile" || "AWS::Glue::Job" || "AWS::GuardDuty::ThreatIntelSet" || "AWS::GuardDuty::IPSet" || "AWS::SageMaker::Workteam" || "AWS::SageMaker::NotebookInstanceLifecycleConfig" || "AWS::ServiceDiscovery::Service" || "AWS::ServiceDiscovery::PublicDnsNamespace" || "AWS::SES::ContactList" || "AWS::SES::ConfigurationSet" || "AWS::Route53::HostedZone" || "AWS::IoTEvents::Input" || "AWS::IoTEvents::DetectorModel" || "AWS::IoTEvents::AlarmModel" || "AWS::ServiceDiscovery::HttpNamespace" || "AWS::Events::EventBus" || "AWS::ImageBuilder::ContainerRecipe" || "AWS::ImageBuilder::DistributionConfiguration" || "AWS::ImageBuilder::InfrastructureConfiguration" || "AWS::DataSync::LocationObjectStorage" || "AWS::DataSync::LocationHDFS" || "AWS::Glue::Classifier" || "AWS::Route53RecoveryReadiness::Cell" || "AWS::Route53RecoveryReadiness::ReadinessCheck" || "AWS::ECR::RegistryPolicy" || "AWS::Backup::ReportPlan" || "AWS::Lightsail::Certificate" || "AWS::RUM::AppMonitor" || "AWS::Events::Endpoint" || "AWS::SES::ReceiptRuleSet" || "AWS::Events::Archive" || "AWS::Events::ApiDestination" || "AWS::Lightsail::Disk" || "AWS::FIS::ExperimentTemplate" || "AWS::DataSync::LocationFSxWindows" || "AWS::SES::ReceiptFilter" || "AWS::GuardDuty::Filter" || "AWS::SES::Template" || "AWS::AmazonMQ::Broker" || "AWS::AppConfig::Environment" || "AWS::AppConfig::ConfigurationProfile" || "AWS::Cloud9::EnvironmentEC2" || "AWS::EventSchemas::Registry" || "AWS::EventSchemas::RegistryPolicy" || "AWS::EventSchemas::Discoverer" || "AWS::FraudDetector::Label" || "AWS::FraudDetector::EntityType" || "AWS::FraudDetector::Variable" || "AWS::FraudDetector::Outcome" || "AWS::IoT::Authorizer" || "AWS::IoT::SecurityProfile" || "AWS::IoT::RoleAlias" || "AWS::IoT::Dimension" || "AWS::IoTAnalytics::Datastore" || "AWS::Lightsail::Bucket" || "AWS::Lightsail::StaticIp" || "AWS::MediaPackage::PackagingGroup" || "AWS::Route53RecoveryReadiness::RecoveryGroup" || "AWS::ResilienceHub::ResiliencyPolicy" || "AWS::Transfer::Workflow" || "AWS::EKS::IdentityProviderConfig" || "AWS::EKS::Addon" || "AWS::Glue::MLTransform" || "AWS::IoT::Policy" || "AWS::IoT::MitigationAction" || "AWS::IoTTwinMaker::Workspace" || "AWS::IoTTwinMaker::Entity" || "AWS::IoTAnalytics::Dataset" || "AWS::IoTAnalytics::Pipeline" || "AWS::IoTAnalytics::Channel" || "AWS::IoTSiteWise::Dashboard" || "AWS::IoTSiteWise::Project" || "AWS::IoTSiteWise::Portal" || "AWS::IoTSiteWise::AssetModel" || "AWS::IVS::Channel" || "AWS::IVS::RecordingConfiguration" || "AWS::IVS::PlaybackKeyPair" || "AWS::KinesisAnalyticsV2::Application" || "AWS::RDS::GlobalCluster" || "AWS::S3::MultiRegionAccessPoint" || "AWS::DeviceFarm::TestGridProject" || "AWS::Budgets::BudgetsAction" || "AWS::Lex::Bot" || "AWS::CodeGuruReviewer::RepositoryAssociation" || "AWS::IoT::CustomMetric" || "AWS::Route53Resolver::FirewallDomainList" || "AWS::RoboMaker::RobotApplicationVersion" || "AWS::EC2::TrafficMirrorSession" || "AWS::IoTSiteWise::Gateway" || "AWS::Lex::BotAlias" || "AWS::LookoutMetrics::Alert" || "AWS::IoT::AccountAuditConfiguration" || "AWS::EC2::TrafficMirrorTarget" || "AWS::S3::StorageLens" || "AWS::IoT::ScheduledAudit" || "AWS::Events::Connection" || "AWS::EventSchemas::Schema" || "AWS::MediaPackage::PackagingConfiguration" || "AWS::KinesisVideo::SignalingChannel" || "AWS::AppStream::DirectoryConfig" || "AWS::LookoutVision::Project" || "AWS::Route53RecoveryControl::Cluster" || "AWS::Route53RecoveryControl::SafetyRule" || "AWS::Route53RecoveryControl::ControlPanel" || "AWS::Route53RecoveryControl::RoutingControl" || "AWS::Route53RecoveryReadiness::ResourceSet" || "AWS::RoboMaker::SimulationApplication" || "AWS::RoboMaker::RobotApplication" || "AWS::HealthLake::FHIRDatastore" || "AWS::Pinpoint::Segment" || "AWS::Pinpoint::ApplicationSettings" || "AWS::Events::Rule" || "AWS::EC2::DHCPOptions" || "AWS::EC2::NetworkInsightsPath" || "AWS::EC2::TrafficMirrorFilter" || "AWS::EC2::IPAM" || "AWS::IoTTwinMaker::Scene" || "AWS::NetworkManager::TransitGatewayRegistration" || "AWS::CustomerProfiles::Domain" || "AWS::AutoScaling::WarmPool" || "AWS::Connect::PhoneNumber" || "AWS::AppConfig::DeploymentStrategy" || "AWS::AppFlow::Flow" || "AWS::AuditManager::Assessment" || "AWS::CloudWatch::MetricStream" || "AWS::DeviceFarm::InstanceProfile" || "AWS::DeviceFarm::Project" || "AWS::EC2::EC2Fleet" || "AWS::EC2::SubnetRouteTableAssociation" || "AWS::ECR::PullThroughCacheRule" || "AWS::GroundStation::Config" || "AWS::ImageBuilder::ImagePipeline" || "AWS::IoT::FleetMetric" || "AWS::IoTWireless::ServiceProfile" || "AWS::NetworkManager::Device" || "AWS::NetworkManager::GlobalNetwork" || "AWS::NetworkManager::Link" || "AWS::NetworkManager::Site" || "AWS::Panorama::Package" || "AWS::Pinpoint::App" || "AWS::Redshift::ScheduledAction" || "AWS::Route53Resolver::FirewallRuleGroupAssociation" || "AWS::SageMaker::AppImageConfig" || "AWS::SageMaker::Image" || "AWS::ECS::TaskSet" || "AWS::Cassandra::Keyspace" || "AWS::Signer::SigningProfile" || "AWS::Amplify::App" || "AWS::AppMesh::VirtualNode" || "AWS::AppMesh::VirtualService" || "AWS::AppRunner::VpcConnector" || "AWS::AppStream::Application" || "AWS::CodeArtifact::Repository" || "AWS::EC2::PrefixList" || "AWS::EC2::SpotFleet" || "AWS::Evidently::Project" || "AWS::Forecast::Dataset" || "AWS::IAM::SAMLProvider" || "AWS::IAM::ServerCertificate" || "AWS::Pinpoint::Campaign" || "AWS::Pinpoint::InAppTemplate" || "AWS::SageMaker::Domain" || "AWS::Transfer::Agreement" || "AWS::Transfer::Connector" || "AWS::KinesisFirehose::DeliveryStream",
 * //           ],
 * //         },
 * //         recordingStrategy: { // RecordingStrategy
 * //           useOnly: "ALL_SUPPORTED_RESOURCE_TYPES" || "INCLUSION_BY_RESOURCE_TYPES" || "EXCLUSION_BY_RESOURCE_TYPES",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRecordersCommandInput - {@link DescribeConfigurationRecordersCommandInput}
 * @returns {@link DescribeConfigurationRecordersCommandOutput}
 * @see {@link DescribeConfigurationRecordersCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecordersCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConfigurationRecordersCommand extends $Command<
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeConfigurationRecordersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRecordersCommandInput, DescribeConfigurationRecordersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationRecordersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationRecordersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeConfigurationRecordersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConfigurationRecordersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRecordersCommandOutput> {
    return de_DescribeConfigurationRecordersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
