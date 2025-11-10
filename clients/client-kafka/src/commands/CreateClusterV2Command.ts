// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { CreateClusterV2Request, CreateClusterV2Response } from "../models/models_0";
import { de_CreateClusterV2Command, se_CreateClusterV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterV2Command}.
 */
export interface CreateClusterV2CommandInput extends CreateClusterV2Request {}
/**
 * @public
 *
 * The output of {@link CreateClusterV2Command}.
 */
export interface CreateClusterV2CommandOutput extends CreateClusterV2Response, __MetadataBearer {}

/**
 * <p>Creates a new MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateClusterV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateClusterV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // CreateClusterV2Request
 *   ClusterName: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Provisioned: { // ProvisionedRequest
 *     BrokerNodeGroupInfo: { // BrokerNodeGroupInfo
 *       BrokerAZDistribution: "DEFAULT",
 *       ClientSubnets: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *       InstanceType: "STRING_VALUE", // required
 *       SecurityGroups: [
 *         "STRING_VALUE",
 *       ],
 *       StorageInfo: { // StorageInfo
 *         EbsStorageInfo: { // EBSStorageInfo
 *           ProvisionedThroughput: { // ProvisionedThroughput
 *             Enabled: true || false,
 *             VolumeThroughput: Number("int"),
 *           },
 *           VolumeSize: Number("int"),
 *         },
 *       },
 *       ConnectivityInfo: { // ConnectivityInfo
 *         PublicAccess: { // PublicAccess
 *           Type: "STRING_VALUE",
 *         },
 *         VpcConnectivity: { // VpcConnectivity
 *           ClientAuthentication: { // VpcConnectivityClientAuthentication
 *             Sasl: { // VpcConnectivitySasl
 *               Scram: { // VpcConnectivityScram
 *                 Enabled: true || false,
 *               },
 *               Iam: { // VpcConnectivityIam
 *                 Enabled: true || false,
 *               },
 *             },
 *             Tls: { // VpcConnectivityTls
 *               Enabled: true || false,
 *             },
 *           },
 *         },
 *       },
 *       ZoneIds: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Rebalancing: { // Rebalancing
 *       Status: "PAUSED" || "ACTIVE",
 *     },
 *     ClientAuthentication: { // ClientAuthentication
 *       Sasl: { // Sasl
 *         Scram: { // Scram
 *           Enabled: true || false,
 *         },
 *         Iam: { // Iam
 *           Enabled: true || false,
 *         },
 *       },
 *       Tls: { // Tls
 *         CertificateAuthorityArnList: [
 *           "STRING_VALUE",
 *         ],
 *         Enabled: true || false,
 *       },
 *       Unauthenticated: { // Unauthenticated
 *         Enabled: true || false,
 *       },
 *     },
 *     ConfigurationInfo: { // ConfigurationInfo
 *       Arn: "STRING_VALUE", // required
 *       Revision: Number("long"), // required
 *     },
 *     EncryptionInfo: { // EncryptionInfo
 *       EncryptionAtRest: { // EncryptionAtRest
 *         DataVolumeKMSKeyId: "STRING_VALUE", // required
 *       },
 *       EncryptionInTransit: { // EncryptionInTransit
 *         ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 *         InCluster: true || false,
 *       },
 *     },
 *     EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 *     OpenMonitoring: { // OpenMonitoringInfo
 *       Prometheus: { // PrometheusInfo
 *         JmxExporter: { // JmxExporterInfo
 *           EnabledInBroker: true || false, // required
 *         },
 *         NodeExporter: { // NodeExporterInfo
 *           EnabledInBroker: true || false, // required
 *         },
 *       },
 *     },
 *     KafkaVersion: "STRING_VALUE", // required
 *     LoggingInfo: { // LoggingInfo
 *       BrokerLogs: { // BrokerLogs
 *         CloudWatchLogs: { // CloudWatchLogs
 *           Enabled: true || false, // required
 *           LogGroup: "STRING_VALUE",
 *         },
 *         Firehose: { // Firehose
 *           DeliveryStream: "STRING_VALUE",
 *           Enabled: true || false, // required
 *         },
 *         S3: { // S3
 *           Bucket: "STRING_VALUE",
 *           Enabled: true || false, // required
 *           Prefix: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     NumberOfBrokerNodes: Number("int"), // required
 *     StorageMode: "LOCAL" || "TIERED",
 *   },
 *   Serverless: { // ServerlessRequest
 *     VpcConfigs: [ // __listOfVpcConfig // required
 *       { // VpcConfig
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: "<__listOf__string>",
 *       },
 *     ],
 *     ClientAuthentication: { // ServerlessClientAuthentication
 *       Sasl: { // ServerlessSasl
 *         Iam: {
 *           Enabled: true || false,
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new CreateClusterV2Command(input);
 * const response = await client.send(command);
 * // { // CreateClusterV2Response
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterName: "STRING_VALUE",
 * //   State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * //   ClusterType: "PROVISIONED" || "SERVERLESS",
 * // };
 *
 * ```
 *
 * @param CreateClusterV2CommandInput - {@link CreateClusterV2CommandInput}
 * @returns {@link CreateClusterV2CommandOutput}
 * @see {@link CreateClusterV2CommandInput} for command's `input` shape.
 * @see {@link CreateClusterV2CommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
export class CreateClusterV2Command extends $Command
  .classBuilder<
    CreateClusterV2CommandInput,
    CreateClusterV2CommandOutput,
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
  .s("Kafka", "CreateClusterV2", {})
  .n("KafkaClient", "CreateClusterV2Command")
  .f(void 0, void 0)
  .ser(se_CreateClusterV2Command)
  .de(de_CreateClusterV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterV2Request;
      output: CreateClusterV2Response;
    };
    sdk: {
      input: CreateClusterV2CommandInput;
      output: CreateClusterV2CommandOutput;
    };
  };
}
