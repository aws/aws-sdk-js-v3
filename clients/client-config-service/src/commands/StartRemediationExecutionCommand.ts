// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartRemediationExecutionRequest, StartRemediationExecutionResponse } from "../models/models_1";
import { de_StartRemediationExecutionCommand, se_StartRemediationExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartRemediationExecutionCommand}.
 */
export interface StartRemediationExecutionCommandInput extends StartRemediationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartRemediationExecutionCommand}.
 */
export interface StartRemediationExecutionCommandOutput extends StartRemediationExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
 *          <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartRemediationExecutionCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartRemediationExecutionCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // StartRemediationExecutionRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // ResourceKeys // required
 *     { // ResourceKey
 *       resourceType: "AWS::EC2::CustomerGateway" || "AWS::EC2::EIP" || "AWS::EC2::Host" || "AWS::EC2::Instance" || "AWS::EC2::InternetGateway" || "AWS::EC2::NetworkAcl" || "AWS::EC2::NetworkInterface" || "AWS::EC2::RouteTable" || "AWS::EC2::SecurityGroup" || "AWS::EC2::Subnet" || "AWS::CloudTrail::Trail" || "AWS::EC2::Volume" || "AWS::EC2::VPC" || "AWS::EC2::VPNConnection" || "AWS::EC2::VPNGateway" || "AWS::EC2::RegisteredHAInstance" || "AWS::EC2::NatGateway" || "AWS::EC2::EgressOnlyInternetGateway" || "AWS::EC2::VPCEndpoint" || "AWS::EC2::VPCEndpointService" || "AWS::EC2::FlowLog" || "AWS::EC2::VPCPeeringConnection" || "AWS::Elasticsearch::Domain" || "AWS::IAM::Group" || "AWS::IAM::Policy" || "AWS::IAM::Role" || "AWS::IAM::User" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::ACM::Certificate" || "AWS::RDS::DBInstance" || "AWS::RDS::DBSubnetGroup" || "AWS::RDS::DBSecurityGroup" || "AWS::RDS::DBSnapshot" || "AWS::RDS::DBCluster" || "AWS::RDS::DBClusterSnapshot" || "AWS::RDS::EventSubscription" || "AWS::S3::Bucket" || "AWS::S3::AccountPublicAccessBlock" || "AWS::Redshift::Cluster" || "AWS::Redshift::ClusterSnapshot" || "AWS::Redshift::ClusterParameterGroup" || "AWS::Redshift::ClusterSecurityGroup" || "AWS::Redshift::ClusterSubnetGroup" || "AWS::Redshift::EventSubscription" || "AWS::SSM::ManagedInstanceInventory" || "AWS::CloudWatch::Alarm" || "AWS::CloudFormation::Stack" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::AutoScaling::AutoScalingGroup" || "AWS::AutoScaling::LaunchConfiguration" || "AWS::AutoScaling::ScalingPolicy" || "AWS::AutoScaling::ScheduledAction" || "AWS::DynamoDB::Table" || "AWS::CodeBuild::Project" || "AWS::WAF::RateBasedRule" || "AWS::WAF::Rule" || "AWS::WAF::RuleGroup" || "AWS::WAF::WebACL" || "AWS::WAFRegional::RateBasedRule" || "AWS::WAFRegional::Rule" || "AWS::WAFRegional::RuleGroup" || "AWS::WAFRegional::WebACL" || "AWS::CloudFront::Distribution" || "AWS::CloudFront::StreamingDistribution" || "AWS::Lambda::Function" || "AWS::NetworkFirewall::Firewall" || "AWS::NetworkFirewall::FirewallPolicy" || "AWS::NetworkFirewall::RuleGroup" || "AWS::ElasticBeanstalk::Application" || "AWS::ElasticBeanstalk::ApplicationVersion" || "AWS::ElasticBeanstalk::Environment" || "AWS::WAFv2::WebACL" || "AWS::WAFv2::RuleGroup" || "AWS::WAFv2::IPSet" || "AWS::WAFv2::RegexPatternSet" || "AWS::WAFv2::ManagedRuleSet" || "AWS::XRay::EncryptionConfig" || "AWS::SSM::AssociationCompliance" || "AWS::SSM::PatchCompliance" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection" || "AWS::Config::ConformancePackCompliance" || "AWS::Config::ResourceCompliance" || "AWS::ApiGateway::Stage" || "AWS::ApiGateway::RestApi" || "AWS::ApiGatewayV2::Stage" || "AWS::ApiGatewayV2::Api" || "AWS::CodePipeline::Pipeline" || "AWS::ServiceCatalog::CloudFormationProvisionedProduct" || "AWS::ServiceCatalog::CloudFormationProduct" || "AWS::ServiceCatalog::Portfolio" || "AWS::SQS::Queue" || "AWS::KMS::Key" || "AWS::QLDB::Ledger" || "AWS::SecretsManager::Secret" || "AWS::SNS::Topic" || "AWS::SSM::FileData" || "AWS::Backup::BackupPlan" || "AWS::Backup::BackupSelection" || "AWS::Backup::BackupVault" || "AWS::Backup::RecoveryPoint" || "AWS::ECR::Repository" || "AWS::ECS::Cluster" || "AWS::ECS::Service" || "AWS::ECS::TaskDefinition" || "AWS::EFS::AccessPoint" || "AWS::EFS::FileSystem" || "AWS::EKS::Cluster" || "AWS::OpenSearch::Domain" || "AWS::EC2::TransitGateway" || "AWS::Kinesis::Stream" || "AWS::Kinesis::StreamConsumer" || "AWS::CodeDeploy::Application" || "AWS::CodeDeploy::DeploymentConfig" || "AWS::CodeDeploy::DeploymentGroup" || "AWS::EC2::LaunchTemplate" || "AWS::ECR::PublicRepository" || "AWS::GuardDuty::Detector" || "AWS::EMR::SecurityConfiguration" || "AWS::SageMaker::CodeRepository" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::Route53Resolver::ResolverRule" || "AWS::Route53Resolver::ResolverRuleAssociation" || "AWS::DMS::ReplicationSubnetGroup" || "AWS::DMS::EventSubscription" || "AWS::MSK::Cluster" || "AWS::StepFunctions::Activity" || "AWS::WorkSpaces::Workspace" || "AWS::WorkSpaces::ConnectionAlias" || "AWS::SageMaker::Model" || "AWS::ElasticLoadBalancingV2::Listener" || "AWS::StepFunctions::StateMachine" || "AWS::Batch::JobQueue" || "AWS::Batch::ComputeEnvironment" || "AWS::AccessAnalyzer::Analyzer" || "AWS::Athena::WorkGroup" || "AWS::Athena::DataCatalog" || "AWS::Detective::Graph" || "AWS::GlobalAccelerator::Accelerator" || "AWS::GlobalAccelerator::EndpointGroup" || "AWS::GlobalAccelerator::Listener" || "AWS::EC2::TransitGatewayAttachment" || "AWS::EC2::TransitGatewayRouteTable" || "AWS::DMS::Certificate" || "AWS::AppConfig::Application" || "AWS::AppSync::GraphQLApi" || "AWS::DataSync::LocationSMB" || "AWS::DataSync::LocationFSxLustre" || "AWS::DataSync::LocationS3" || "AWS::DataSync::LocationEFS" || "AWS::DataSync::Task" || "AWS::DataSync::LocationNFS" || "AWS::EC2::NetworkInsightsAccessScopeAnalysis" || "AWS::EKS::FargateProfile" || "AWS::Glue::Job" || "AWS::GuardDuty::ThreatIntelSet" || "AWS::GuardDuty::IPSet" || "AWS::SageMaker::Workteam" || "AWS::SageMaker::NotebookInstanceLifecycleConfig" || "AWS::ServiceDiscovery::Service" || "AWS::ServiceDiscovery::PublicDnsNamespace" || "AWS::SES::ContactList" || "AWS::SES::ConfigurationSet" || "AWS::Route53::HostedZone" || "AWS::IoTEvents::Input" || "AWS::IoTEvents::DetectorModel" || "AWS::IoTEvents::AlarmModel" || "AWS::ServiceDiscovery::HttpNamespace" || "AWS::Events::EventBus" || "AWS::ImageBuilder::ContainerRecipe" || "AWS::ImageBuilder::DistributionConfiguration" || "AWS::ImageBuilder::InfrastructureConfiguration" || "AWS::DataSync::LocationObjectStorage" || "AWS::DataSync::LocationHDFS" || "AWS::Glue::Classifier" || "AWS::Route53RecoveryReadiness::Cell" || "AWS::Route53RecoveryReadiness::ReadinessCheck" || "AWS::ECR::RegistryPolicy" || "AWS::Backup::ReportPlan" || "AWS::Lightsail::Certificate" || "AWS::RUM::AppMonitor" || "AWS::Events::Endpoint" || "AWS::SES::ReceiptRuleSet" || "AWS::Events::Archive" || "AWS::Events::ApiDestination" || "AWS::Lightsail::Disk" || "AWS::FIS::ExperimentTemplate" || "AWS::DataSync::LocationFSxWindows" || "AWS::SES::ReceiptFilter" || "AWS::GuardDuty::Filter" || "AWS::SES::Template" || "AWS::AmazonMQ::Broker" || "AWS::AppConfig::Environment" || "AWS::AppConfig::ConfigurationProfile" || "AWS::Cloud9::EnvironmentEC2" || "AWS::EventSchemas::Registry" || "AWS::EventSchemas::RegistryPolicy" || "AWS::EventSchemas::Discoverer" || "AWS::FraudDetector::Label" || "AWS::FraudDetector::EntityType" || "AWS::FraudDetector::Variable" || "AWS::FraudDetector::Outcome" || "AWS::IoT::Authorizer" || "AWS::IoT::SecurityProfile" || "AWS::IoT::RoleAlias" || "AWS::IoT::Dimension" || "AWS::IoTAnalytics::Datastore" || "AWS::Lightsail::Bucket" || "AWS::Lightsail::StaticIp" || "AWS::MediaPackage::PackagingGroup" || "AWS::Route53RecoveryReadiness::RecoveryGroup" || "AWS::ResilienceHub::ResiliencyPolicy" || "AWS::Transfer::Workflow" || "AWS::EKS::IdentityProviderConfig" || "AWS::EKS::Addon" || "AWS::Glue::MLTransform" || "AWS::IoT::Policy" || "AWS::IoT::MitigationAction" || "AWS::IoTTwinMaker::Workspace" || "AWS::IoTTwinMaker::Entity" || "AWS::IoTAnalytics::Dataset" || "AWS::IoTAnalytics::Pipeline" || "AWS::IoTAnalytics::Channel" || "AWS::IoTSiteWise::Dashboard" || "AWS::IoTSiteWise::Project" || "AWS::IoTSiteWise::Portal" || "AWS::IoTSiteWise::AssetModel" || "AWS::IVS::Channel" || "AWS::IVS::RecordingConfiguration" || "AWS::IVS::PlaybackKeyPair" || "AWS::KinesisAnalyticsV2::Application" || "AWS::RDS::GlobalCluster" || "AWS::S3::MultiRegionAccessPoint" || "AWS::DeviceFarm::TestGridProject" || "AWS::Budgets::BudgetsAction" || "AWS::Lex::Bot" || "AWS::CodeGuruReviewer::RepositoryAssociation" || "AWS::IoT::CustomMetric" || "AWS::Route53Resolver::FirewallDomainList" || "AWS::RoboMaker::RobotApplicationVersion" || "AWS::EC2::TrafficMirrorSession" || "AWS::IoTSiteWise::Gateway" || "AWS::Lex::BotAlias" || "AWS::LookoutMetrics::Alert" || "AWS::IoT::AccountAuditConfiguration" || "AWS::EC2::TrafficMirrorTarget" || "AWS::S3::StorageLens" || "AWS::IoT::ScheduledAudit" || "AWS::Events::Connection" || "AWS::EventSchemas::Schema" || "AWS::MediaPackage::PackagingConfiguration" || "AWS::KinesisVideo::SignalingChannel" || "AWS::AppStream::DirectoryConfig" || "AWS::LookoutVision::Project" || "AWS::Route53RecoveryControl::Cluster" || "AWS::Route53RecoveryControl::SafetyRule" || "AWS::Route53RecoveryControl::ControlPanel" || "AWS::Route53RecoveryControl::RoutingControl" || "AWS::Route53RecoveryReadiness::ResourceSet" || "AWS::RoboMaker::SimulationApplication" || "AWS::RoboMaker::RobotApplication" || "AWS::HealthLake::FHIRDatastore" || "AWS::Pinpoint::Segment" || "AWS::Pinpoint::ApplicationSettings" || "AWS::Events::Rule" || "AWS::EC2::DHCPOptions" || "AWS::EC2::NetworkInsightsPath" || "AWS::EC2::TrafficMirrorFilter" || "AWS::EC2::IPAM" || "AWS::IoTTwinMaker::Scene" || "AWS::NetworkManager::TransitGatewayRegistration" || "AWS::CustomerProfiles::Domain" || "AWS::AutoScaling::WarmPool" || "AWS::Connect::PhoneNumber" || "AWS::AppConfig::DeploymentStrategy" || "AWS::AppFlow::Flow" || "AWS::AuditManager::Assessment" || "AWS::CloudWatch::MetricStream" || "AWS::DeviceFarm::InstanceProfile" || "AWS::DeviceFarm::Project" || "AWS::EC2::EC2Fleet" || "AWS::EC2::SubnetRouteTableAssociation" || "AWS::ECR::PullThroughCacheRule" || "AWS::GroundStation::Config" || "AWS::ImageBuilder::ImagePipeline" || "AWS::IoT::FleetMetric" || "AWS::IoTWireless::ServiceProfile" || "AWS::NetworkManager::Device" || "AWS::NetworkManager::GlobalNetwork" || "AWS::NetworkManager::Link" || "AWS::NetworkManager::Site" || "AWS::Panorama::Package" || "AWS::Pinpoint::App" || "AWS::Redshift::ScheduledAction" || "AWS::Route53Resolver::FirewallRuleGroupAssociation" || "AWS::SageMaker::AppImageConfig" || "AWS::SageMaker::Image", // required
 *       resourceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartRemediationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartRemediationExecutionResponse
 * //   FailureMessage: "STRING_VALUE",
 * //   FailedItems: [ // ResourceKeys
 * //     { // ResourceKey
 * //       resourceType: "AWS::EC2::CustomerGateway" || "AWS::EC2::EIP" || "AWS::EC2::Host" || "AWS::EC2::Instance" || "AWS::EC2::InternetGateway" || "AWS::EC2::NetworkAcl" || "AWS::EC2::NetworkInterface" || "AWS::EC2::RouteTable" || "AWS::EC2::SecurityGroup" || "AWS::EC2::Subnet" || "AWS::CloudTrail::Trail" || "AWS::EC2::Volume" || "AWS::EC2::VPC" || "AWS::EC2::VPNConnection" || "AWS::EC2::VPNGateway" || "AWS::EC2::RegisteredHAInstance" || "AWS::EC2::NatGateway" || "AWS::EC2::EgressOnlyInternetGateway" || "AWS::EC2::VPCEndpoint" || "AWS::EC2::VPCEndpointService" || "AWS::EC2::FlowLog" || "AWS::EC2::VPCPeeringConnection" || "AWS::Elasticsearch::Domain" || "AWS::IAM::Group" || "AWS::IAM::Policy" || "AWS::IAM::Role" || "AWS::IAM::User" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::ACM::Certificate" || "AWS::RDS::DBInstance" || "AWS::RDS::DBSubnetGroup" || "AWS::RDS::DBSecurityGroup" || "AWS::RDS::DBSnapshot" || "AWS::RDS::DBCluster" || "AWS::RDS::DBClusterSnapshot" || "AWS::RDS::EventSubscription" || "AWS::S3::Bucket" || "AWS::S3::AccountPublicAccessBlock" || "AWS::Redshift::Cluster" || "AWS::Redshift::ClusterSnapshot" || "AWS::Redshift::ClusterParameterGroup" || "AWS::Redshift::ClusterSecurityGroup" || "AWS::Redshift::ClusterSubnetGroup" || "AWS::Redshift::EventSubscription" || "AWS::SSM::ManagedInstanceInventory" || "AWS::CloudWatch::Alarm" || "AWS::CloudFormation::Stack" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::AutoScaling::AutoScalingGroup" || "AWS::AutoScaling::LaunchConfiguration" || "AWS::AutoScaling::ScalingPolicy" || "AWS::AutoScaling::ScheduledAction" || "AWS::DynamoDB::Table" || "AWS::CodeBuild::Project" || "AWS::WAF::RateBasedRule" || "AWS::WAF::Rule" || "AWS::WAF::RuleGroup" || "AWS::WAF::WebACL" || "AWS::WAFRegional::RateBasedRule" || "AWS::WAFRegional::Rule" || "AWS::WAFRegional::RuleGroup" || "AWS::WAFRegional::WebACL" || "AWS::CloudFront::Distribution" || "AWS::CloudFront::StreamingDistribution" || "AWS::Lambda::Function" || "AWS::NetworkFirewall::Firewall" || "AWS::NetworkFirewall::FirewallPolicy" || "AWS::NetworkFirewall::RuleGroup" || "AWS::ElasticBeanstalk::Application" || "AWS::ElasticBeanstalk::ApplicationVersion" || "AWS::ElasticBeanstalk::Environment" || "AWS::WAFv2::WebACL" || "AWS::WAFv2::RuleGroup" || "AWS::WAFv2::IPSet" || "AWS::WAFv2::RegexPatternSet" || "AWS::WAFv2::ManagedRuleSet" || "AWS::XRay::EncryptionConfig" || "AWS::SSM::AssociationCompliance" || "AWS::SSM::PatchCompliance" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection" || "AWS::Config::ConformancePackCompliance" || "AWS::Config::ResourceCompliance" || "AWS::ApiGateway::Stage" || "AWS::ApiGateway::RestApi" || "AWS::ApiGatewayV2::Stage" || "AWS::ApiGatewayV2::Api" || "AWS::CodePipeline::Pipeline" || "AWS::ServiceCatalog::CloudFormationProvisionedProduct" || "AWS::ServiceCatalog::CloudFormationProduct" || "AWS::ServiceCatalog::Portfolio" || "AWS::SQS::Queue" || "AWS::KMS::Key" || "AWS::QLDB::Ledger" || "AWS::SecretsManager::Secret" || "AWS::SNS::Topic" || "AWS::SSM::FileData" || "AWS::Backup::BackupPlan" || "AWS::Backup::BackupSelection" || "AWS::Backup::BackupVault" || "AWS::Backup::RecoveryPoint" || "AWS::ECR::Repository" || "AWS::ECS::Cluster" || "AWS::ECS::Service" || "AWS::ECS::TaskDefinition" || "AWS::EFS::AccessPoint" || "AWS::EFS::FileSystem" || "AWS::EKS::Cluster" || "AWS::OpenSearch::Domain" || "AWS::EC2::TransitGateway" || "AWS::Kinesis::Stream" || "AWS::Kinesis::StreamConsumer" || "AWS::CodeDeploy::Application" || "AWS::CodeDeploy::DeploymentConfig" || "AWS::CodeDeploy::DeploymentGroup" || "AWS::EC2::LaunchTemplate" || "AWS::ECR::PublicRepository" || "AWS::GuardDuty::Detector" || "AWS::EMR::SecurityConfiguration" || "AWS::SageMaker::CodeRepository" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::Route53Resolver::ResolverRule" || "AWS::Route53Resolver::ResolverRuleAssociation" || "AWS::DMS::ReplicationSubnetGroup" || "AWS::DMS::EventSubscription" || "AWS::MSK::Cluster" || "AWS::StepFunctions::Activity" || "AWS::WorkSpaces::Workspace" || "AWS::WorkSpaces::ConnectionAlias" || "AWS::SageMaker::Model" || "AWS::ElasticLoadBalancingV2::Listener" || "AWS::StepFunctions::StateMachine" || "AWS::Batch::JobQueue" || "AWS::Batch::ComputeEnvironment" || "AWS::AccessAnalyzer::Analyzer" || "AWS::Athena::WorkGroup" || "AWS::Athena::DataCatalog" || "AWS::Detective::Graph" || "AWS::GlobalAccelerator::Accelerator" || "AWS::GlobalAccelerator::EndpointGroup" || "AWS::GlobalAccelerator::Listener" || "AWS::EC2::TransitGatewayAttachment" || "AWS::EC2::TransitGatewayRouteTable" || "AWS::DMS::Certificate" || "AWS::AppConfig::Application" || "AWS::AppSync::GraphQLApi" || "AWS::DataSync::LocationSMB" || "AWS::DataSync::LocationFSxLustre" || "AWS::DataSync::LocationS3" || "AWS::DataSync::LocationEFS" || "AWS::DataSync::Task" || "AWS::DataSync::LocationNFS" || "AWS::EC2::NetworkInsightsAccessScopeAnalysis" || "AWS::EKS::FargateProfile" || "AWS::Glue::Job" || "AWS::GuardDuty::ThreatIntelSet" || "AWS::GuardDuty::IPSet" || "AWS::SageMaker::Workteam" || "AWS::SageMaker::NotebookInstanceLifecycleConfig" || "AWS::ServiceDiscovery::Service" || "AWS::ServiceDiscovery::PublicDnsNamespace" || "AWS::SES::ContactList" || "AWS::SES::ConfigurationSet" || "AWS::Route53::HostedZone" || "AWS::IoTEvents::Input" || "AWS::IoTEvents::DetectorModel" || "AWS::IoTEvents::AlarmModel" || "AWS::ServiceDiscovery::HttpNamespace" || "AWS::Events::EventBus" || "AWS::ImageBuilder::ContainerRecipe" || "AWS::ImageBuilder::DistributionConfiguration" || "AWS::ImageBuilder::InfrastructureConfiguration" || "AWS::DataSync::LocationObjectStorage" || "AWS::DataSync::LocationHDFS" || "AWS::Glue::Classifier" || "AWS::Route53RecoveryReadiness::Cell" || "AWS::Route53RecoveryReadiness::ReadinessCheck" || "AWS::ECR::RegistryPolicy" || "AWS::Backup::ReportPlan" || "AWS::Lightsail::Certificate" || "AWS::RUM::AppMonitor" || "AWS::Events::Endpoint" || "AWS::SES::ReceiptRuleSet" || "AWS::Events::Archive" || "AWS::Events::ApiDestination" || "AWS::Lightsail::Disk" || "AWS::FIS::ExperimentTemplate" || "AWS::DataSync::LocationFSxWindows" || "AWS::SES::ReceiptFilter" || "AWS::GuardDuty::Filter" || "AWS::SES::Template" || "AWS::AmazonMQ::Broker" || "AWS::AppConfig::Environment" || "AWS::AppConfig::ConfigurationProfile" || "AWS::Cloud9::EnvironmentEC2" || "AWS::EventSchemas::Registry" || "AWS::EventSchemas::RegistryPolicy" || "AWS::EventSchemas::Discoverer" || "AWS::FraudDetector::Label" || "AWS::FraudDetector::EntityType" || "AWS::FraudDetector::Variable" || "AWS::FraudDetector::Outcome" || "AWS::IoT::Authorizer" || "AWS::IoT::SecurityProfile" || "AWS::IoT::RoleAlias" || "AWS::IoT::Dimension" || "AWS::IoTAnalytics::Datastore" || "AWS::Lightsail::Bucket" || "AWS::Lightsail::StaticIp" || "AWS::MediaPackage::PackagingGroup" || "AWS::Route53RecoveryReadiness::RecoveryGroup" || "AWS::ResilienceHub::ResiliencyPolicy" || "AWS::Transfer::Workflow" || "AWS::EKS::IdentityProviderConfig" || "AWS::EKS::Addon" || "AWS::Glue::MLTransform" || "AWS::IoT::Policy" || "AWS::IoT::MitigationAction" || "AWS::IoTTwinMaker::Workspace" || "AWS::IoTTwinMaker::Entity" || "AWS::IoTAnalytics::Dataset" || "AWS::IoTAnalytics::Pipeline" || "AWS::IoTAnalytics::Channel" || "AWS::IoTSiteWise::Dashboard" || "AWS::IoTSiteWise::Project" || "AWS::IoTSiteWise::Portal" || "AWS::IoTSiteWise::AssetModel" || "AWS::IVS::Channel" || "AWS::IVS::RecordingConfiguration" || "AWS::IVS::PlaybackKeyPair" || "AWS::KinesisAnalyticsV2::Application" || "AWS::RDS::GlobalCluster" || "AWS::S3::MultiRegionAccessPoint" || "AWS::DeviceFarm::TestGridProject" || "AWS::Budgets::BudgetsAction" || "AWS::Lex::Bot" || "AWS::CodeGuruReviewer::RepositoryAssociation" || "AWS::IoT::CustomMetric" || "AWS::Route53Resolver::FirewallDomainList" || "AWS::RoboMaker::RobotApplicationVersion" || "AWS::EC2::TrafficMirrorSession" || "AWS::IoTSiteWise::Gateway" || "AWS::Lex::BotAlias" || "AWS::LookoutMetrics::Alert" || "AWS::IoT::AccountAuditConfiguration" || "AWS::EC2::TrafficMirrorTarget" || "AWS::S3::StorageLens" || "AWS::IoT::ScheduledAudit" || "AWS::Events::Connection" || "AWS::EventSchemas::Schema" || "AWS::MediaPackage::PackagingConfiguration" || "AWS::KinesisVideo::SignalingChannel" || "AWS::AppStream::DirectoryConfig" || "AWS::LookoutVision::Project" || "AWS::Route53RecoveryControl::Cluster" || "AWS::Route53RecoveryControl::SafetyRule" || "AWS::Route53RecoveryControl::ControlPanel" || "AWS::Route53RecoveryControl::RoutingControl" || "AWS::Route53RecoveryReadiness::ResourceSet" || "AWS::RoboMaker::SimulationApplication" || "AWS::RoboMaker::RobotApplication" || "AWS::HealthLake::FHIRDatastore" || "AWS::Pinpoint::Segment" || "AWS::Pinpoint::ApplicationSettings" || "AWS::Events::Rule" || "AWS::EC2::DHCPOptions" || "AWS::EC2::NetworkInsightsPath" || "AWS::EC2::TrafficMirrorFilter" || "AWS::EC2::IPAM" || "AWS::IoTTwinMaker::Scene" || "AWS::NetworkManager::TransitGatewayRegistration" || "AWS::CustomerProfiles::Domain" || "AWS::AutoScaling::WarmPool" || "AWS::Connect::PhoneNumber" || "AWS::AppConfig::DeploymentStrategy" || "AWS::AppFlow::Flow" || "AWS::AuditManager::Assessment" || "AWS::CloudWatch::MetricStream" || "AWS::DeviceFarm::InstanceProfile" || "AWS::DeviceFarm::Project" || "AWS::EC2::EC2Fleet" || "AWS::EC2::SubnetRouteTableAssociation" || "AWS::ECR::PullThroughCacheRule" || "AWS::GroundStation::Config" || "AWS::ImageBuilder::ImagePipeline" || "AWS::IoT::FleetMetric" || "AWS::IoTWireless::ServiceProfile" || "AWS::NetworkManager::Device" || "AWS::NetworkManager::GlobalNetwork" || "AWS::NetworkManager::Link" || "AWS::NetworkManager::Site" || "AWS::Panorama::Package" || "AWS::Pinpoint::App" || "AWS::Redshift::ScheduledAction" || "AWS::Route53Resolver::FirewallRuleGroupAssociation" || "AWS::SageMaker::AppImageConfig" || "AWS::SageMaker::Image", // required
 * //       resourceId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartRemediationExecutionCommandInput - {@link StartRemediationExecutionCommandInput}
 * @returns {@link StartRemediationExecutionCommandOutput}
 * @see {@link StartRemediationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartRemediationExecutionCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchRemediationConfigurationException} (client fault)
 *  <p>You specified an Config rule without a remediation configuration.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class StartRemediationExecutionCommand extends $Command<
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
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
  constructor(readonly input: StartRemediationExecutionCommandInput) {
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
  ): Handler<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartRemediationExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartRemediationExecutionCommand";
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
  private serialize(input: StartRemediationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartRemediationExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartRemediationExecutionCommandOutput> {
    return de_StartRemediationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
