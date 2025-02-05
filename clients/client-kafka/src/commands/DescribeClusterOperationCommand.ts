// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterOperationRequest, DescribeClusterOperationResponse } from "../models/models_0";
import { de_DescribeClusterOperationCommand, se_DescribeClusterOperationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterOperationCommand}.
 */
export interface DescribeClusterOperationCommandInput extends DescribeClusterOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterOperationCommand}.
 */
export interface DescribeClusterOperationCommandOutput extends DescribeClusterOperationResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the cluster operation specified by the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterOperationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterOperationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // DescribeClusterOperationRequest
 *   ClusterOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterOperationResponse
 * //   ClusterOperationInfo: { // ClusterOperationInfo
 * //     ClientRequestId: "STRING_VALUE",
 * //     ClusterArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorInfo: { // ErrorInfo
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorString: "STRING_VALUE",
 * //     },
 * //     OperationArn: "STRING_VALUE",
 * //     OperationState: "STRING_VALUE",
 * //     OperationSteps: [ // __listOfClusterOperationStep
 * //       { // ClusterOperationStep
 * //         StepInfo: { // ClusterOperationStepInfo
 * //           StepStatus: "STRING_VALUE",
 * //         },
 * //         StepName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OperationType: "STRING_VALUE",
 * //     SourceClusterInfo: { // MutableClusterInfo
 * //       BrokerEBSVolumeInfo: [ // __listOfBrokerEBSVolumeInfo
 * //         { // BrokerEBSVolumeInfo
 * //           KafkaBrokerNodeId: "STRING_VALUE", // required
 * //           ProvisionedThroughput: { // ProvisionedThroughput
 * //             Enabled: true || false,
 * //             VolumeThroughput: Number("int"),
 * //           },
 * //           VolumeSizeGB: Number("int"),
 * //         },
 * //       ],
 * //       ConfigurationInfo: { // ConfigurationInfo
 * //         Arn: "STRING_VALUE", // required
 * //         Revision: Number("long"), // required
 * //       },
 * //       NumberOfBrokerNodes: Number("int"),
 * //       EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //       OpenMonitoring: { // OpenMonitoring
 * //         Prometheus: { // Prometheus
 * //           JmxExporter: { // JmxExporter
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //           NodeExporter: { // NodeExporter
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //         },
 * //       },
 * //       KafkaVersion: "STRING_VALUE",
 * //       LoggingInfo: { // LoggingInfo
 * //         BrokerLogs: { // BrokerLogs
 * //           CloudWatchLogs: { // CloudWatchLogs
 * //             Enabled: true || false, // required
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           Firehose: { // Firehose
 * //             DeliveryStream: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //           },
 * //           S3: { // S3
 * //             Bucket: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //             Prefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       InstanceType: "STRING_VALUE",
 * //       ClientAuthentication: { // ClientAuthentication
 * //         Sasl: { // Sasl
 * //           Scram: { // Scram
 * //             Enabled: true || false,
 * //           },
 * //           Iam: { // Iam
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         Tls: { // Tls
 * //           CertificateAuthorityArnList: [ // __listOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //           Enabled: true || false,
 * //         },
 * //         Unauthenticated: { // Unauthenticated
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       EncryptionInfo: { // EncryptionInfo
 * //         EncryptionAtRest: { // EncryptionAtRest
 * //           DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //         },
 * //         EncryptionInTransit: { // EncryptionInTransit
 * //           ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //           InCluster: true || false,
 * //         },
 * //       },
 * //       ConnectivityInfo: { // ConnectivityInfo
 * //         PublicAccess: { // PublicAccess
 * //           Type: "STRING_VALUE",
 * //         },
 * //         VpcConnectivity: { // VpcConnectivity
 * //           ClientAuthentication: { // VpcConnectivityClientAuthentication
 * //             Sasl: { // VpcConnectivitySasl
 * //               Scram: { // VpcConnectivityScram
 * //                 Enabled: true || false,
 * //               },
 * //               Iam: { // VpcConnectivityIam
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //             Tls: { // VpcConnectivityTls
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //         },
 * //       },
 * //       StorageMode: "LOCAL" || "TIERED",
 * //       BrokerCountUpdateInfo: { // BrokerCountUpdateInfo
 * //         CreatedBrokerIds: [ // __listOf__double
 * //           Number("double"),
 * //         ],
 * //         DeletedBrokerIds: [
 * //           Number("double"),
 * //         ],
 * //       },
 * //     },
 * //     TargetClusterInfo: {
 * //       BrokerEBSVolumeInfo: [
 * //         {
 * //           KafkaBrokerNodeId: "STRING_VALUE", // required
 * //           ProvisionedThroughput: {
 * //             Enabled: true || false,
 * //             VolumeThroughput: Number("int"),
 * //           },
 * //           VolumeSizeGB: Number("int"),
 * //         },
 * //       ],
 * //       ConfigurationInfo: {
 * //         Arn: "STRING_VALUE", // required
 * //         Revision: Number("long"), // required
 * //       },
 * //       NumberOfBrokerNodes: Number("int"),
 * //       EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //       OpenMonitoring: {
 * //         Prometheus: {
 * //           JmxExporter: {
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //           NodeExporter: {
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //         },
 * //       },
 * //       KafkaVersion: "STRING_VALUE",
 * //       LoggingInfo: {
 * //         BrokerLogs: {
 * //           CloudWatchLogs: {
 * //             Enabled: true || false, // required
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           Firehose: {
 * //             DeliveryStream: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //           },
 * //           S3: {
 * //             Bucket: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //             Prefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       InstanceType: "STRING_VALUE",
 * //       ClientAuthentication: {
 * //         Sasl: {
 * //           Scram: {
 * //             Enabled: true || false,
 * //           },
 * //           Iam: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         Tls: {
 * //           CertificateAuthorityArnList: [
 * //             "STRING_VALUE",
 * //           ],
 * //           Enabled: true || false,
 * //         },
 * //         Unauthenticated: {
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       EncryptionInfo: {
 * //         EncryptionAtRest: {
 * //           DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //         },
 * //         EncryptionInTransit: {
 * //           ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //           InCluster: true || false,
 * //         },
 * //       },
 * //       ConnectivityInfo: {
 * //         PublicAccess: {
 * //           Type: "STRING_VALUE",
 * //         },
 * //         VpcConnectivity: {
 * //           ClientAuthentication: {
 * //             Sasl: {
 * //               Scram: {
 * //                 Enabled: true || false,
 * //               },
 * //               Iam: {
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //             Tls: {
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //         },
 * //       },
 * //       StorageMode: "LOCAL" || "TIERED",
 * //       BrokerCountUpdateInfo: {
 * //         CreatedBrokerIds: [
 * //           Number("double"),
 * //         ],
 * //         DeletedBrokerIds: [
 * //           Number("double"),
 * //         ],
 * //       },
 * //     },
 * //     VpcConnectionInfo: { // VpcConnectionInfo
 * //       VpcConnectionArn: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       UserIdentity: { // UserIdentity
 * //         Type: "AWSACCOUNT" || "AWSSERVICE",
 * //         PrincipalId: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterOperationCommandInput - {@link DescribeClusterOperationCommandInput}
 * @returns {@link DescribeClusterOperationCommandOutput}
 * @see {@link DescribeClusterOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class DescribeClusterOperationCommand extends $Command
  .classBuilder<
    DescribeClusterOperationCommandInput,
    DescribeClusterOperationCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "DescribeClusterOperation", {})
  .n("KafkaClient", "DescribeClusterOperationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterOperationCommand)
  .de(de_DescribeClusterOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterOperationRequest;
      output: DescribeClusterOperationResponse;
    };
    sdk: {
      input: DescribeClusterOperationCommandInput;
      output: DescribeClusterOperationCommandOutput;
    };
  };
}
