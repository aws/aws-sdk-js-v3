// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListTopicsRequest, ListTopicsResponse } from "../models/models_0";
import { ListTopics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandInput extends ListTopicsRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandOutput extends ListTopicsResponse, __MetadataBearer {}

/**
 * <p>List topics in a MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListTopicsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListTopicsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListTopicsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TopicNameFilter: "STRING_VALUE",
 * };
 * const command = new ListTopicsCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicsResponse
 * //   Topics: [ // __listOfTopicInfo
 * //     { // TopicInfo
 * //       TopicArn: "STRING_VALUE",
 * //       TopicName: "STRING_VALUE",
 * //       ReplicationFactor: Number("int"),
 * //       PartitionCount: Number("int"),
 * //       OutOfSyncReplicaCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicsCommandInput - {@link ListTopicsCommandInput}
 * @returns {@link ListTopicsCommandOutput}
 * @see {@link ListTopicsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
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
export class ListTopicsCommand extends $Command
  .classBuilder<
    ListTopicsCommandInput,
    ListTopicsCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "ListTopics", {})
  .n("KafkaClient", "ListTopicsCommand")
  .sc(ListTopics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicsRequest;
      output: ListTopicsResponse;
    };
    sdk: {
      input: ListTopicsCommandInput;
      output: ListTopicsCommandOutput;
    };
  };
}
