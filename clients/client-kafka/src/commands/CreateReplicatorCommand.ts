// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { CreateReplicatorRequest, CreateReplicatorResponse } from "../models/models_0";
import { de_CreateReplicatorCommand, se_CreateReplicatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicatorCommand}.
 */
export interface CreateReplicatorCommandInput extends CreateReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicatorCommand}.
 */
export interface CreateReplicatorCommandOutput extends CreateReplicatorResponse, __MetadataBearer {}

/**
 * <p>Creates the replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // CreateReplicatorRequest
 *   Description: "STRING_VALUE",
 *   KafkaClusters: [ // __listOfKafkaCluster // required
 *     { // KafkaCluster
 *       AmazonMskCluster: { // AmazonMskCluster
 *         MskClusterArn: "STRING_VALUE", // required
 *       },
 *       VpcConfig: { // KafkaClusterClientVpcConfig
 *         SecurityGroupIds: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ReplicationInfoList: [ // __listOfReplicationInfo // required
 *     { // ReplicationInfo
 *       ConsumerGroupReplication: { // ConsumerGroupReplication
 *         ConsumerGroupsToExclude: [ // __listOf__stringMax256
 *           "STRING_VALUE",
 *         ],
 *         ConsumerGroupsToReplicate: [ // required
 *           "STRING_VALUE",
 *         ],
 *         DetectAndCopyNewConsumerGroups: true || false,
 *         SynchroniseConsumerGroupOffsets: true || false,
 *       },
 *       SourceKafkaClusterArn: "STRING_VALUE", // required
 *       TargetCompressionType: "NONE" || "GZIP" || "SNAPPY" || "LZ4" || "ZSTD", // required
 *       TargetKafkaClusterArn: "STRING_VALUE", // required
 *       TopicReplication: { // TopicReplication
 *         CopyAccessControlListsForTopics: true || false,
 *         CopyTopicConfigurations: true || false,
 *         DetectAndCopyNewTopics: true || false,
 *         StartingPosition: { // ReplicationStartingPosition
 *           Type: "LATEST" || "EARLIEST",
 *         },
 *         TopicNameConfiguration: { // ReplicationTopicNameConfiguration
 *           Type: "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS" || "IDENTICAL",
 *         },
 *         TopicsToExclude: [ // __listOf__stringMax249
 *           "STRING_VALUE",
 *         ],
 *         TopicsToReplicate: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ReplicatorName: "STRING_VALUE", // required
 *   ServiceExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicatorResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorName: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateReplicatorCommandInput - {@link CreateReplicatorCommandInput}
 * @returns {@link CreateReplicatorCommandOutput}
 * @see {@link CreateReplicatorCommandInput} for command's `input` shape.
 * @see {@link CreateReplicatorCommandOutput} for command's `response` shape.
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
export class CreateReplicatorCommand extends $Command
  .classBuilder<
    CreateReplicatorCommandInput,
    CreateReplicatorCommandOutput,
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
  .s("Kafka", "CreateReplicator", {})
  .n("KafkaClient", "CreateReplicatorCommand")
  .f(void 0, void 0)
  .ser(se_CreateReplicatorCommand)
  .de(de_CreateReplicatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicatorRequest;
      output: CreateReplicatorResponse;
    };
    sdk: {
      input: CreateReplicatorCommandInput;
      output: CreateReplicatorCommandOutput;
    };
  };
}
