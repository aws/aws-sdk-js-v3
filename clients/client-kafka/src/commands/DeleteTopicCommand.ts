// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import type { DeleteTopicRequest, DeleteTopicResponse } from "../models/models_0";
import { DeleteTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandInput extends DeleteTopicRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandOutput extends DeleteTopicResponse, __MetadataBearer {}

/**
 * <p>Deletes a topic in the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteTopicCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteTopicCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteTopicRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * //   TopicName: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param DeleteTopicCommandInput - {@link DeleteTopicCommandInput}
 * @returns {@link DeleteTopicCommandOutput}
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ClusterConnectivityException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ControllerMovedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link GroupSubscribedToTopicException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaTimeoutException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotControllerException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ReassignmentInProgressException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnknownTopicOrPartitionException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class DeleteTopicCommand extends $Command
  .classBuilder<
    DeleteTopicCommandInput,
    DeleteTopicCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DeleteTopic", {})
  .n("KafkaClient", "DeleteTopicCommand")
  .sc(DeleteTopic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRequest;
      output: DeleteTopicResponse;
    };
    sdk: {
      input: DeleteTopicCommandInput;
      output: DeleteTopicCommandOutput;
    };
  };
}
