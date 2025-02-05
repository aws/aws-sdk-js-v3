// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourceScanInput, DescribeResourceScanOutput } from "../models/models_0";
import { de_DescribeResourceScanCommand, se_DescribeResourceScanCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceScanCommand}.
 */
export interface DescribeResourceScanCommandInput extends DescribeResourceScanInput {}
/**
 * @public
 *
 * The output of {@link DescribeResourceScanCommand}.
 */
export interface DescribeResourceScanCommandOutput extends DescribeResourceScanOutput, __MetadataBearer {}

/**
 * <p>Describes details of a resource scan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeResourceScanCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeResourceScanCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeResourceScanInput
 *   ResourceScanId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourceScanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceScanOutput
 * //   ResourceScanId: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "FAILED" || "COMPLETE" || "EXPIRED",
 * //   StatusReason: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   PercentageCompleted: Number("double"),
 * //   ResourceTypes: [ // ResourceTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   ResourcesScanned: Number("int"),
 * //   ResourcesRead: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeResourceScanCommandInput - {@link DescribeResourceScanCommandInput}
 * @returns {@link DescribeResourceScanCommandOutput}
 * @see {@link DescribeResourceScanCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceScanCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ResourceScanNotFoundException} (client fault)
 *  <p>The resource scan was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 * @example To describe a selected resource scan
 * ```javascript
 * // This example describes a selected resource scan
 * const input = {
 *   "ResourceScanId": "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1"
 * };
 * const command = new DescribeResourceScanCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EndTime": "2024-01-02T23:25:48.075000+00:00",
 *   "PercentageCompleted": 100,
 *   "ResourceScanId": "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/c19304f6-c4f1-4ff8-8e1f-35162e41d7e1",
 *   "ResourceTypes": [
 *     "AWS::Amplify::App",
 *     "AWS::ApiGateway::Deployment",
 *     "AWS::ApiGateway::DocumentationPart",
 *     "AWS::ApiGateway::Model",
 *     "AWS::ApiGateway::Resource",
 *     "AWS::ApiGateway::RestApi",
 *     "AWS::ApiGateway::Stage",
 *     "AWS::AppConfig::Extension",
 *     "AWS::ApplicationAutoScaling::ScalableTarget",
 *     "AWS::Athena::WorkGroup",
 *     "AWS::Cassandra::Keyspace",
 *     "AWS::CloudFront::CachePolicy",
 *     "AWS::CloudFront::Function",
 *     "AWS::CloudFront::OriginRequestPolicy",
 *     "AWS::CloudTrail::Trail",
 *     "AWS::CloudWatch::Alarm",
 *     "AWS::CodeDeploy::Application",
 *     "AWS::CodeDeploy::DeploymentConfig",
 *     "AWS::Cognito::UserPool",
 *     "AWS::Cognito::UserPoolGroup",
 *     "AWS::Cognito::UserPoolUser",
 *     "AWS::DynamoDB::Table",
 *     "AWS::EC2::DHCPOptions",
 *     "AWS::EC2::EIP",
 *     "AWS::EC2::InternetGateway",
 *     "AWS::EC2::LaunchTemplate",
 *     "AWS::EC2::NetworkAcl",
 *     "AWS::EC2::Route",
 *     "AWS::EC2::RouteTable",
 *     "AWS::EC2::SubnetNetworkAclAssociation",
 *     "AWS::EC2::SubnetRouteTableAssociation",
 *     "AWS::EC2::VPC",
 *     "AWS::EC2::VPCDHCPOptionsAssociation",
 *     "AWS::EC2::VPCGatewayAttachment",
 *     "AWS::ECR::Repository",
 *     "AWS::ECS::Cluster",
 *     "AWS::ECS::ClusterCapacityProviderAssociations",
 *     "AWS::ECS::Service",
 *     "AWS::ECS::TaskDefinition",
 *     "AWS::ElastiCache::SubnetGroup",
 *     "AWS::ElastiCache::User",
 *     "AWS::Events::EventBus",
 *     "AWS::Events::Rule",
 *     "AWS::GameLift::Location",
 *     "AWS::GuardDuty::Detector",
 *     "AWS::IAM::InstanceProfile",
 *     "AWS::IAM::ManagedPolicy",
 *     "AWS::IAM::Role",
 *     "AWS::IAM::User",
 *     "AWS::IoT::DomainConfiguration",
 *     "AWS::KMS::Alias",
 *     "AWS::KMS::Key",
 *     "AWS::Lambda::EventSourceMapping",
 *     "AWS::Lambda::Function",
 *     "AWS::Lambda::Permission",
 *     "AWS::Lambda::Version",
 *     "AWS::Logs::LogGroup",
 *     "AWS::Logs::LogStream",
 *     "AWS::MemoryDB::ACL",
 *     "AWS::MemoryDB::ParameterGroup",
 *     "AWS::MemoryDB::User",
 *     "AWS::RAM::Permission",
 *     "AWS::RDS::CustomDBEngineVersion",
 *     "AWS::Route53Resolver::ResolverRuleAssociation",
 *     "AWS::S3::AccessPoint",
 *     "AWS::S3::BucketPolicy",
 *     "AWS::S3::StorageLens",
 *     "AWS::SNS::Topic",
 *     "AWS::SQS::Queue",
 *     "AWS::SSM::Association",
 *     "AWS::SSM::Document",
 *     "AWS::StepFunctions::StateMachine",
 *     "AWS::XRay::Group",
 *     "AWS::XRay::SamplingRule"
 *   ],
 *   "ResourcesRead": 25107,
 *   "StartTime": "2024-01-02T22:15:18.382000+00:00",
 *   "Status": "COMPLETE"
 * }
 * *\/
 * // example id: to-describe-a-generated-template
 * ```
 *
 */
export class DescribeResourceScanCommand extends $Command
  .classBuilder<
    DescribeResourceScanCommandInput,
    DescribeResourceScanCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribeResourceScan", {})
  .n("CloudFormationClient", "DescribeResourceScanCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourceScanCommand)
  .de(de_DescribeResourceScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceScanInput;
      output: DescribeResourceScanOutput;
    };
    sdk: {
      input: DescribeResourceScanCommandInput;
      output: DescribeResourceScanCommandOutput;
    };
  };
}
