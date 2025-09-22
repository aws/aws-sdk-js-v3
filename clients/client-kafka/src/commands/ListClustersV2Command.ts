// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClustersV2Request, ListClustersV2Response } from "../models/models_0";
import { ListClustersV2 } from "../schemas/schemas_1_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersV2Command}.
 */
export interface ListClustersV2CommandInput extends ListClustersV2Request {}
/**
 * @public
 *
 * The output of {@link ListClustersV2Command}.
 */
export interface ListClustersV2CommandOutput extends ListClustersV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of all the MSK clusters in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClustersV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClustersV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListClustersV2Request
 *   ClusterNameFilter: "STRING_VALUE",
 *   ClusterTypeFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersV2Command(input);
 * const response = await client.send(command);
 * // { // ListClustersV2Response
 * //   ClusterInfoList: [ // __listOfCluster
 * //     { // Cluster
 * //       ActiveOperationArn: "STRING_VALUE",
 * //       ClusterType: "PROVISIONED" || "SERVERLESS",
 * //       ClusterArn: "STRING_VALUE",
 * //       ClusterName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CurrentVersion: "STRING_VALUE",
 * //       State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * //       StateInfo: { // StateInfo
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Provisioned: { // Provisioned
 * //         BrokerNodeGroupInfo: { // BrokerNodeGroupInfo
 * //           BrokerAZDistribution: "DEFAULT",
 * //           ClientSubnets: [ // __listOf__string // required
 * //             "STRING_VALUE",
 * //           ],
 * //           InstanceType: "STRING_VALUE", // required
 * //           SecurityGroups: [
 * //             "STRING_VALUE",
 * //           ],
 * //           StorageInfo: { // StorageInfo
 * //             EbsStorageInfo: { // EBSStorageInfo
 * //               ProvisionedThroughput: { // ProvisionedThroughput
 * //                 Enabled: true || false,
 * //                 VolumeThroughput: Number("int"),
 * //               },
 * //               VolumeSize: Number("int"),
 * //             },
 * //           },
 * //           ConnectivityInfo: { // ConnectivityInfo
 * //             PublicAccess: { // PublicAccess
 * //               Type: "STRING_VALUE",
 * //             },
 * //             VpcConnectivity: { // VpcConnectivity
 * //               ClientAuthentication: { // VpcConnectivityClientAuthentication
 * //                 Sasl: { // VpcConnectivitySasl
 * //                   Scram: { // VpcConnectivityScram
 * //                     Enabled: true || false,
 * //                   },
 * //                   Iam: { // VpcConnectivityIam
 * //                     Enabled: true || false,
 * //                   },
 * //                 },
 * //                 Tls: { // VpcConnectivityTls
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           ZoneIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         CurrentBrokerSoftwareInfo: { // BrokerSoftwareInfo
 * //           ConfigurationArn: "STRING_VALUE",
 * //           ConfigurationRevision: Number("long"),
 * //           KafkaVersion: "STRING_VALUE",
 * //         },
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
 * //             CertificateAuthorityArnList: [
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
 * //         EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //         OpenMonitoring: { // OpenMonitoringInfo
 * //           Prometheus: { // PrometheusInfo
 * //             JmxExporter: { // JmxExporterInfo
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //             NodeExporter: { // NodeExporterInfo
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //           },
 * //         },
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
 * //         NumberOfBrokerNodes: Number("int"), // required
 * //         ZookeeperConnectString: "STRING_VALUE",
 * //         ZookeeperConnectStringTls: "STRING_VALUE",
 * //         StorageMode: "LOCAL" || "TIERED",
 * //         CustomerActionStatus: "CRITICAL_ACTION_REQUIRED" || "ACTION_RECOMMENDED" || "NONE",
 * //       },
 * //       Serverless: { // Serverless
 * //         VpcConfigs: [ // __listOfVpcConfig // required
 * //           { // VpcConfig
 * //             SubnetIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             SecurityGroupIds: "<__listOf__string>",
 * //           },
 * //         ],
 * //         ClientAuthentication: { // ServerlessClientAuthentication
 * //           Sasl: { // ServerlessSasl
 * //             Iam: {
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersV2CommandInput - {@link ListClustersV2CommandInput}
 * @returns {@link ListClustersV2CommandOutput}
 * @see {@link ListClustersV2CommandInput} for command's `input` shape.
 * @see {@link ListClustersV2CommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListClustersV2Command extends $Command
  .classBuilder<
    ListClustersV2CommandInput,
    ListClustersV2CommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "ListClustersV2", {})
  .n("KafkaClient", "ListClustersV2Command")
  .sc(ListClustersV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClustersV2Request;
      output: ListClustersV2Response;
    };
    sdk: {
      input: ListClustersV2CommandInput;
      output: ListClustersV2CommandOutput;
    };
  };
}
