// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import { DescribeCluster } from "../schemas/schemas_1_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeClusterRequest
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterResponse
 * //   ClusterInfo: { // ClusterInfo
 * //     ActiveOperationArn: "STRING_VALUE",
 * //     BrokerNodeGroupInfo: { // BrokerNodeGroupInfo
 * //       BrokerAZDistribution: "DEFAULT",
 * //       ClientSubnets: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       InstanceType: "STRING_VALUE", // required
 * //       SecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //       StorageInfo: { // StorageInfo
 * //         EbsStorageInfo: { // EBSStorageInfo
 * //           ProvisionedThroughput: { // ProvisionedThroughput
 * //             Enabled: true || false,
 * //             VolumeThroughput: Number("int"),
 * //           },
 * //           VolumeSize: Number("int"),
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
 * //       ZoneIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ClientAuthentication: { // ClientAuthentication
 * //       Sasl: { // Sasl
 * //         Scram: { // Scram
 * //           Enabled: true || false,
 * //         },
 * //         Iam: { // Iam
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       Tls: { // Tls
 * //         CertificateAuthorityArnList: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Enabled: true || false,
 * //       },
 * //       Unauthenticated: { // Unauthenticated
 * //         Enabled: true || false,
 * //       },
 * //     },
 * //     ClusterArn: "STRING_VALUE",
 * //     ClusterName: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CurrentBrokerSoftwareInfo: { // BrokerSoftwareInfo
 * //       ConfigurationArn: "STRING_VALUE",
 * //       ConfigurationRevision: Number("long"),
 * //       KafkaVersion: "STRING_VALUE",
 * //     },
 * //     CurrentVersion: "STRING_VALUE",
 * //     EncryptionInfo: { // EncryptionInfo
 * //       EncryptionAtRest: { // EncryptionAtRest
 * //         DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //       },
 * //       EncryptionInTransit: { // EncryptionInTransit
 * //         ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //         InCluster: true || false,
 * //       },
 * //     },
 * //     EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //     OpenMonitoring: { // OpenMonitoring
 * //       Prometheus: { // Prometheus
 * //         JmxExporter: { // JmxExporter
 * //           EnabledInBroker: true || false, // required
 * //         },
 * //         NodeExporter: { // NodeExporter
 * //           EnabledInBroker: true || false, // required
 * //         },
 * //       },
 * //     },
 * //     LoggingInfo: { // LoggingInfo
 * //       BrokerLogs: { // BrokerLogs
 * //         CloudWatchLogs: { // CloudWatchLogs
 * //           Enabled: true || false, // required
 * //           LogGroup: "STRING_VALUE",
 * //         },
 * //         Firehose: { // Firehose
 * //           DeliveryStream: "STRING_VALUE",
 * //           Enabled: true || false, // required
 * //         },
 * //         S3: { // S3
 * //           Bucket: "STRING_VALUE",
 * //           Enabled: true || false, // required
 * //           Prefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     NumberOfBrokerNodes: Number("int"),
 * //     State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * //     StateInfo: { // StateInfo
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Tags: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ZookeeperConnectString: "STRING_VALUE",
 * //     ZookeeperConnectStringTls: "STRING_VALUE",
 * //     StorageMode: "LOCAL" || "TIERED",
 * //     CustomerActionStatus: "CRITICAL_ACTION_REQUIRED" || "ACTION_RECOMMENDED" || "NONE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeClusterCommand extends $Command
  .classBuilder<
    DescribeClusterCommandInput,
    DescribeClusterCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DescribeCluster", {})
  .n("KafkaClient", "DescribeClusterCommand")
  .sc(DescribeCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterRequest;
      output: DescribeClusterResponse;
    };
    sdk: {
      input: DescribeClusterCommandInput;
      output: DescribeClusterCommandOutput;
    };
  };
}
