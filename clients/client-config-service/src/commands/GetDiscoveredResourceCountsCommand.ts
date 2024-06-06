// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDiscoveredResourceCountsRequest, GetDiscoveredResourceCountsResponse } from "../models/models_0";
import { de_GetDiscoveredResourceCountsCommand, se_GetDiscoveredResourceCountsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDiscoveredResourceCountsCommand}.
 */
export interface GetDiscoveredResourceCountsCommandInput extends GetDiscoveredResourceCountsRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoveredResourceCountsCommand}.
 */
export interface GetDiscoveredResourceCountsCommandOutput
  extends GetDiscoveredResourceCountsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the resource types, the number of each resource type,
 * 			and the total number of resources that Config is recording in
 * 			this region for your Amazon Web Services account. </p>
 *          <p class="title">
 *             <b>Example</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>Config is recording three resource types in the US
 * 					East (Ohio) Region for your account: 25 EC2 instances, 20
 * 					IAM users, and 15 S3 buckets.</p>
 *             </li>
 *             <li>
 *                <p>You make a call to the
 * 						<code>GetDiscoveredResourceCounts</code> action and
 * 					specify that you want all resource types. </p>
 *             </li>
 *             <li>
 *                <p>Config returns the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>The resource types (EC2 instances, IAM users,
 * 							and S3 buckets).</p>
 *                   </li>
 *                   <li>
 *                      <p>The number of each resource type (25, 20, and
 * 							15).</p>
 *                   </li>
 *                   <li>
 *                      <p>The total number of all resources
 * 							(60).</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ol>
 *          <p>The response is paginated. By default, Config lists 100
 * 				<a>ResourceCount</a> objects on each page. You can
 * 			customize this number with the <code>limit</code> parameter. The
 * 			response includes a <code>nextToken</code> string. To get the next
 * 			page of results, run the request again and specify the string for
 * 			the <code>nextToken</code> parameter.</p>
 *          <note>
 *             <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might
 * 				not immediately receive resource counts in the following
 * 				situations:</p>
 *             <ul>
 *                <li>
 *                   <p>You are a new Config customer.</p>
 *                </li>
 *                <li>
 *                   <p>You just enabled resource recording.</p>
 *                </li>
 *             </ul>
 *             <p>It might take a few minutes for Config to record and
 * 				count your resources. Wait a few minutes and then retry the
 * 					<a>GetDiscoveredResourceCounts</a> action.
 * 			</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetDiscoveredResourceCountsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetDiscoveredResourceCountsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetDiscoveredResourceCountsRequest
 *   resourceTypes: [ // ResourceTypes
 *     "STRING_VALUE",
 *   ],
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetDiscoveredResourceCountsCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoveredResourceCountsResponse
 * //   totalDiscoveredResources: Number("long"),
 * //   resourceCounts: [ // ResourceCounts
 * //     { // ResourceCount
 * //       resourceType: "AWS::EC2::CustomerGateway" || "AWS::EC2::EIP" || "AWS::EC2::Host" || "AWS::EC2::Instance" || "AWS::EC2::InternetGateway" || "AWS::EC2::NetworkAcl" || "AWS::EC2::NetworkInterface" || "AWS::EC2::RouteTable" || "AWS::EC2::SecurityGroup" || "AWS::EC2::Subnet" || "AWS::CloudTrail::Trail" || "AWS::EC2::Volume" || "AWS::EC2::VPC" || "AWS::EC2::VPNConnection" || "AWS::EC2::VPNGateway" || "AWS::EC2::RegisteredHAInstance" || "AWS::EC2::NatGateway" || "AWS::EC2::EgressOnlyInternetGateway" || "AWS::EC2::VPCEndpoint" || "AWS::EC2::VPCEndpointService" || "AWS::EC2::FlowLog" || "AWS::EC2::VPCPeeringConnection" || "AWS::Elasticsearch::Domain" || "AWS::IAM::Group" || "AWS::IAM::Policy" || "AWS::IAM::Role" || "AWS::IAM::User" || "AWS::ElasticLoadBalancingV2::LoadBalancer" || "AWS::ACM::Certificate" || "AWS::RDS::DBInstance" || "AWS::RDS::DBSubnetGroup" || "AWS::RDS::DBSecurityGroup" || "AWS::RDS::DBSnapshot" || "AWS::RDS::DBCluster" || "AWS::RDS::DBClusterSnapshot" || "AWS::RDS::EventSubscription" || "AWS::S3::Bucket" || "AWS::S3::AccountPublicAccessBlock" || "AWS::Redshift::Cluster" || "AWS::Redshift::ClusterSnapshot" || "AWS::Redshift::ClusterParameterGroup" || "AWS::Redshift::ClusterSecurityGroup" || "AWS::Redshift::ClusterSubnetGroup" || "AWS::Redshift::EventSubscription" || "AWS::SSM::ManagedInstanceInventory" || "AWS::CloudWatch::Alarm" || "AWS::CloudFormation::Stack" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::AutoScaling::AutoScalingGroup" || "AWS::AutoScaling::LaunchConfiguration" || "AWS::AutoScaling::ScalingPolicy" || "AWS::AutoScaling::ScheduledAction" || "AWS::DynamoDB::Table" || "AWS::CodeBuild::Project" || "AWS::WAF::RateBasedRule" || "AWS::WAF::Rule" || "AWS::WAF::RuleGroup" || "AWS::WAF::WebACL" || "AWS::WAFRegional::RateBasedRule" || "AWS::WAFRegional::Rule" || "AWS::WAFRegional::RuleGroup" || "AWS::WAFRegional::WebACL" || "AWS::CloudFront::Distribution" || "AWS::CloudFront::StreamingDistribution" || "AWS::Lambda::Function" || "AWS::NetworkFirewall::Firewall" || "AWS::NetworkFirewall::FirewallPolicy" || "AWS::NetworkFirewall::RuleGroup" || "AWS::ElasticBeanstalk::Application" || "AWS::ElasticBeanstalk::ApplicationVersion" || "AWS::ElasticBeanstalk::Environment" || "AWS::WAFv2::WebACL" || "AWS::WAFv2::RuleGroup" || "AWS::WAFv2::IPSet" || "AWS::WAFv2::RegexPatternSet" || "AWS::WAFv2::ManagedRuleSet" || "AWS::XRay::EncryptionConfig" || "AWS::SSM::AssociationCompliance" || "AWS::SSM::PatchCompliance" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection" || "AWS::Config::ConformancePackCompliance" || "AWS::Config::ResourceCompliance" || "AWS::ApiGateway::Stage" || "AWS::ApiGateway::RestApi" || "AWS::ApiGatewayV2::Stage" || "AWS::ApiGatewayV2::Api" || "AWS::CodePipeline::Pipeline" || "AWS::ServiceCatalog::CloudFormationProvisionedProduct" || "AWS::ServiceCatalog::CloudFormationProduct" || "AWS::ServiceCatalog::Portfolio" || "AWS::SQS::Queue" || "AWS::KMS::Key" || "AWS::QLDB::Ledger" || "AWS::SecretsManager::Secret" || "AWS::SNS::Topic" || "AWS::SSM::FileData" || "AWS::Backup::BackupPlan" || "AWS::Backup::BackupSelection" || "AWS::Backup::BackupVault" || "AWS::Backup::RecoveryPoint" || "AWS::ECR::Repository" || "AWS::ECS::Cluster" || "AWS::ECS::Service" || "AWS::ECS::TaskDefinition" || "AWS::EFS::AccessPoint" || "AWS::EFS::FileSystem" || "AWS::EKS::Cluster" || "AWS::OpenSearch::Domain" || "AWS::EC2::TransitGateway" || "AWS::Kinesis::Stream" || "AWS::Kinesis::StreamConsumer" || "AWS::CodeDeploy::Application" || "AWS::CodeDeploy::DeploymentConfig" || "AWS::CodeDeploy::DeploymentGroup" || "AWS::EC2::LaunchTemplate" || "AWS::ECR::PublicRepository" || "AWS::GuardDuty::Detector" || "AWS::EMR::SecurityConfiguration" || "AWS::SageMaker::CodeRepository" || "AWS::Route53Resolver::ResolverEndpoint" || "AWS::Route53Resolver::ResolverRule" || "AWS::Route53Resolver::ResolverRuleAssociation" || "AWS::DMS::ReplicationSubnetGroup" || "AWS::DMS::EventSubscription" || "AWS::MSK::Cluster" || "AWS::StepFunctions::Activity" || "AWS::WorkSpaces::Workspace" || "AWS::WorkSpaces::ConnectionAlias" || "AWS::SageMaker::Model" || "AWS::ElasticLoadBalancingV2::Listener" || "AWS::StepFunctions::StateMachine" || "AWS::Batch::JobQueue" || "AWS::Batch::ComputeEnvironment" || "AWS::AccessAnalyzer::Analyzer" || "AWS::Athena::WorkGroup" || "AWS::Athena::DataCatalog" || "AWS::Detective::Graph" || "AWS::GlobalAccelerator::Accelerator" || "AWS::GlobalAccelerator::EndpointGroup" || "AWS::GlobalAccelerator::Listener" || "AWS::EC2::TransitGatewayAttachment" || "AWS::EC2::TransitGatewayRouteTable" || "AWS::DMS::Certificate" || "AWS::AppConfig::Application" || "AWS::AppSync::GraphQLApi" || "AWS::DataSync::LocationSMB" || "AWS::DataSync::LocationFSxLustre" || "AWS::DataSync::LocationS3" || "AWS::DataSync::LocationEFS" || "AWS::DataSync::Task" || "AWS::DataSync::LocationNFS" || "AWS::EC2::NetworkInsightsAccessScopeAnalysis" || "AWS::EKS::FargateProfile" || "AWS::Glue::Job" || "AWS::GuardDuty::ThreatIntelSet" || "AWS::GuardDuty::IPSet" || "AWS::SageMaker::Workteam" || "AWS::SageMaker::NotebookInstanceLifecycleConfig" || "AWS::ServiceDiscovery::Service" || "AWS::ServiceDiscovery::PublicDnsNamespace" || "AWS::SES::ContactList" || "AWS::SES::ConfigurationSet" || "AWS::Route53::HostedZone" || "AWS::IoTEvents::Input" || "AWS::IoTEvents::DetectorModel" || "AWS::IoTEvents::AlarmModel" || "AWS::ServiceDiscovery::HttpNamespace" || "AWS::Events::EventBus" || "AWS::ImageBuilder::ContainerRecipe" || "AWS::ImageBuilder::DistributionConfiguration" || "AWS::ImageBuilder::InfrastructureConfiguration" || "AWS::DataSync::LocationObjectStorage" || "AWS::DataSync::LocationHDFS" || "AWS::Glue::Classifier" || "AWS::Route53RecoveryReadiness::Cell" || "AWS::Route53RecoveryReadiness::ReadinessCheck" || "AWS::ECR::RegistryPolicy" || "AWS::Backup::ReportPlan" || "AWS::Lightsail::Certificate" || "AWS::RUM::AppMonitor" || "AWS::Events::Endpoint" || "AWS::SES::ReceiptRuleSet" || "AWS::Events::Archive" || "AWS::Events::ApiDestination" || "AWS::Lightsail::Disk" || "AWS::FIS::ExperimentTemplate" || "AWS::DataSync::LocationFSxWindows" || "AWS::SES::ReceiptFilter" || "AWS::GuardDuty::Filter" || "AWS::SES::Template" || "AWS::AmazonMQ::Broker" || "AWS::AppConfig::Environment" || "AWS::AppConfig::ConfigurationProfile" || "AWS::Cloud9::EnvironmentEC2" || "AWS::EventSchemas::Registry" || "AWS::EventSchemas::RegistryPolicy" || "AWS::EventSchemas::Discoverer" || "AWS::FraudDetector::Label" || "AWS::FraudDetector::EntityType" || "AWS::FraudDetector::Variable" || "AWS::FraudDetector::Outcome" || "AWS::IoT::Authorizer" || "AWS::IoT::SecurityProfile" || "AWS::IoT::RoleAlias" || "AWS::IoT::Dimension" || "AWS::IoTAnalytics::Datastore" || "AWS::Lightsail::Bucket" || "AWS::Lightsail::StaticIp" || "AWS::MediaPackage::PackagingGroup" || "AWS::Route53RecoveryReadiness::RecoveryGroup" || "AWS::ResilienceHub::ResiliencyPolicy" || "AWS::Transfer::Workflow" || "AWS::EKS::IdentityProviderConfig" || "AWS::EKS::Addon" || "AWS::Glue::MLTransform" || "AWS::IoT::Policy" || "AWS::IoT::MitigationAction" || "AWS::IoTTwinMaker::Workspace" || "AWS::IoTTwinMaker::Entity" || "AWS::IoTAnalytics::Dataset" || "AWS::IoTAnalytics::Pipeline" || "AWS::IoTAnalytics::Channel" || "AWS::IoTSiteWise::Dashboard" || "AWS::IoTSiteWise::Project" || "AWS::IoTSiteWise::Portal" || "AWS::IoTSiteWise::AssetModel" || "AWS::IVS::Channel" || "AWS::IVS::RecordingConfiguration" || "AWS::IVS::PlaybackKeyPair" || "AWS::KinesisAnalyticsV2::Application" || "AWS::RDS::GlobalCluster" || "AWS::S3::MultiRegionAccessPoint" || "AWS::DeviceFarm::TestGridProject" || "AWS::Budgets::BudgetsAction" || "AWS::Lex::Bot" || "AWS::CodeGuruReviewer::RepositoryAssociation" || "AWS::IoT::CustomMetric" || "AWS::Route53Resolver::FirewallDomainList" || "AWS::RoboMaker::RobotApplicationVersion" || "AWS::EC2::TrafficMirrorSession" || "AWS::IoTSiteWise::Gateway" || "AWS::Lex::BotAlias" || "AWS::LookoutMetrics::Alert" || "AWS::IoT::AccountAuditConfiguration" || "AWS::EC2::TrafficMirrorTarget" || "AWS::S3::StorageLens" || "AWS::IoT::ScheduledAudit" || "AWS::Events::Connection" || "AWS::EventSchemas::Schema" || "AWS::MediaPackage::PackagingConfiguration" || "AWS::KinesisVideo::SignalingChannel" || "AWS::AppStream::DirectoryConfig" || "AWS::LookoutVision::Project" || "AWS::Route53RecoveryControl::Cluster" || "AWS::Route53RecoveryControl::SafetyRule" || "AWS::Route53RecoveryControl::ControlPanel" || "AWS::Route53RecoveryControl::RoutingControl" || "AWS::Route53RecoveryReadiness::ResourceSet" || "AWS::RoboMaker::SimulationApplication" || "AWS::RoboMaker::RobotApplication" || "AWS::HealthLake::FHIRDatastore" || "AWS::Pinpoint::Segment" || "AWS::Pinpoint::ApplicationSettings" || "AWS::Events::Rule" || "AWS::EC2::DHCPOptions" || "AWS::EC2::NetworkInsightsPath" || "AWS::EC2::TrafficMirrorFilter" || "AWS::EC2::IPAM" || "AWS::IoTTwinMaker::Scene" || "AWS::NetworkManager::TransitGatewayRegistration" || "AWS::CustomerProfiles::Domain" || "AWS::AutoScaling::WarmPool" || "AWS::Connect::PhoneNumber" || "AWS::AppConfig::DeploymentStrategy" || "AWS::AppFlow::Flow" || "AWS::AuditManager::Assessment" || "AWS::CloudWatch::MetricStream" || "AWS::DeviceFarm::InstanceProfile" || "AWS::DeviceFarm::Project" || "AWS::EC2::EC2Fleet" || "AWS::EC2::SubnetRouteTableAssociation" || "AWS::ECR::PullThroughCacheRule" || "AWS::GroundStation::Config" || "AWS::ImageBuilder::ImagePipeline" || "AWS::IoT::FleetMetric" || "AWS::IoTWireless::ServiceProfile" || "AWS::NetworkManager::Device" || "AWS::NetworkManager::GlobalNetwork" || "AWS::NetworkManager::Link" || "AWS::NetworkManager::Site" || "AWS::Panorama::Package" || "AWS::Pinpoint::App" || "AWS::Redshift::ScheduledAction" || "AWS::Route53Resolver::FirewallRuleGroupAssociation" || "AWS::SageMaker::AppImageConfig" || "AWS::SageMaker::Image" || "AWS::ECS::TaskSet" || "AWS::Cassandra::Keyspace" || "AWS::Signer::SigningProfile" || "AWS::Amplify::App" || "AWS::AppMesh::VirtualNode" || "AWS::AppMesh::VirtualService" || "AWS::AppRunner::VpcConnector" || "AWS::AppStream::Application" || "AWS::CodeArtifact::Repository" || "AWS::EC2::PrefixList" || "AWS::EC2::SpotFleet" || "AWS::Evidently::Project" || "AWS::Forecast::Dataset" || "AWS::IAM::SAMLProvider" || "AWS::IAM::ServerCertificate" || "AWS::Pinpoint::Campaign" || "AWS::Pinpoint::InAppTemplate" || "AWS::SageMaker::Domain" || "AWS::Transfer::Agreement" || "AWS::Transfer::Connector" || "AWS::KinesisFirehose::DeliveryStream" || "AWS::Amplify::Branch" || "AWS::AppIntegrations::EventIntegration" || "AWS::AppMesh::Route" || "AWS::Athena::PreparedStatement" || "AWS::EC2::IPAMScope" || "AWS::Evidently::Launch" || "AWS::Forecast::DatasetGroup" || "AWS::GreengrassV2::ComponentVersion" || "AWS::GroundStation::MissionProfile" || "AWS::MediaConnect::FlowEntitlement" || "AWS::MediaConnect::FlowVpcInterface" || "AWS::MediaTailor::PlaybackConfiguration" || "AWS::MSK::Configuration" || "AWS::Personalize::Dataset" || "AWS::Personalize::Schema" || "AWS::Personalize::Solution" || "AWS::Pinpoint::EmailTemplate" || "AWS::Pinpoint::EventStream" || "AWS::ResilienceHub::App" || "AWS::ACMPCA::CertificateAuthority" || "AWS::AppConfig::HostedConfigurationVersion" || "AWS::AppMesh::VirtualGateway" || "AWS::AppMesh::VirtualRouter" || "AWS::AppRunner::Service" || "AWS::CustomerProfiles::ObjectType" || "AWS::DMS::Endpoint" || "AWS::EC2::CapacityReservation" || "AWS::EC2::ClientVpnEndpoint" || "AWS::Kendra::Index" || "AWS::KinesisVideo::Stream" || "AWS::Logs::Destination" || "AWS::Pinpoint::EmailChannel" || "AWS::S3::AccessPoint" || "AWS::NetworkManager::CustomerGatewayAssociation" || "AWS::NetworkManager::LinkAssociation" || "AWS::IoTWireless::MulticastGroup" || "AWS::Personalize::DatasetGroup" || "AWS::IoTTwinMaker::ComponentType" || "AWS::CodeBuild::ReportGroup" || "AWS::SageMaker::FeatureGroup" || "AWS::MSK::BatchScramSecret" || "AWS::AppStream::Stack" || "AWS::IoT::JobTemplate" || "AWS::IoTWireless::FuotaTask" || "AWS::IoT::ProvisioningTemplate" || "AWS::InspectorV2::Filter" || "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation" || "AWS::ServiceDiscovery::Instance" || "AWS::Transfer::Certificate" || "AWS::MediaConnect::FlowSource" || "AWS::APS::RuleGroupsNamespace" || "AWS::CodeGuruProfiler::ProfilingGroup" || "AWS::Route53Resolver::ResolverQueryLoggingConfig" || "AWS::Batch::SchedulingPolicy" || "AWS::ACMPCA::CertificateAuthorityActivation" || "AWS::AppMesh::GatewayRoute" || "AWS::AppMesh::Mesh" || "AWS::Connect::Instance" || "AWS::Connect::QuickConnect" || "AWS::EC2::CarrierGateway" || "AWS::EC2::IPAMPool" || "AWS::EC2::TransitGatewayConnect" || "AWS::EC2::TransitGatewayMulticastDomain" || "AWS::ECS::CapacityProvider" || "AWS::IAM::InstanceProfile" || "AWS::IoT::CACertificate" || "AWS::IoTTwinMaker::SyncJob" || "AWS::KafkaConnect::Connector" || "AWS::Lambda::CodeSigningConfig" || "AWS::NetworkManager::ConnectPeer" || "AWS::ResourceExplorer2::Index" || "AWS::AppStream::Fleet" || "AWS::Cognito::UserPool" || "AWS::Cognito::UserPoolClient" || "AWS::Cognito::UserPoolGroup" || "AWS::EC2::NetworkInsightsAccessScope" || "AWS::EC2::NetworkInsightsAnalysis" || "AWS::Grafana::Workspace" || "AWS::GroundStation::DataflowEndpointGroup" || "AWS::ImageBuilder::ImageRecipe" || "AWS::KMS::Alias" || "AWS::M2::Environment" || "AWS::QuickSight::DataSource" || "AWS::QuickSight::Template" || "AWS::QuickSight::Theme" || "AWS::RDS::OptionGroup" || "AWS::Redshift::EndpointAccess" || "AWS::Route53Resolver::FirewallRuleGroup" || "AWS::SSM::Document",
 * //       count: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDiscoveredResourceCountsCommandInput - {@link GetDiscoveredResourceCountsCommandInput}
 * @returns {@link GetDiscoveredResourceCountsCommandOutput}
 * @see {@link GetDiscoveredResourceCountsCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredResourceCountsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class GetDiscoveredResourceCountsCommand extends $Command
  .classBuilder<
    GetDiscoveredResourceCountsCommandInput,
    GetDiscoveredResourceCountsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "GetDiscoveredResourceCounts", {})
  .n("ConfigServiceClient", "GetDiscoveredResourceCountsCommand")
  .f(void 0, void 0)
  .ser(se_GetDiscoveredResourceCountsCommand)
  .de(de_GetDiscoveredResourceCountsCommand)
  .build() {}
