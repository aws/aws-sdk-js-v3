// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import type { CreateTopicRequest, CreateTopicResponse } from "../models/models_0";
import { CreateTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandInput extends CreateTopicRequest {}
/**
 * @public
 *
 * The output of {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandOutput extends CreateTopicResponse, __MetadataBearer {}

/**
 * <p>Creates a topic in the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateTopicCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateTopicCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // CreateTopicRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 *   PartitionCount: Number("int"), // required
 *   ReplicationFactor: Number("int"), // required
 *   Configs: "STRING_VALUE",
 * };
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * // { // CreateTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * //   TopicName: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param CreateTopicCommandInput - {@link CreateTopicCommandInput}
 * @returns {@link CreateTopicCommandOutput}
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ClusterConnectivityException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
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
 * @throws {@link ReassignmentInProgressException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TopicExistsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
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
export class CreateTopicCommand extends $Command
  .classBuilder<
    CreateTopicCommandInput,
    CreateTopicCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "CreateTopic", {})
  .n("KafkaClient", "CreateTopicCommand")
  .sc(CreateTopic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTopicRequest;
      output: CreateTopicResponse;
    };
    sdk: {
      input: CreateTopicCommandInput;
      output: CreateTopicCommandOutput;
    };
  };
}
