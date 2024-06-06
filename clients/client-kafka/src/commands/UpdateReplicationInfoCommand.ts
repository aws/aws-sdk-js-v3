// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateReplicationInfoRequest, UpdateReplicationInfoResponse } from "../models/models_0";
import { de_UpdateReplicationInfoCommand, se_UpdateReplicationInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReplicationInfoCommand}.
 */
export interface UpdateReplicationInfoCommandInput extends UpdateReplicationInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationInfoCommand}.
 */
export interface UpdateReplicationInfoCommandOutput extends UpdateReplicationInfoResponse, __MetadataBearer {}

/**
 * <p>Updates replication info of a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateReplicationInfoCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateReplicationInfoCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateReplicationInfoRequest
 *   ConsumerGroupReplication: { // ConsumerGroupReplicationUpdate
 *     ConsumerGroupsToExclude: [ // __listOf__stringMax256 // required
 *       "STRING_VALUE",
 *     ],
 *     ConsumerGroupsToReplicate: [ // required
 *       "STRING_VALUE",
 *     ],
 *     DetectAndCopyNewConsumerGroups: true || false, // required
 *     SynchroniseConsumerGroupOffsets: true || false, // required
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 *   ReplicatorArn: "STRING_VALUE", // required
 *   SourceKafkaClusterArn: "STRING_VALUE", // required
 *   TargetKafkaClusterArn: "STRING_VALUE", // required
 *   TopicReplication: { // TopicReplicationUpdate
 *     CopyAccessControlListsForTopics: true || false, // required
 *     CopyTopicConfigurations: true || false, // required
 *     DetectAndCopyNewTopics: true || false, // required
 *     TopicsToExclude: [ // __listOf__stringMax249 // required
 *       "STRING_VALUE",
 *     ],
 *     TopicsToReplicate: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateReplicationInfoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReplicationInfoResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateReplicationInfoCommandInput - {@link UpdateReplicationInfoCommandInput}
 * @returns {@link UpdateReplicationInfoCommandOutput}
 * @see {@link UpdateReplicationInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationInfoCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateReplicationInfoCommand extends $Command
  .classBuilder<
    UpdateReplicationInfoCommandInput,
    UpdateReplicationInfoCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "UpdateReplicationInfo", {})
  .n("KafkaClient", "UpdateReplicationInfoCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReplicationInfoCommand)
  .de(de_UpdateReplicationInfoCommand)
  .build() {}
