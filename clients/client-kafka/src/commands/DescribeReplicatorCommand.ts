// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import type { DescribeReplicatorRequest, DescribeReplicatorResponse } from "../models/models_0";
import { DescribeReplicator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicatorCommand}.
 */
export interface DescribeReplicatorCommandInput extends DescribeReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicatorCommand}.
 */
export interface DescribeReplicatorCommandOutput extends DescribeReplicatorResponse, __MetadataBearer {}

/**
 * <p>Describes a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeReplicatorRequest
 *   ReplicatorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicatorResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CurrentVersion: "STRING_VALUE",
 * //   IsReplicatorReference: true || false,
 * //   KafkaClusters: [ // __listOfKafkaClusterDescription
 * //     { // KafkaClusterDescription
 * //       AmazonMskCluster: { // AmazonMskCluster
 * //         MskClusterArn: "STRING_VALUE", // required
 * //       },
 * //       KafkaClusterAlias: "STRING_VALUE",
 * //       VpcConfig: { // KafkaClusterClientVpcConfig
 * //         SecurityGroupIds: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         SubnetIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   ReplicationInfoList: [ // __listOfReplicationInfoDescription
 * //     { // ReplicationInfoDescription
 * //       ConsumerGroupReplication: { // ConsumerGroupReplication
 * //         ConsumerGroupsToExclude: [ // __listOf__stringMax256
 * //           "STRING_VALUE",
 * //         ],
 * //         ConsumerGroupsToReplicate: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DetectAndCopyNewConsumerGroups: true || false,
 * //         SynchroniseConsumerGroupOffsets: true || false,
 * //       },
 * //       SourceKafkaClusterAlias: "STRING_VALUE",
 * //       TargetCompressionType: "NONE" || "GZIP" || "SNAPPY" || "LZ4" || "ZSTD",
 * //       TargetKafkaClusterAlias: "STRING_VALUE",
 * //       TopicReplication: { // TopicReplication
 * //         CopyAccessControlListsForTopics: true || false,
 * //         CopyTopicConfigurations: true || false,
 * //         DetectAndCopyNewTopics: true || false,
 * //         StartingPosition: { // ReplicationStartingPosition
 * //           Type: "LATEST" || "EARLIEST",
 * //         },
 * //         TopicNameConfiguration: { // ReplicationTopicNameConfiguration
 * //           Type: "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS" || "IDENTICAL",
 * //         },
 * //         TopicsToExclude: [ // __listOf__stringMax249
 * //           "STRING_VALUE",
 * //         ],
 * //         TopicsToReplicate: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorDescription: "STRING_VALUE",
 * //   ReplicatorName: "STRING_VALUE",
 * //   ReplicatorResourceArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //   ServiceExecutionRoleArn: "STRING_VALUE",
 * //   StateInfo: { // ReplicationStateInfo
 * //     Code: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReplicatorCommandInput - {@link DescribeReplicatorCommandInput}
 * @returns {@link DescribeReplicatorCommandOutput}
 * @see {@link DescribeReplicatorCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicatorCommandOutput} for command's `response` shape.
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
export class DescribeReplicatorCommand extends $Command
  .classBuilder<
    DescribeReplicatorCommandInput,
    DescribeReplicatorCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DescribeReplicator", {})
  .n("KafkaClient", "DescribeReplicatorCommand")
  .sc(DescribeReplicator$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicatorRequest;
      output: DescribeReplicatorResponse;
    };
    sdk: {
      input: DescribeReplicatorCommandInput;
      output: DescribeReplicatorCommandOutput;
    };
  };
}
