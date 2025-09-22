// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterOperationV2Request, DescribeClusterOperationV2Response } from "../models/models_0";
import { DescribeClusterOperationV2 } from "../schemas/schemas_1_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterOperationV2Command}.
 */
export interface DescribeClusterOperationV2CommandInput extends DescribeClusterOperationV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeClusterOperationV2Command}.
 */
export interface DescribeClusterOperationV2CommandOutput extends DescribeClusterOperationV2Response, __MetadataBearer {}

/**
 * <p>Returns a description of the cluster operation specified by the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterOperationV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterOperationV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeClusterOperationV2Request
 *   ClusterOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterOperationV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeClusterOperationV2Response
 * //   ClusterOperationInfo: { // ClusterOperationV2
 * //     ClusterArn: "STRING_VALUE",
 * //     ClusterType: "PROVISIONED" || "SERVERLESS",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorInfo: { // ErrorInfo
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorString: "STRING_VALUE",
 * //     },
 * //     OperationArn: "STRING_VALUE",
 * //     OperationState: "STRING_VALUE",
 * //     OperationType: "STRING_VALUE",
 * //     Provisioned: { // ClusterOperationV2Provisioned
 * //       OperationSteps: [ // __listOfClusterOperationStep
 * //         { // ClusterOperationStep
 * //           StepInfo: { // ClusterOperationStepInfo
 * //             StepStatus: "STRING_VALUE",
 * //           },
 * //           StepName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SourceClusterInfo: { // MutableClusterInfo
 * //         BrokerEBSVolumeInfo: [ // __listOfBrokerEBSVolumeInfo
 * //           { // BrokerEBSVolumeInfo
 * //             KafkaBrokerNodeId: "STRING_VALUE", // required
 * //             ProvisionedThroughput: { // ProvisionedThroughput
 * //               Enabled: true || false,
 * //               VolumeThroughput: Number("int"),
 * //             },
 * //             VolumeSizeGB: Number("int"),
 * //           },
 * //         ],
 * //         ConfigurationInfo: { // ConfigurationInfo
 * //           Arn: "STRING_VALUE", // required
 * //           Revision: Number("long"), // required
 * //         },
 * //         NumberOfBrokerNodes: Number("int"),
 * //         EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //         OpenMonitoring: { // OpenMonitoring
 * //           Prometheus: { // Prometheus
 * //             JmxExporter: { // JmxExporter
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //             NodeExporter: { // NodeExporter
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //           },
 * //         },
 * //         KafkaVersion: "STRING_VALUE",
 * //         LoggingInfo: { // LoggingInfo
 * //           BrokerLogs: { // BrokerLogs
 * //             CloudWatchLogs: { // CloudWatchLogs
 * //               Enabled: true || false, // required
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             Firehose: { // Firehose
 * //               DeliveryStream: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //             },
 * //             S3: { // S3
 * //               Bucket: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         InstanceType: "STRING_VALUE",
 * //         ClientAuthentication: { // ClientAuthentication
 * //           Sasl: { // Sasl
 * //             Scram: { // Scram
 * //               Enabled: true || false,
 * //             },
 * //             Iam: { // Iam
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //           Tls: { // Tls
 * //             CertificateAuthorityArnList: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //             Enabled: true || false,
 * //           },
 * //           Unauthenticated: { // Unauthenticated
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         EncryptionInfo: { // EncryptionInfo
 * //           EncryptionAtRest: { // EncryptionAtRest
 * //             DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //           },
 * //           EncryptionInTransit: { // EncryptionInTransit
 * //             ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //             InCluster: true || false,
 * //           },
 * //         },
 * //         ConnectivityInfo: { // ConnectivityInfo
 * //           PublicAccess: { // PublicAccess
 * //             Type: "STRING_VALUE",
 * //           },
 * //           VpcConnectivity: { // VpcConnectivity
 * //             ClientAuthentication: { // VpcConnectivityClientAuthentication
 * //               Sasl: { // VpcConnectivitySasl
 * //                 Scram: { // VpcConnectivityScram
 * //                   Enabled: true || false,
 * //                 },
 * //                 Iam: { // VpcConnectivityIam
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               Tls: { // VpcConnectivityTls
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //           },
 * //         },
 * //         StorageMode: "LOCAL" || "TIERED",
 * //         BrokerCountUpdateInfo: { // BrokerCountUpdateInfo
 * //           CreatedBrokerIds: [ // __listOf__double
 * //             Number("double"),
 * //           ],
 * //           DeletedBrokerIds: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       },
 * //       TargetClusterInfo: {
 * //         BrokerEBSVolumeInfo: [
 * //           {
 * //             KafkaBrokerNodeId: "STRING_VALUE", // required
 * //             ProvisionedThroughput: {
 * //               Enabled: true || false,
 * //               VolumeThroughput: Number("int"),
 * //             },
 * //             VolumeSizeGB: Number("int"),
 * //           },
 * //         ],
 * //         ConfigurationInfo: {
 * //           Arn: "STRING_VALUE", // required
 * //           Revision: Number("long"), // required
 * //         },
 * //         NumberOfBrokerNodes: Number("int"),
 * //         EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //         OpenMonitoring: {
 * //           Prometheus: {
 * //             JmxExporter: {
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //             NodeExporter: {
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //           },
 * //         },
 * //         KafkaVersion: "STRING_VALUE",
 * //         LoggingInfo: {
 * //           BrokerLogs: {
 * //             CloudWatchLogs: {
 * //               Enabled: true || false, // required
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             Firehose: {
 * //               DeliveryStream: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //             },
 * //             S3: {
 * //               Bucket: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         InstanceType: "STRING_VALUE",
 * //         ClientAuthentication: {
 * //           Sasl: {
 * //             Scram: {
 * //               Enabled: true || false,
 * //             },
 * //             Iam: {
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //           Tls: {
 * //             CertificateAuthorityArnList: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Enabled: true || false,
 * //           },
 * //           Unauthenticated: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         EncryptionInfo: {
 * //           EncryptionAtRest: {
 * //             DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //           },
 * //           EncryptionInTransit: {
 * //             ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //             InCluster: true || false,
 * //           },
 * //         },
 * //         ConnectivityInfo: {
 * //           PublicAccess: {
 * //             Type: "STRING_VALUE",
 * //           },
 * //           VpcConnectivity: {
 * //             ClientAuthentication: {
 * //               Sasl: {
 * //                 Scram: {
 * //                   Enabled: true || false,
 * //                 },
 * //                 Iam: {
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               Tls: {
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //           },
 * //         },
 * //         StorageMode: "LOCAL" || "TIERED",
 * //         BrokerCountUpdateInfo: {
 * //           CreatedBrokerIds: [
 * //             Number("double"),
 * //           ],
 * //           DeletedBrokerIds: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       },
 * //       VpcConnectionInfo: { // VpcConnectionInfo
 * //         VpcConnectionArn: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         UserIdentity: { // UserIdentity
 * //           Type: "AWSACCOUNT" || "AWSSERVICE",
 * //           PrincipalId: "STRING_VALUE",
 * //         },
 * //         CreationTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     Serverless: { // ClusterOperationV2Serverless
 * //       VpcConnectionInfo: { // VpcConnectionInfoServerless
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         Owner: "STRING_VALUE",
 * //         UserIdentity: {
 * //           Type: "AWSACCOUNT" || "AWSSERVICE",
 * //           PrincipalId: "STRING_VALUE",
 * //         },
 * //         VpcConnectionArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterOperationV2CommandInput - {@link DescribeClusterOperationV2CommandInput}
 * @returns {@link DescribeClusterOperationV2CommandOutput}
 * @see {@link DescribeClusterOperationV2CommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationV2CommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class DescribeClusterOperationV2Command extends $Command
  .classBuilder<
    DescribeClusterOperationV2CommandInput,
    DescribeClusterOperationV2CommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DescribeClusterOperationV2", {})
  .n("KafkaClient", "DescribeClusterOperationV2Command")
  .sc(DescribeClusterOperationV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterOperationV2Request;
      output: DescribeClusterOperationV2Response;
    };
    sdk: {
      input: DescribeClusterOperationV2CommandInput;
      output: DescribeClusterOperationV2CommandOutput;
    };
  };
}
